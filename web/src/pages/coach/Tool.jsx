import { Link } from "react-router-dom";
import { coachTool } from "../../data";

export default function Tool() {
  return (
    <div className="stack" style={{ maxWidth: 640 }}>
      <header className="page-head">
        <p className="kicker">Week {coachTool.week}</p>
        <h1>{coachTool.module}</h1>
        <p className="sub">5 minutes. Same topic the athletes are on.</p>
      </header>
      <section className="card tool-try">
        <h2>Ask them</h2>
        <p style={{ color: "var(--ink)", marginTop: 4 }}>“{coachTool.starter}”</p>
      </section>
      <section className="card">
        <h2>Do this</h2>
        <ol className="tool-steps">
          <li>{coachTool.activity}</li>
          <li>Keep it short. Locker room, not a lecture.</li>
          <li>End on one next action the team can take.</li>
        </ol>
      </section>
      <Link to="/coach">Back to pulse</Link>
    </div>
  );
}
