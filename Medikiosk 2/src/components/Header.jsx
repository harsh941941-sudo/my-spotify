import React from "react";

import {
  Activity,
  LayoutDashboard,
  UserRound,
  Users
} from "lucide-react";

export default function Header({ page, setPage }) {
  return (
    <header className="header">

      <button
        className="brand"
        onClick={() => setPage("home")}
      >
        <div className="brandIcon">
          <Activity size={22} />
        </div>

        <div>
          <strong>MediKiosk</strong>
          <span>Smart Hospital System</span>
        </div>
      </button>

      <nav>

        <button
          className={page === "home" ? "active" : ""}
          onClick={() => setPage("home")}
        >
          <LayoutDashboard size={16} />
          Home
        </button>

        <button
          className={page === "patient" ? "active" : ""}
          onClick={() => setPage("patient")}
        >
          <UserRound size={16} />
          Patient
        </button>

        <button
          className={page === "doctor" ? "active" : ""}
          onClick={() => setPage("doctor")}
        >
          <Activity size={16} />
          Doctor
        </button>

        <button
          className={page === "admin" ? "active" : ""}
          onClick={() => setPage("admin")}
        >
          <Users size={16} />
          Admin
        </button>

      </nav>

    </header>
  );
}