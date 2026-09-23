import { roster, team } from "../../data";
import { useAppState } from "../../state";

export default function Completion() {
  const { repDone } = useAppState();
  const people = roster.map((p) => (p.you ? { ...p, done: repDone } : p));
  const done = people.filter((p) => p.done).length;
  const pct = Math.round((done / team.athletes) * 100);

  return (
    <div className="stack">
      <header className="page-head">
        <h1>Who finished</h1>
        <p className="sub">{done} of {team.athletes} done this week</p>
        <div className="season-bar" aria-hidden="true">
          <i style={{ width: `${pct}%` }} />
        </div>
      </header>
      <div className="roster">
        {people.map((p) => (
          <div key={p.name} className={`person ${p.done ? "" : "miss"}`}>
            <span className="mark">{p.done ? "✓" : ""}</span>
            <span>{p.name}</span>
            <span className={`tag ${p.done ? "ok" : ""}`}>{p.done ? "Done" : "Open"}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
