
import { useState } from "react";
import "./ProjectMedia.css";

export interface ProjectMediaProps {
  title: string;
  image?: string;
  video?: string;
  poster?: string;
  className?: string;
}

export default function ProjectMedia({
  title,
  image,
  video,
  poster,
  className = "",
}: ProjectMediaProps) {
  const [failedSource, setFailedSource] = useState("");

  const source = video || image || "";
  const hasError = failedSource === source && source !== "";

  if (!source || hasError) {
    return (
      <div
        className={`project-media project-media--fallback ${className}`}
        role="img"
        aria-label={`Illustrative preview for ${title} unavailable`}
      >
        <span>PROJECT SHOWCASE</span>

        <strong>{title}</strong>

        <small>
          Portfolio preview will appear here.
        </small>
      </div>
    );
  }

  if (video) {
    return (
      <div className={`project-media ${className}`}>
        <video
          className="project-media__content"
          src={video}
          poster={poster || image || undefined}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-label={`${title} demonstration`}
          onError={() => setFailedSource(source)}
        />

        <span className="project-media__label">
          PROJECT DEMO
        </span>
      </div>
    );
  }

  return (
    <div className={`project-media ${className}`}>
      <img
        className="project-media__content"
        src={image}
        alt={`Illustrative interface concept for ${title}`}
        loading="lazy"
        decoding="async"
        onError={() => setFailedSource(source)}
      />

      <span className="project-media__label">
        ILLUSTRATIVE PREVIEW
      </span>
    </div>
  );
}
