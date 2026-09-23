import { useState } from "react";

export default function VideoEmbed({ id, title, caption, onPlay }) {
  const [play, setPlay] = useState(false);
  const src = `https://www.youtube.com/embed/${id}?rel=0&modestbranding=1&autoplay=1`;

  return (
    <figure className="video-card">
      <div className="video-frame">
        {play ? (
          <iframe
            src={src}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        ) : (
          <button
            className="video-play"
            type="button"
            onClick={() => {
              setPlay(true);
              onPlay?.();
            }}
            aria-label={`Play ${title}`}
          >
            <img src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`} alt="" />
            <span className="play-btn" aria-hidden="true">▶</span>
          </button>
        )}
      </div>
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
}
