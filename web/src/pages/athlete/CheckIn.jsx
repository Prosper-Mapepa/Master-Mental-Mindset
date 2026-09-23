import { Link } from "react-router-dom";
import { checkInScales } from "../../data";
import { useAppState } from "../../state";

export default function CheckIn() {
  const { checkIn, setCheckIn, checkInDone, setCheckInDone } = useAppState();

  return (
    <div className="stack" style={{ maxWidth: 760 }}>
      <header className="page-head">
        <h1>How is this week?</h1>
        <p className="sub">About 30 seconds.</p>
      </header>

      <div className="scale-grid">
        {checkInScales.map((scale) => {
          const value = checkIn[scale.id];
          return (
            <label className="scale" key={scale.id} style={{ "--fill": `${((value - 1) / 4) * 100}%` }}>
              <div className="lab">
                <span>{scale.label}</span>
                <span className="val">{value}</span>
              </div>
              <input
                type="range"
                min="1"
                max="5"
                step="1"
                value={value}
                onChange={(e) => setCheckIn({ ...checkIn, [scale.id]: Number(e.target.value) })}
              />
            </label>
          );
        })}
      </div>

      <div className="checkin-foot">
        <button className="btn" type="button" onClick={() => setCheckInDone(true)}>
          {checkInDone ? "Saved" : "Save check-in"}
        </button>
        <Link to="/athlete">Back to this week</Link>
      </div>
    </div>
  );
}
