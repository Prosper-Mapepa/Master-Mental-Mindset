import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthShell from "./AuthShell";

const roles = [
  { id: "athlete", label: "Athlete", to: "/athlete", title: "Join your team", lead: "Use the join code from your coach." },
  { id: "coach", label: "Coach", to: "/coach", title: "Set up your team", lead: "You’ll get a join code after you sign up." },
];

export default function Signup() {
  const navigate = useNavigate();
  const [role, setRole] = useState("athlete");
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [code, setCode] = useState("");

  const current = roles.find((r) => r.id === role);
  const ready = first.trim() && last.trim() && email.trim() && password && (role !== "athlete" || code.trim());

  function submit(e) {
    e.preventDefault();
    if (!ready) return;
    navigate(current.to);
  }

  return (
    <AuthShell>
      <form className="auth-card rise d1" onSubmit={submit}>
        <div className="auth-tabs" role="tablist" aria-label="Account type">
          {roles.map((r) => (
            <button
              key={r.id}
              type="button"
              role="tab"
              aria-selected={role === r.id}
              className={`auth-tab ${r.id} ${role === r.id ? "on" : ""}`}
              onClick={() => setRole(r.id)}
            >
              {r.label}
            </button>
          ))}
        </div>
        <h1>{current.title}</h1>
        <p className="auth-lead">{current.lead}</p>
        <div className="auth-fields">
          <div className="field-row">
            <div className="field">
              <label htmlFor="first">First name</label>
              <input id="first" value={first} onChange={(e) => setFirst(e.target.value)} placeholder="Jordan" />
            </div>
            <div className="field">
              <label htmlFor="last">Last name</label>
              <input id="last" value={last} onChange={(e) => setLast(e.target.value)} placeholder="Reyes" />
            </div>
          </div>
          <div className="field-row">
            <div className="field">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@school.edu"
              />
            </div>
            <div className="field">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                autoComplete="new-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="At least 8 characters"
              />
            </div>
          </div>
          {role === "athlete" && (
            <div className="field">
              <label htmlFor="code">Team join code</label>
              <input
                id="code"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder="LNK-BB-8K2"
                autoCapitalize="characters"
              />
            </div>
          )}
        </div>
        <button className="btn wide" type="submit" disabled={!ready}>
          Create account
        </button>
        <p className="auth-switch">
          Already have an account? <Link to="/login">Sign in</Link>
        </p>
      </form>
    </AuthShell>
  );
}
