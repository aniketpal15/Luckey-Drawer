import "./Display.css";

export default function Display({ arr, isSpinning }) {
  return (
    <div className="ticket-slots">
      {arr.map((num, idx) => (
        <div key={idx} className={`digit-card ${isSpinning ? "spin" : ""}`}>
          <span className="digit-value">{num}</span>
        </div>
      ))}
    </div>
  );
}