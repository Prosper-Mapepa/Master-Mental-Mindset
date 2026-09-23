import { contentLibrary } from "../../data";

export default function Content() {
  return (
    <div className="stack">
      <header className="page-head">
        <h1>Content</h1>
        <p className="sub">Modules, videos, and coach tools.</p>
      </header>
      <div className="library">
        {contentLibrary.map((cat) => (
          <section className="library-card" key={cat.category}>
            <h3>{cat.category}</h3>
            <ul>
              {cat.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        ))}
      </div>
      <div className="checkin-foot">
        <button className="btn" type="button">Add module</button>
      </div>
    </div>
  );
}
