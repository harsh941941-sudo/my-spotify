import React, { useState } from "react";

import {
  ArrowRight,
  Bell,
  CheckCircle2,
  Search,
  ShieldCheck,
  Stethoscope,
  Users
} from "lucide-react";

import {
  Stat
} from "./Common";

import { doctors } from "../data/data";

export default function AdminDashboard({
  patients,
  selected,
  setSelectedId,
  setPage,
  resetDemo
}) {

  const [query, setQuery] =
    useState("");

  const filtered = patients.filter(
    patient => {

      const searchable = `
        ${patient.name}
        ${patient.symptoms}
        ${patient.doctorName}
        ${patient.id}
      `.toLowerCase();

      return searchable.includes(
        query.toLowerCase()
      );
    }
  );

  return (
    <main className="container">

      <div className="pageHeading">

        <div>

          <div className="eyebrow">
            Hospital Admin
          </div>

          <h1>Patient routing & records</h1>

          <p>
            Admin can see who submitted,
            what they reported, and which
            doctor received it.
          </p>

        </div>

        <div className="adminActions">

          <button
            className="secondary"
            onClick={() =>
              setPage("patient")
            }
          >
            Register patient
          </button>

          <button
            className="secondary"
            onClick={resetDemo}
          >
            Reset demo
          </button>

        </div>

      </div>

      <div className="stats">

        <Stat
          icon={<Users />}
          label="Total records"
          value={patients.length}
        />

        <Stat
          icon={<Bell />}
          label="Waiting / reviewed"
          value={
            patients.filter(
              patient =>
                patient.status !==
                "Reviewed by doctor"
            ).length
          }
        />

        <Stat
          icon={<Stethoscope />}
          label="Doctors"
          value={doctors.length}
        />

        <Stat
          icon={<CheckCircle2 />}
          label="System"
          value="Online"
        />

      </div>

      <div className="card adminTableCard">

        <div className="cardHeader">

          <b>
            Live patient-to-doctor record
          </b>

          <div className="search">

            <Search size={17} />

            <input
              value={query}
              onChange={e =>
                setQuery(e.target.value)
              }
              placeholder="Search records..."
            />

          </div>

        </div>

        <div className="tableWrap">

          <table>

            <thead>

              <tr>
                <th>Patient</th>
                <th>Age</th>
                <th>Symptoms</th>
                <th>Assigned doctor</th>
                <th>Status</th>
                <th>Submitted</th>
              </tr>

            </thead>

            <tbody>

              {filtered.map(patient => (

                <tr
                  key={patient.id}
                  onClick={() =>
                    setSelectedId(
                      patient.id
                    )
                  }
                >

                  <td>
                    <b>{patient.name}</b>
                    <small>
                      {patient.id}
                    </small>
                  </td>

                  <td>
                    {patient.age}
                  </td>

                  <td>
                    {patient.symptoms}
                  </td>

                  <td>
                    <b>
                      {patient.doctorName}
                    </b>

                    <small>
                      {patient.department}
                    </small>
                  </td>

                  <td>
                    <span className="status">
                      {patient.status}
                    </span>
                  </td>

                  <td>
                    {new Date(
                      patient.createdAt
                    ).toLocaleString()}
                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

      {selected && (

        <div className="card adminSelected">

          <div>

            <b>
              Selected record:{" "}
              {selected.name}
            </b>

            <span>
              {selected.age} yrs •{" "}
              {selected.symptoms}
            </span>

          </div>

          <div className="adminRoute">

            <span>Patient</span>

            <ArrowRight size={18} />

            <span>
              {selected.doctorName}
            </span>

            <ArrowRight size={18} />

            <span>
              Hospital Admin
            </span>

          </div>

          <button
            className="secondary"
            onClick={() =>
              setPage("doctor")
            }
          >
            View in Doctor Dashboard
          </button>

        </div>

      )}

      <div className="architecture">

        <ShieldCheck size={20} />

        <div>

          <b>
            Production readiness
          </b>

          <span>
            Its Just a prototype
          </span>

        </div>

      </div>

    </main>
  );
}