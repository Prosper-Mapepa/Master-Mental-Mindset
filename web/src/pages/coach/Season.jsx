import { topics, recommendedSeason, team } from "../../data";
import { useAppState } from "../../state";

function LockIcon() {
  return (
    <svg className="season-lock" viewBox="0 0 16 16" aria-hidden="true">
      <rect x="3.2" y="7.2" width="9.6" height="7.2" rx="1.8" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <path d="M5.2 7.2V5.2a2.8 2.8 0 0 1 5.6 0v2" fill="none" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

export default function Season() {
  const { season, setSeason, selectedTopics, setSelectedTopics } = useAppState();

  function toggle(id) {
    setSelectedTopics((cur) => (cur.includes(id) ? cur.filter((x) => x !== id) : [...cur, id]));
  }

  return (
    <div className="stack" style={{ maxWidth: 720 }}>
      <header className="page-head">
        <h1>Season plan</h1>
        <p className="sub">{team.seasonWeeks} weeks. Pick the topics.</p>
      </header>

      <div className="topics">
        {topics.map((t) => {
          const on = selectedTopics.includes(t.id);
          return (
            <button key={t.id} type="button" className={`topic ${on ? "on" : ""}`} onClick={() => toggle(t.id)}>
              {t.label}
              <i aria-hidden="true" />
            </button>
          );
        })}
      </div>
      <div className="checkin-foot">
        <button className="btn" type="button" onClick={() => setSeason(recommendedSeason)}>
          Use recommended
        </button>
      </div>

      <ol className="season-list">
        {season.map((w) => {
          const now = w.week === team.week;
          const done = w.week < team.week;
          const state = now ? "now" : done ? "done" : "locked";
          return (
            <li key={w.week}>
              <div className={`season-item ${state}`}>
                <span className="season-num">{done ? "✓" : w.week}</span>
                <div className="season-copy">
                  <b>{w.title}</b>
                  <span>Week {w.week}</span>
                </div>
                {now && <span className="season-tag">This week</span>}
                {state === "locked" && (
                  <span className="season-tag" aria-label="Locked">
                    <LockIcon />
                  </span>
                )}
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
