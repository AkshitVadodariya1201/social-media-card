import React from "react";

export default function Button({ title, url }) {
  return (
    <a className="url" href={url} target="_blank" rel="noopener noreferrer">
      <button className="btn">{title}</button>
    </a>
  );
}
