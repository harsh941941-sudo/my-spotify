import React from "react";

export function Flow({ icon, title, text }) {
  return (
    <div className="flowCard">
      <div className="flowIcon">{icon}</div>

      <div>
        <b>{title}</b>
        <span>{text}</span>
      </div>
    </div>
  );
}

export function Stat({ icon, label, value }) {
  return (
    <div className="stat">
      <div className="statIcon">{icon}</div>

      <div>
        <strong>{value}</strong>
        <span>{label}</span>
      </div>
    </div>
  );
}

export function SectionTitle({ title, subtitle }) {
  return (
    <div className="sectionTitle">
      <h2>{title}</h2>
      <p>{subtitle}</p>
    </div>
  );
}

export function Field({ label, children }) {
  return (
    <label className="field">
      <span>{label}</span>
      {children}
    </label>
  );
}

export function Info({ label, value }) {
  return (
    <div className="info">
      <span>{label}</span>
      <b>{value}</b>
    </div>
  );
}

export function RecordSection({ title, children }) {
  return (
    <section className="recordSection">
      <h3>{title}</h3>
      {children}
    </section>
  );
}

export function Empty({ text }) {
  return (
    <div className="empty">
      {text}
    </div>
  );
}