import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthShell from "./AuthShell";

function destForEmail(email) {
  const v = email.toLowerCase();
  if (v.includes("maya") || v.includes("coach")) return "/coach";
  if (v.includes("alex") || v.includes("admin")) return "/admin";
  return "/athlete";
}

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function submit(e) {
    e.preventDefault();
    if (!email.trim() || !password) return;
    navigate(destForEmail(email));
  }

  return (
    <AuthShell>
      <form className="auth-card rise d1" onSubmit={submit}>
        <h1>Sign in</h1>
        <p className="auth-lead">Use your school email.</p>
        <div className="auth-fields">
          <div className="field-row">
            <div className="field">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="field">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
        </div>
        <button className="btn wide" type="submit" disabled={!email.trim() || !password}>
          Sign in
        </button>
        <p className="auth-switch">
          New here? <Link to="/signup">Create an account</Link>
        </p>
      </form>
    </AuthShell>
  );
}
