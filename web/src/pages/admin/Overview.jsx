import { Link } from "react-router-dom";
import { schools } from "../../data";

export default function Overview() {
  const athletes = schools.reduce((n, s) => n + s.athletes, 0);
  const teams = schools.reduce((n, s) => n + s.teams, 0);
  const ending = schools.filter((s) => s.status !== "Active").length;

  return (
    <div className="stack">
      <header className="page-head">
        <h1>Overview</h1>
        <p className="sub">Schools, teams, and access this week.</p>
      </header>
      <div className="grid-3">
        <div className="stat"><b>{schools.length}</b><span>Schools</span></div>
        <div className="stat"><b>{teams}</b><span>Teams</span></div>
        <div className="stat"><b>{athletes}</b><span>Athletes</span></div>
      </div>
      <Link className="action-card primary" to="/admin/teams">
        <div className="action-top">
          <span className="step">Access</span>
          {ending > 0 && <span className="status ready">{ending} ending soon</span>}
        </div>
        <h2>Schools</h2>
        <p>Join codes and which programs are active.</p>
        <span className="action-go">Open schools</span>
      </Link>
    </div>
  );
}
