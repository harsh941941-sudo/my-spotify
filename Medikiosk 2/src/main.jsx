import React, {
  useEffect,
  useState
} from "react";

import {
  createRoot
} from "react-dom/client";

import Header from "./components/Header";
import Home from "./components/Home";
import PatientForm from "./components/PatientForm";
import DoctorDashboard from "./components/DoctorDashboard";
import AdminDashboard from "./components/AdminDashboard";
import TreatmentPlan from "./components/TreatmentPlan";

import {
  loadPatients,
  savePatients,
  seedPatients
} from "./data/data";

import "./style.css";

function App() {

  const [patients, setPatients] =
    useState(loadPatients);

  const [page, setPage] =
    useState("home");

  const [selectedId, setSelectedId] =
    useState(null);

  const [toast, setToast] =
    useState("");

  useEffect(() => {

    savePatients(patients);

  }, [patients]);

  const selected =
    patients.find(
      patient =>
        patient.id === selectedId
    ) || null;

  const notify = message => {

    setToast(message);

    window.setTimeout(
      () => setToast(""),
      3000
    );
  };

  const addPatient = patient => {

    const next = [
      patient,
      ...patients
    ];

    setPatients(next);

    setSelectedId(patient.id);

    setPage("doctor");

    notify(
      `${patient.name} submitted successfully and routed to ${patient.doctorName}.`
    );
  };

  const updatePatient = (
    id,
    patch
  ) => {

    setPatients(list =>
      list.map(patient =>
        patient.id === id
          ? {
              ...patient,
              ...patch
            }
          : patient
      )
    );
  };

  const resetDemo = () => {

    setPatients(seedPatients);

    setSelectedId(null);

    savePatients(seedPatients);

    notify("Demo data reset.");
  };

  return (
    <div className="app">

      <Header
        page={page}
        setPage={setPage}
      />

      {page === "home" && (

        <Home
          setPage={setPage}
          patients={patients}
        />

      )}

      {page === "patient" && (

        <PatientForm
          onSubmit={addPatient}
          setPage={setPage}
        />

      )}

      {page === "doctor" && (

        <DoctorDashboard
          patients={patients}
          selected={selected}
          selectedId={selectedId}
          setSelectedId={setSelectedId}
          updatePatient={updatePatient}
          setPage={setPage}
        />

      )}
      
      {page === "treatment" && selected && (
        <TreatmentPlan
          patient={selected}
          updatePatient={updatePatient}
          setPage={setPage}
        />
      )}

      {page === "admin" && (

        <AdminDashboard
          patients={patients}
          selected={selected}
          setSelectedId={setSelectedId}
          setPage={setPage}
          resetDemo={resetDemo}
        />

      )}

      {toast && (

        <div className="toast">
          {toast}
        </div>

      )}

    </div>
  );
}

const root =
  createRoot(
    document.getElementById("root")
  );

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);