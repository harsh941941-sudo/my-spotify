import React from "react";

import {
  CheckCircle2,
  FileText,
  AlertTriangle
} from "lucide-react";

import {
  Info,
  RecordSection
} from "./Common";

export default function PatientDetail({
  patient,
  updatePatient
}) {

  const confirm = () => {

    updatePatient(patient.id, {
      status: "Reviewed by doctor",
      doctorReviewedAt:
        new Date().toISOString()
    });

  };

  return (
    <div className="patientDetail">

      <div className="recordTop">

        <div>
          <span className="eyebrow">
            Patient Record
          </span>

          <h2>{patient.name}</h2>

          <p>
            {patient.id} • Token{" "}
            {patient.token || "—"}
          </p>
        </div>

        <span className="status">
          {patient.status}
        </span>

      </div>

      {patient.severity === "Severe" && (

        <div className="priority">

          <AlertTriangle size={18} />

          <div>
            <b>Priority flag</b>

            <span>
              Patient selected
              "Severe" symptom severity.
              Physician assessment required.
            </span>
          </div>

        </div>

      )}

      <div className="infoGrid">

        <Info
          label="Age"
          value={`${patient.age} years`}
        />

        <Info
          label="Gender"
          value={patient.gender}
        />

        <Info
          label="Phone"
          value={
            patient.phone ||
            "Not provided"
          }
        />

        <Info
          label="Language"
          value={patient.language}
        />

      </div>

      <RecordSection title="Main complaint">

        <div className="recordText">
          {patient.symptoms ||
            "Not provided"}
        </div>

        <p>
          Duration:{" "}
          {patient.duration ||
            "Not provided"}{" "}
          • Severity:{" "}
          {patient.severity}
        </p>

      </RecordSection>

      <RecordSection title="Past medical history">

        <div className="recordText">
          {patient.history ||
            "Not provided"}
        </div>

      </RecordSection>

      <RecordSection title="Current medicines">

        <div className="recordText">
          {patient.medications ||
            "Not provided"}
        </div>

      </RecordSection>

      <RecordSection title="Allergies">

        <div className="recordText">
          {patient.allergies ||
            "Not provided"}
        </div>

      </RecordSection>

      <RecordSection title="Family history">

        <div className="recordText">
          {patient.familyHistory ||
            "Not provided"}
        </div>

      </RecordSection>

      <RecordSection title="Personal history">

        <div className="recordText">
          {patient.personalHistory ||
            "Not provided"}
        </div>

      </RecordSection>

      <RecordSection title="Documents">

        {patient.documents?.length ? (

          <div className="fileList">

            {patient.documents.map(file => (

              <div key={file}>
                <FileText size={16} />
                {file}
              </div>

            ))}

          </div>

        ) : (

          <span>
            No documents uploaded.
          </span>

        )}

      </RecordSection>

        {patient.treatmentPlan && (

          <RecordSection title="Treatment Plan">

            {patient.treatmentPlan.medicines?.length > 0 && (

              <div className="treatmentSaved">

                <strong>Medicines</strong>

                <ul>

                  {patient.treatmentPlan.medicines.map(
                    (medicine, index) => (

                      <li key={index}>

                        <b>{medicine.name}</b>
                        {" — "}
                        {medicine.dosage || "Dosage not specified"}
                        {" • "}
                        {medicine.instructions || "No instructions specified"}
                        {" • "}
                        Date:{" "}
                          {medicine.date || "Date not specified"}

                       </li>

                      )
                    )}

                  </ul>

                </div>

              )}

              {patient.treatmentPlan.tests?.length > 0 && (

                <div className="treatmentSaved">

                  <strong>Recommended Tests</strong>

                  <ul>

                    {patient.treatmentPlan.tests.map(
                      (test, index) => (

                        <li key={index}>

                          <b>{test.name}</b>
                          {" — "}
                          {test.reason || "No reason specified"}
                          {" • "}
                          Date:{" "}
                            {test.date ||
                              "Date not specified"}

                        </li>

                      )
                    )}

                  </ul>

                </div>

              )}

              {patient.treatmentPlan.notes && (

                <div className="treatmentSaved">

                  <strong>Doctor's Notes</strong>

                  <p>
                    {patient.treatmentPlan.notes}
                  </p>

                </div>

              )}

              {patient.treatmentPlan.followUp && (

                <div className="treatmentSaved">

                  <strong>Follow-up</strong>

                  <p>
                    {patient.treatmentPlan.followUp}
                  </p>

                </div>

              )}

            </RecordSection>

          )}

          <div className="routeLine">

            Routed by MediKiosk to{" "}
           <b>{patient.doctorName}</b>{" "}
            • {patient.department}

          </div>

      <div className="detailActions">

        <button
          className="primary"
          onClick={confirm}
        >
          <CheckCircle2 size={17} />
          Mark reviewed
        </button>

        <button
          className="secondary"
          onClick={() =>
            alert(
              "Consultation/prescription screen can be connected to the hospital backend here."
            )
          }
        >
          Open consultation
        </button>

      </div>

      <div className="aiNotice">

        AI/OCR output in the full solution
        is a draft for physician verification
        and does not replace clinical judgment.

      </div>

    </div>
  );
}