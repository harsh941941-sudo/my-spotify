import React, { useState } from "react";

import {
  ArrowRight,
  Search,
  Stethoscope
} from "lucide-react";

import {
  Empty
} from "./Common";

import { doctors } from "../data/data";

import PatientDetail from "./PatientDetail";

export default function DoctorDashboard({
  patients,
  selected,
  selectedId,
  setSelectedId,
  updatePatient,
  setPage
}) {

  const [doctorFilter, setDoctorFilter] =
    useState("DR001");

  const [query, setQuery] =
    useState("");

  const visible = patients.filter(patient => {

    const searchable = `
      ${patient.name}
      ${patient.symptoms}
      ${patient.id}
    `.toLowerCase();

    return (
      patient.doctorId === doctorFilter &&
      searchable.includes(
        query.toLowerCase()
      )
    );

  });

  return (
    <main className="container">

      <div className="pageHeading">

        <div>

          <div className="eyebrow">
            Doctor Dashboard
          </div>

          <h1>Patient queue</h1>

          <p>
            Every row below is created from
            the Patient Kiosk submission.
          </p>

        </div>

        <button
          className="secondary"
          onClick={() =>
            setPage("patient")
          }
        >
          New patient
        </button>

        <button
          className="primary"
          onClick={() => setPage("treatment")}
        >
          Suggest medicines & tests
        </button>

      </div>

      <div className="doctorControls">

        <select
          value={doctorFilter}
          onChange={e => {
            setDoctorFilter(
              e.target.value
            );
            setSelectedId(null);
          }}
        >

          {doctors.map(doctor => (

            <option
              key={doctor.id}
              value={doctor.id}
            >
              {doctor.name} —{" "}
              {doctor.department}
            </option>

          ))}

        </select>

        <div className="search">

          <Search size={17} />

          <input
            value={query}
            onChange={e =>
              setQuery(e.target.value)
            }
            placeholder="Search patient..."
          />

        </div>

      </div>

      <div className="dashboardGrid">

        <div className="card queue">

          <div className="cardHeader">

            <b>Incoming patients</b>

            <span>
              {visible.length} record(s)
            </span>

          </div>

          {visible.length === 0 ? (

            <Empty text="No patients routed to this doctor yet." />

          ) : (

            visible.map(patient => (

              <PatientRow
                key={patient.id}
                patient={patient}
                selected={
                  patient.id === selectedId
                }
                onClick={() =>
                  setSelectedId(
                    patient.id
                  )
                }
              />

            ))

          )}

        </div>

        <div className="card detail">

          {selected &&
          selected.doctorId ===
            doctorFilter ? (

        <div>
          <PatientDetail
            patient={selected}
            updatePatient={updatePatient}
          />

          <div className="detailActions">

           <button
            className="primary"
            onClick={() => setPage("treatment")}
           >
            Suggest medicines & tests
           </button>

          </div>
        </div>  
          ) : (

            <Empty text="Select a patient to view the exact submitted record." />

          )}

        </div>

      </div>

    </main>
  );
}

function PatientRow({
  patient,
  selected,
  onClick
}) {

  const initials = patient.name
    .split(" ")
    .map(word => word[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <button
      className={
        selected
          ? "patientRow selected"
          : "patientRow"
      }
      onClick={onClick}
    >

      <div className="avatar">
        {initials}
      </div>

      <div className="patientRowInfo">

        <b>{patient.name}</b>

        <span>
          {patient.age} yrs •{" "}
          {patient.gender} •{" "}
          {patient.token ||
            patient.id}
        </span>

        <small>
          {patient.symptoms}
        </small>

      </div>

      <span className="status">
        {patient.status}
      </span>

      <ArrowRight size={16} />

    </button>
  );
}