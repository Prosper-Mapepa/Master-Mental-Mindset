import { Link } from "react-router-dom";
import { athlete, currentRep, team } from "../../data";
import { useAppState } from "../../state";

export default function AthleteHome() {
  const { repDone, checkInDone } = useAppState();

  return (
    <div className="stack">
      <header className="page-head">
        <h1>Hey, {athlete.firstName}</h1>
        <p className="sub">Week {team.week} of {team.seasonWeeks} · {currentRep.title}</p>
      </header>

      <div className="action-grid">
        <Link className="action-card primary" to="/athlete/rep">
          <div className="action-top">
            <span className="step">Mental Rep</span>
            <span className={`status ${repDone ? "done" : "ready"}`}>{repDone ? "Done" : `${currentRep.minutes} min`}</span>
          </div>
          <h2>{currentRep.title}</h2>
          <p>This week’s session.</p>
          <span className="action-go">{repDone ? "Review" : "Start"}</span>
        </Link>
        <Link className="action-card" to="/athlete/check-in">
          <div className="action-top">
            <span className="step">Check-in</span>
            <span className={`status ${checkInDone ? "done" : "ready"}`}>{checkInDone ? "Saved" : "30 sec"}</span>
          </div>
          <h2>How is this week?</h2>
          <p>A short pulse after you train.</p>
          <span className="action-go">{checkInDone ? "Update" : "Check in"}</span>
        </Link>
      </div>
    </div>
  );
}
