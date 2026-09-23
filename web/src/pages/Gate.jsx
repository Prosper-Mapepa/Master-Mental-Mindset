import { Link } from "react-router-dom";

const roles = [
  { to: "/athlete", role: "Athlete", first: "Jordan", last: "Reyes", copy: "This week’s Mental Rep.", cls: "athlete" },
  { to: "/coach", role: "Coach", first: "Maya", last: "Chen", copy: "Team pulse this week.", cls: "coach" },
  { to: "/admin", role: "Admin", first: "Alex", last: "Ward", copy: "Schools and modules.", cls: "admin" },
];

export default function Gate() {
  return (
    <div className="gate">
      <div className="gate-aurora" aria-hidden="true" />
      <header className="gate-bar rise d0">
        <Link to="/" className="gate-logo">
          <span className="logo-sq">M³</span>
          Master Mental Mindset
        </Link>
        <nav className="gate-actions">
          <Link to="/login">Sign in</Link>
          <Link className="gate-cta" to="/signup">Create account</Link>
        </nav>
      </header>

      <main className="gate-main">
        <h1 className="rise d1">Mindset training for the season.</h1>
        <p className="lead rise d2">
          A few minutes each week. Training for athletes and the coaches who lead them.
        </p>
        <div className="role-list">
          {roles.map((r, i) => (
            <Link key={r.to} className={`role-card ${r.cls} rise d${i + 3}`} to={r.to}>
              <span className="role-tag">{r.role}</span>
              <strong>
                {r.first}
                {" "}
                {r.last}
              </strong>
              <em>{r.copy}</em>
              <span className="role-go">Open</span>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
