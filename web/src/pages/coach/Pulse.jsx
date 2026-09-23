import { Link } from "react-router-dom";
import { pulseMetrics, team } from "../../data";
import { useAppState } from "../../state";

function trend(metric) {
  const d = +(metric.value - metric.prev).toFixed(1);
  const inverted = metric.id === "pressure";
  if (d > 0) return { cls: inverted ? "down" : "up", arrow: "↑" };
  if (d < 0) return { cls: inverted ? "up" : "down", arrow: "↓" };
  return { cls: "flat", arrow: "→" };
}

export default function Pulse() {
  const { checkInDone } = useAppState();
  const n = 18 + (checkInDone ? 1 : 0);

  return (
    <div className="stack">
      <header className="page-head">
        <h1>Team Pulse</h1>
        <p className="sub">{n} of {team.athletes} checked in · team averages</p>
      </header>
      <div className="grid-3">
        {pulseMetrics.map((m) => {
          const t = trend(m);
          return (
            <div className="stat" key={m.id}>
              <b className={`delta ${t.cls}`}>{m.value.toFixed(1)} <span>/ 5 {t.arrow}</span></b>
              <span>{m.label}</span>
              <div className="bar" aria-hidden="true"><i style={{ width: `${(m.value / 5) * 100}%` }} /></div>
            </div>
          );
        })}
      </div>
      <Link className="action-card primary" to="/coach/tool">
        <div className="action-top">
          <span className="step">This week</span>
          <span className="status ready">Pressure up</span>
        </div>
        <h2>Managing Pressure</h2>
        <p>Use the 5-minute coach tool in the locker room.</p>
        <span className="action-go">Open tool</span>
      </Link>
    </div>
  );
}
