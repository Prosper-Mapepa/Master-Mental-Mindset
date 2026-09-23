import { useState } from "react";

export default function VideoEmbed({ src = "/video.mp4", title, caption, onPlay }) {
  const [play, setPlay] = useState(false);

  function start() {
    setPlay(true);
    onPlay?.();
  }

  return (
    <figure className="video-card">
      <div className="video-frame">
        {play ? (
          <video src={src} title={title} controls autoPlay playsInline onPlay={() => onPlay?.()} />
        ) : (
          <button className="video-play" type="button" onClick={start} aria-label={`Play ${title}`}>
            <video src={`${src}#t=0.1`} muted preload="metadata" playsInline />
            <span className="play-btn" aria-hidden="true">▶</span>
          </button>
        )}
      </div>
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
}
