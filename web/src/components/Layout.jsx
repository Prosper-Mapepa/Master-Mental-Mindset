import { useState } from "react";
import { NavLink, Outlet, Link } from "react-router-dom";
import { athlete, coach, admin, team, notifications } from "../data";

const nav = {
  athlete: [
    { to: "/athlete", label: "Home", short: "Home", end: true },
    { to: "/athlete/rep", label: "Mental Rep", short: "Rep" },
    { to: "/athlete/check-in", label: "Check-in", short: "Check" },
    { to: "/athlete/toolbox", label: "Toolbox", short: "Tools" },
    { to: "/athlete/progress", label: "Season", short: "Season" },
  ],
  coach: [
    { to: "/coach", label: "Team Pulse", short: "Pulse", end: true },
    { to: "/coach/completion", label: "Who finished", short: "Done" },
    { to: "/coach/season", label: "Season plan", short: "Season" },
    { to: "/coach/tool", label: "Coach tool", short: "Tool" },
  ],
  admin: [
    { to: "/admin", label: "Overview", short: "Home", end: true },
    { to: "/admin/teams", label: "Schools", short: "Schools" },
    { to: "/admin/content", label: "Content", short: "Content" },
  ],
};

const people = {
  athlete: { name: `${athlete.firstName} ${athlete.lastName}` },
  coach: { name: `Coach ${coach.lastName}` },
  admin: { name: `${admin.firstName} ${admin.lastName}` },
};

function NavItems({ role }) {
  return nav[role].map((item) => (
    <NavLink key={item.to} to={item.to} end={item.end} className={({ isActive }) => (isActive ? "active" : "")}>
      <span className="nav-full">{item.label}</span>
      <span className="nav-short">{item.short}</span>
    </NavLink>
  ));
}

export default function Layout({ role }) {
  const [open, setOpen] = useState(false);
  const notes = notifications[role] || [];
  const person = people[role];

  return (
    <div className="shell" data-role={role}>
      <aside className="side">
        <Link to="/" className="brand-row">
          <span className="logo-sq">M³</span>
          <span>
            <strong>Mindset</strong>
            <small>{team.name}</small>
          </span>
        </Link>
        <nav className="nav">
          <NavItems role={role} />
        </nav>
        <Link className="switch" to="/">
          Sign out
        </Link>
      </aside>
      <div className="workspace">
        <header className="topbar">
          <Link to="/" className="top-brand">
            <span className="logo-sq">M³</span>
            <strong>Mindset</strong>
          </Link>
          <div className="crumb">
            <span className="role-badge">{role}</span>
            <span aria-hidden="true">·</span>
            <span>{team.school}</span>
          </div>
          <div className="userchip">
            {notes.length > 0 && (
              <div className="bell-wrap">
                <button className="bell" type="button" onClick={() => setOpen((v) => !v)} aria-expanded={open} aria-label="Notifications">
                  <svg viewBox="0 0 20 20" aria-hidden="true">
                    <path d="M10 2.4a4.2 4.2 0 0 0-4.2 4.2v2.1c0 .7-.3 1.4-.8 1.9L4 11.8h12l-1-1.2c-.5-.5-.8-1.2-.8-1.9V6.6A4.2 4.2 0 0 0 10 2.4Z" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
                    <path d="M8.2 14.6a1.8 1.8 0 0 0 3.6 0" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                  </svg>
                  <i>{notes.length}</i>
                </button>
                {open && (
                  <div className="bell-list">
                    <header>Notifications</header>
                    {notes.map((n) => (
                      <Link key={n.title} to={n.to} onClick={() => setOpen(false)}>
                        <b>{n.title}</b>
                        <small>{n.time}</small>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            )}
            <div className="who">{person.name}</div>
            <Link className="top-out" to="/">Sign out</Link>
          </div>
        </header>
        <div className="body">
          <div className="main">
            <Outlet />
          </div>
        </div>
        <nav className="dock" aria-label="Main">
          <NavItems role={role} />
        </nav>
      </div>
    </div>
  );
}
