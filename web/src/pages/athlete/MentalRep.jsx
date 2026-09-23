import { useState } from "react";
import { Link } from "react-router-dom";
import { currentRep } from "../../data";
import { useAppState } from "../../state";
import VideoEmbed from "../../components/VideoEmbed";

const labels = ["Check-in", "Learn", "Practice", "Apply", "Keep"];

export default function MentalRep() {
  const { repDone, setRepDone, resetPhrase, setResetPhrase } = useAppState();
  const [step, setStep] = useState(0);
  const [unlocked, setUnlocked] = useState(0);
  const [q, setQ] = useState(null);
  const [scene, setScene] = useState(null);
  const [watched, setWatched] = useState(false);

  function ready() {
    if (step === 0) return q !== null;
    if (step === 1) return watched;
    if (step === 2) return scene !== null;
    if (step === 3) return Boolean(resetPhrase.trim());
    return true;
  }

  function go(i) {
    if (i <= unlocked) setStep(i);
  }

  function next() {
    if (!ready()) return;
    if (step === 4) {
      setRepDone(true);
      return;
    }
    const n = step + 1;
    setUnlocked((u) => Math.max(u, n));
    setStep(n);
  }

  return (
    <div className="stack" style={{ maxWidth: 760 }}>
      <header className="page-head">
        <h1>{currentRep.title}</h1>
        <p className="sub">{currentRep.minutes} minutes · step {step + 1} of {labels.length}</p>
      </header>

      <ol className="steps">
        {labels.map((label, i) => {
          const state = i < step ? "done" : i === step ? "now" : "";
          const canGo = i <= unlocked;
          return (
            <li key={label} className={state}>
              <button
                type="button"
                className="step-btn"
                disabled={!canGo}
                onClick={() => canGo && go(i)}
              >
                <span className="step-num">{i < step ? "✓" : i + 1}</span>
                <span className="step-lab">{label}</span>
              </button>
            </li>
          );
        })}
      </ol>

      {step === 0 && (
        <section className="card">
          <h2>{currentRep.question}</h2>
          <div className="choices">
            {currentRep.options.map((opt, i) => (
              <button key={opt} className={`choice ${q === i ? "sel" : ""}`} type="button" onClick={() => setQ(i)}>
                <i />
                {opt}
              </button>
            ))}
          </div>
          <button className="btn wide" type="button" disabled={q === null} onClick={next}>
            Continue
          </button>
        </section>
      )}

      {step === 1 && (
        <section className="card">
          <h2>Learn</h2>
          <p>{currentRep.learn.body}</p>
          <VideoEmbed
            id={currentRep.learn.videoId}
            title={currentRep.learn.videoTitle}
            caption="Watch, then take the next step."
            onPlay={() => setWatched(true)}
          />
          <button className="btn wide" type="button" disabled={!watched} onClick={next}>
            Continue
          </button>
        </section>
      )}

      {step === 2 && (
        <section className="card">
          <h2>{currentRep.scenario.prompt}</h2>
          <div className="choices">
            {currentRep.scenario.options.map((opt, i) => (
              <button key={opt} className={`choice ${scene === i ? "sel" : ""}`} type="button" onClick={() => setScene(i)}>
                <i />
                {opt}
              </button>
            ))}
          </div>
          {scene !== null && (
            <p className={scene === currentRep.scenario.good ? "note ok" : "note info"}>
              {scene === currentRep.scenario.good
                ? "That’s the next-play move. One breath, then the next action."
                : "Notice the urge to fix the last play. The skill is returning to the next one."}
            </p>
          )}
          <button className="btn wide" type="button" disabled={scene === null} onClick={next}>
            Continue
          </button>
        </section>
      )}

      {step === 3 && (
        <section className="card">
          <h2>{currentRep.applyLabel}</h2>
          <p>Write a short phrase you can say after a mistake. Keep it under six words.</p>
          <div className="field">
            <label htmlFor="phrase">Reset phrase</label>
            <input
              id="phrase"
              value={resetPhrase}
              onChange={(e) => setResetPhrase(e.target.value)}
            />
          </div>
          <button className="btn wide" type="button" disabled={!resetPhrase.trim()} onClick={next}>
            Save phrase
          </button>
        </section>
      )}

      {step === 4 && (
        <section className="card">
          <h2>This week</h2>
          <p>{currentRep.challenge}</p>
          {resetPhrase && <p className="note ok" style={{ marginTop: 16 }}>Your phrase: “{resetPhrase}”</p>}
          <button className="btn wide" type="button" onClick={() => setRepDone(true)}>
            {repDone ? "Mental Rep complete" : "Mark complete"}
          </button>
          {repDone && (
            <Link className="btn ghost wide" to="/athlete">
              Back to this week
            </Link>
          )}
        </section>
      )}
    </div>
  );
}
