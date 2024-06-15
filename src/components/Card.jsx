import React from "react";
import Avatar from "./Avatar";
import Button from "./Button";

export default function Card({ data, socialLinks }) {
  return (
    <div className="card">
      <div className="avatar-text">
        <Avatar url={data.avatar} />
        <div className="name-location">
          <h1>{data.name}</h1>
          <h5 className="location">{data.location}</h5>
        </div>
        <p>"{data.bio}"</p>
      </div>
      <div className="social-links">
        {socialLinks.map((link, index) => (
          <Button key={index} title={link.title} url={link.url} />
        ))}
      </div>
    </div>
  );
}
