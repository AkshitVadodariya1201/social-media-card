import React from "react";
import "../App.css";

export default function Avatar({ url }) {
  return (
    <>
      <img className="avatar" src={url} alt="avatar" />
    </>
  );
}
