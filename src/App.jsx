import React, { useState, useEffect } from 'react';
import { 
  Dumbbell, 
  Activity, 
  CalendarDays, 
  Plus, 
  Trash2, 
  Trophy,
  Flame
} from 'lucide-react';
import './index.css';

const LIFTS = [
  { id: 'deadlift', name: 'Deadlift', icon: Dumbbell },
  { id: 'chest-press', name: 'Chest Press', icon: Activity },
  { id: 'low-row', name: 'Single-Arm Low Row', icon: Flame },
  { id: 'squat', name: 'Squat', icon: Trophy },
];

function App() {
  const [selectedLift, setSelectedLift] = useState(LIFTS[0].id);
  const [weight, setWeight] = useState('');
  const [reps, setReps] = useState('');
  const [logs, setLogs] = useState(() => {
    const savedLogs = localStorage.getItem('foundation-lifts-logs');
    if (savedLogs) {
      try {
        return JSON.parse(savedLogs);
      } catch (e) {
        console.error("Failed to parse logs from local storage", e);
        return [];
      }
    }
    return [];
  });

  // Save to localStorage when logs change
  useEffect(() => {
    localStorage.setItem('foundation-lifts-logs', JSON.stringify(logs));
  }, [logs]);

  const handleAddLog = (e) => {
    e.preventDefault();
    if (!weight || !reps) return;

    const newLog = {
      id: Date.now().toString(),
      liftId: selectedLift,
      weight: parseFloat(weight),
      reps: parseInt(reps, 10),
      date: new Date().toISOString(),
    };

    setLogs([newLog, ...logs]);
    setWeight('');
    setReps('');
  };

  const handleDeleteLog = (id) => {
    setLogs(logs.filter(log => log.id !== id));
  };

  const currentLiftName = LIFTS.find(l => l.id === selectedLift)?.name;
  const filteredLogs = logs.filter(log => log.liftId === selectedLift).sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <div className="app-container">
      <header className="header">
        <h1>Orangetheory</h1>
        <p>Season of Strength: Foundation Lifts</p>
      </header>

      <nav className="lifts-nav">
        {LIFTS.map((lift) => {
          const Icon = lift.icon;
          const isActive = selectedLift === lift.id;
          return (
            <button
              key={lift.id}
              className={`lift-btn ${isActive ? 'active' : ''}`}
              onClick={() => setSelectedLift(lift.id)}
            >
              <Icon size={24} />
              <span>{lift.name}</span>
            </button>
          );
        })}
      </nav>

      <main className="form-section glass-panel">
        <h2>
          {React.createElement(LIFTS.find(l => l.id === selectedLift)?.icon || Dumbbell, { size: 24, color: 'var(--accent-orange)' })}
          Log {currentLiftName}
        </h2>
        <form onSubmit={handleAddLog}>
          <div className="input-group">
            <label htmlFor="weight">Weight (lbs/kg)</label>
            <input
              type="number"
              id="weight"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              placeholder="e.g., 225"
              step="0.5"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="reps">Reps</label>
            <input
              type="number"
              id="reps"
              value={reps}
              onChange={(e) => setReps(e.target.value)}
              placeholder="e.g., 8"
              required
            />
          </div>
          <button type="submit" className="submit-btn">
            <Plus size={20} />
            Add Log
          </button>
        </form>
      </main>

      <section className="history-section glass-panel">
        <div className="history-header">
          <h2>History</h2>
          <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
            {filteredLogs.length} entries
          </span>
        </div>

        {filteredLogs.length > 0 ? (
          <div className="history-list">
            {filteredLogs.map((log) => (
              <div key={log.id} className="history-item">
                <div>
                  <div className="history-date">
                    <CalendarDays size={14} />
                    {new Date(log.date).toLocaleDateString(undefined, { 
                      month: 'short', 
                      day: 'numeric',
                      year: 'numeric' 
                    })}
                  </div>
                  <div className="history-stats">
                    {log.weight} <span>x</span> {log.reps}
                  </div>
                </div>
                <button 
                  className="delete-btn"
                  onClick={() => handleDeleteLog(log.id)}
                  aria-label="Delete log"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <Activity size={48} opacity={0.2} />
            <p>No logs yet for {currentLiftName}.<br/>Time to get lifting!</p>
          </div>
        )}
      </section>
    </div>
  );
}

export default App;
