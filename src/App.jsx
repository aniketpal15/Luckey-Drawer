import { useState } from 'react';
import './App.css';
import Display from './Display.jsx';
import { getarr, conditionCheck } from './helper';

const TICKET_SIZE = 3;

function App() {
  const [arr, setArr] = useState(() => getarr(TICKET_SIZE));
  const [isSpinning, setIsSpinning] = useState(false);

  const isWinner = conditionCheck(arr);

  function newnum() {
    setIsSpinning(true);
    setArr(getarr(TICKET_SIZE));
    setTimeout(() => setIsSpinning(false), 300);
  }

  return (
    <main className="app-container">
      <div className="glass-card">
        <div className="header">
          <span className="badge">🎰 Lucky Draw</span>
          <h1>Ticket Drawer</h1>
          <p className="subtitle">Draw a ticket where <strong>all 3 numbers match</strong>!</p>
        </div>

        <Display arr={arr} isSpinning={isSpinning} />

        <div className="stats-bar">
          <div className="stat-pill">
            <span className="stat-label">Winning Rule</span>
            <span className="stat-value target">3 Same</span>
          </div>
          <div className="stat-pill">
            <span className="stat-label">Status</span>
            <span className={`stat-value ${isWinner ? 'winner-text' : ''}`}>
              {isWinner ? 'Match!' : 'Drawing'}
            </span>
          </div>
        </div>

        <button className="draw-btn" onClick={newnum} disabled={isSpinning}>
          <span>🎲 Draw New Ticket</span>
        </button>

        {isWinner ? (
          <div className="msg win-msg">
            <span className="party-icon">🎉</span>
            <div>
              <strong>Jackpot!</strong>
              <p>All 3 numbers are identical ({arr[0]}-{arr[1]}-{arr[2]})!</p>
            </div>
          </div>
        ) : (
          <div className="msg hint-msg">
            Keep drawing to match all 3 digits!
          </div>
        )}
      </div>
    </main>
  );
}

export default App;


