import { Link } from "react-router-dom";

export default function AuthShell({ children }) {
  return (
    <div className="gate">
      <div className="gate-aurora" aria-hidden="true" />
      <header className="gate-bar">
        <Link to="/" className="gate-logo">
          <span className="logo-sq">M³</span>
          Master Mental Mindset
        </Link>
      </header>
      <main className="auth-main">{children}</main>
    </div>
  );
}
