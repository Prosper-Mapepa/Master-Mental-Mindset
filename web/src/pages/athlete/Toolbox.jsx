import { Link, useParams } from "react-router-dom";
import { toolbox, helpTopics } from "../../data";
import { useAppState } from "../../state";

export function Toolbox() {
  const { id } = useParams();
  const item = toolbox.find((t) => t.id === id);

  if (item) {
    return (
      <div className="stack" style={{ maxWidth: 640 }}>
        <header className="page-head">
          <p className="kicker">{item.tags[0]}</p>
          <h1>{item.title}</h1>
          <p className="sub">{item.use}</p>
        </header>
        <section className="card tool-try">
          <h2>Try this</h2>
          <ol className="tool-steps">
            <li>One slow breath.</li>
            <li>Say your reset phrase.</li>
            <li>Pick the next action you can take.</li>
          </ol>
        </section>
        <Link to="/athlete/toolbox">Back to toolbox</Link>
      </div>
    );
  }

  return (
    <div className="stack" style={{ maxWidth: 760 }}>
      <header className="page-head">
        <h1>Toolbox</h1>
        <p className="sub">Open a tool when you need it.</p>
      </header>
      <div className="tools">
        {toolbox.map((t) => (
          <Link key={t.id} className="tool-card" to={`/athlete/toolbox/${t.id}`}>
            <span className="tool-tag">{t.tags[0]}</span>
            <b>{t.title}</b>
            <span>{t.use}</span>
          </Link>
        ))}
      </div>
      <Link className="help-link" to="/athlete/help">Need help right now?</Link>
    </div>
  );
}

export function Help() {
  const { resetPhrase } = useAppState();
  return (
    <div className="stack" style={{ maxWidth: 720 }}>
      <header className="page-head">
        <h1>What’s in the way?</h1>
        <p className="sub">Pick one. This is a tool, not a crisis line.</p>
      </header>
      <div className="help-grid">
        {helpTopics.map((h) => (
          <Link key={h.id} className="btn ghost" to="/athlete/toolbox/pressure">
            {h.title}
          </Link>
        ))}
      </div>
      {resetPhrase && <p className="note ok">Your phrase: “{resetPhrase}”</p>}
    </div>
  );
}
