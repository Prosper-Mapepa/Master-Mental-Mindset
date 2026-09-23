import { Link } from "react-router-dom";
import { completedReps, team } from "../../data";
import { useAppState } from "../../state";

function LockIcon() {
  return (
    <svg className="season-lock" viewBox="0 0 16 16" aria-hidden="true">
      <rect x="3.2" y="7.2" width="9.6" height="7.2" rx="1.8" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <path d="M5.2 7.2V5.2a2.8 2.8 0 0 1 5.6 0v2" fill="none" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

export default function Progress() {
  const { repDone } = useAppState();
  const items = completedReps.map((r) => (r.week === team.week ? { ...r, done: repDone } : r));
  const done = items.filter((r) => r.done).length;
  const pct = Math.round((done / team.seasonWeeks) * 100);

  return (
    <div className="stack" style={{ maxWidth: 720 }}>
      <header className="page-head">
        <h1>Season</h1>
        <p className="sub">{done} of {team.seasonWeeks} complete</p>
        <div className="season-bar" aria-hidden="true">
          <i style={{ width: `${pct}%` }} />
        </div>
      </header>

      <ol className="season-list">
        {items.map((r) => {
          const now = r.week === team.week;
          const state = now ? "now" : r.done ? "done" : "locked";
          const inner = (
            <>
              <span className="season-num">{r.done ? "✓" : r.week}</span>
              <div className="season-copy">
                <b>{r.title}</b>
                <span>Week {r.week}</span>
              </div>
              {now && <span className="season-tag">This week</span>}
              {state === "locked" && (
                <span className="season-tag" aria-label="Locked">
                  <LockIcon />
                </span>
              )}
            </>
          );
          return (
            <li key={r.week}>
              {now ? (
                <Link className={`season-item ${state}`} to="/athlete/rep">{inner}</Link>
              ) : (
                <div className={`season-item ${state}`}>{inner}</div>
              )}
            </li>
          );
        })}
      </ol>
    </div>
  );
}
