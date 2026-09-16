import React from "react";

import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  ClipboardList,
  FileText,
  Hospital,
  Stethoscope,
  UserRound,
  Users
} from "lucide-react";

import { Flow, Stat } from "./Common";

export default function Home({ setPage, patients }) {

  const realCount = patients.filter(
    patient => patient.source !== "Demo"
  ).length;

  return (
    <main className="container">

      <section className="hero">

        <div className="eyebrow">
          SIH 2026 • Problem Statement 26047
        </div>

        <h1>
          One patient story.
          <br />
          <em>One connected record.</em>
        </h1>

        <p>
          MediKiosk captures the patient's own answers,
          documents and history, then sends the same structured
          record to the assigned doctor and hospital admin.
        </p>

        <div className="homeActions">

          <button
            className="primary"
            onClick={() => setPage("patient")}
          >
            Start Patient Intake
            <ArrowRight size={17} />
          </button>

          <button
            className="secondary"
            onClick={() => setPage("doctor")}
          >
            Open Doctor Dashboard
          </button>

          <button
            className="secondary"
            onClick={() => setPage("admin")}
          >
            Open Admin Dashboard
          </button>

        </div>

      </section>

      <section className="flow">

        <Flow
          icon={<UserRound />}
          title="Patient"
          text="Enters exact information"
        />

        <ArrowRight className="flowArrow" />

        <Flow
          icon={<Stethoscope />}
          title="Doctor"
          text="Receives that exact record"
        />

        <ArrowRight className="flowArrow" />

        <Flow
          icon={<Hospital />}
          title="Hospital Admin"
          text="Tracks patient → doctor"
        />

      </section>

      <div className="stats">

        <Stat
          icon={<Users />}
          label="Patient submissions"
          value={realCount}
        />

        <Stat
          icon={<ClipboardList />}
          label="Doctor queue"
          value={realCount}
        />

        <Stat
          icon={<FileText />}
          label="Shared records"
          value={realCount}
        />

        <Stat
          icon={<CheckCircle2 />}
          label="Demo system"
          value="Ready"
        />

      </div>

      <div className="notice">

        <AlertTriangle size={18} />

        <span>
          <b>Prototype</b> 
        </span>

      </div>

    </main>
  );
}