import { schools } from "../../data";

export default function Teams() {
  return (
    <div className="stack">
      <header className="page-head">
        <h1>Schools</h1>
        <p className="sub">Join codes and access.</p>
      </header>
      <div className="schools">
        {schools.map((s) => (
          <div className="school" key={s.school}>
            <div>
              <b>{s.school}</b>
              <span>{s.teams} teams · {s.athletes} athletes</span>
            </div>
            <span className="code">{s.code}</span>
            <span className={`status ${s.status === "Active" ? "done" : "ready"}`}>{s.status}</span>
          </div>
        ))}
      </div>
      <div className="checkin-foot">
        <button className="btn" type="button">Add school</button>
        <button className="btn ghost" type="button">New team code</button>
      </div>
    </div>
  );
}
