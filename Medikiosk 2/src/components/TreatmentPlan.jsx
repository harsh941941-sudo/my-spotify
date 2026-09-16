import React, { useState } from "react";
import {
  ArrowLeft,
  CheckCircle2,
  FlaskConical,
  Pill,
  Printer,
  Save
} from "lucide-react";

export default function TreatmentPlan({
  patient,
  updatePatient,
  setPage
}) {
  const existing = patient.treatmentPlan || {};

  const today = new Date().toISOString().split("T")[0];

  const [medicine, setMedicine] = useState("");
  const [dosage, setDosage] = useState("");
  const [instructions, setInstructions] = useState("");
  const [medicineDate, setMedicineDate] = useState(today);

  const [test, setTest] = useState("");
  const [testReason, setTestReason] = useState("");
  const [testDate, setTestDate] = useState(today);

  const [notes, setNotes] = useState(
    existing.notes || ""
  );

  const [followUp, setFollowUp] = useState(
    existing.followUp || ""
  );

  const [medicines, setMedicines] = useState(
    existing.medicines || []
  );

  const [tests, setTests] = useState(
    existing.tests || []
  );

  const addMedicine = () => {
    if (!medicine.trim()) {
      alert("Please enter a medicine name.");
      return;
    }

    setMedicines([
      ...medicines,
      {
        name: medicine.trim(),
        dosage: dosage.trim(),
        instructions: instructions.trim(),
        date: medicineDate
      }
    ]);

    setMedicine("");
    setDosage("");
    setInstructions("");
    setMedicineDate(today);
  };

  const removeMedicine = index => {
    setMedicines(
      medicines.filter(
        (_, i) => i !== index
      )
    );
  };

  const addTest = () => {
    if (!test.trim()) {
      alert("Please enter a test name.");
      return;
    }

    setTests([
      ...tests,
      {
        name: test.trim(),
        reason: testReason.trim(),
        date: testDate
      }
    ]);

    setTest("");
    setTestReason("");
    setTestDate(today);
  };

  const removeTest = index => {
    setTests(
      tests.filter(
        (_, i) => i !== index
      )
    );
  };

  const savePlan = () => {
    updatePatient(patient.id, {
      treatmentPlan: {
        medicines,
        tests,
        notes,
        followUp,
        updatedAt: new Date().toISOString()
      },
      treatmentStatus: "Treatment plan added",
      status: "Reviewed by doctor"
    });

    alert("Treatment plan saved successfully.");

    setPage("doctor");
  };

  const printPlan = () => {
    window.print();
  };

  const formatDate = date => {
    if (!date) return "—";

    return new Date(
      `${date}T00:00:00`
    ).toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric"
    });
  };

  return (
    <main className="container narrow">

      <div className="pageHeading">

        <div>

          <div className="eyebrow">
            Doctor Workspace
          </div>

          <h1>Treatment plan</h1>

          <p>
            Doctor-entered medicines,
            recommended tests and follow-up
            information for this patient.
          </p>

        </div>

        <button
          className="secondary printButton"
          onClick={printPlan}
        >
          <Printer size={17} />
          Print treatment plan
        </button>

      </div>

      <div className="card formCard treatmentPrintArea">

        <div className="sectionTitle">

          <h2>
            {patient.name}
          </h2>

          <p>
            Patient ID: {patient.id}
            {" • "}
            Age: {patient.age}
            {" • "}
            Token: {patient.token || "—"}
          </p>

        </div>

        <div className="recordSection">

          <h3>
            <Pill size={17} />
            Medicines
          </h3>

          <div className="grid2">

            <label className="field">

              <span>
                Medicine name
              </span>

              <input
                value={medicine}
                onChange={e =>
                  setMedicine(e.target.value)
                }
                placeholder="Enter medicine name"
              />

            </label>

            <label className="field">

              <span>
                Dosage
              </span>

              <input
                value={dosage}
                onChange={e =>
                  setDosage(e.target.value)
                }
                placeholder="Enter dosage"
              />

            </label>

            <label className="field">

              <span>
                Instructions
              </span>

              <input
                value={instructions}
                onChange={e =>
                  setInstructions(e.target.value)
                }
                placeholder="Example: As directed by doctor"
              />

            </label>

            <label className="field">

              <span>
                Prescription date
              </span>

              <input
                type="date"
                value={medicineDate}
                onChange={e =>
                  setMedicineDate(e.target.value)
                }
              />

            </label>

          </div>

          <button
            className="secondary"
            type="button"
            onClick={addMedicine}
          >
            <Pill size={16} />
            Add medicine
          </button>

          {medicines.length > 0 && (

            <div className="treatmentTable">

              <table>

                <thead>

                  <tr>
                    <th>Date</th>
                    <th>Medicine</th>
                    <th>Dosage</th>
                    <th>Instructions</th>
                    <th></th>
                  </tr>

                </thead>

                <tbody>

                  {medicines.map(
                    (item, index) => (

                      <tr key={index}>

                        <td>
                          {formatDate(item.date)}
                        </td>

                        <td>
                          <b>
                            {item.name}
                          </b>
                        </td>

                        <td>
                          {item.dosage || "—"}
                        </td>

                        <td>
                          {item.instructions || "—"}
                        </td>

                        <td>
                          <button
                            className="ghost"
                            type="button"
                            onClick={() =>
                              removeMedicine(index)
                            }
                          >
                            Remove
                          </button>
                        </td>

                      </tr>

                    )
                  )}

                </tbody>

              </table>

            </div>

          )}

        </div>

        <div className="recordSection">

          <h3>
            <FlaskConical size={17} />
            Recommended tests
          </h3>

          <div className="grid2">

            <label className="field">

              <span>
                Test name
              </span>

              <input
                value={test}
                onChange={e =>
                  setTest(e.target.value)
                }
                placeholder="Enter recommended test"
              />

            </label>

            <label className="field">

              <span>
                Test date
              </span>

              <input
                type="date"
                value={testDate}
                onChange={e =>
                  setTestDate(e.target.value)
                }
              />

            </label>

          </div>

          <label className="field">

            <span>
              Reason / notes
            </span>

            <input
              value={testReason}
              onChange={e =>
                setTestReason(e.target.value)
              }
              placeholder="Why is this test recommended?"
            />

          </label>

          <button
            className="secondary"
            type="button"
            onClick={addTest}
          >
            <FlaskConical size={16} />
            Add test
          </button>

          {tests.length > 0 && (

            <div className="treatmentTable">

              <table>

                <thead>

                  <tr>
                    <th>Date</th>
                    <th>Test</th>
                    <th>Reason</th>
                    <th></th>
                  </tr>

                </thead>

                <tbody>

                  {tests.map(
                    (item, index) => (

                      <tr key={index}>

                        <td>
                          {formatDate(item.date)}
                        </td>

                        <td>
                          <b>
                            {item.name}
                          </b>
                        </td>

                        <td>
                          {item.reason || "—"}
                        </td>

                        <td>
                          <button
                            className="ghost"
                            type="button"
                            onClick={() =>
                              removeTest(index)
                            }
                          >
                            Remove
                          </button>
                        </td>

                      </tr>

                    )
                  )}

                </tbody>

              </table>

            </div>

          )}

        </div>

        <div className="recordSection">

          <h3>
            Doctor's notes
          </h3>

          <textarea
            value={notes}
            onChange={e =>
              setNotes(e.target.value)
            }
            placeholder="Enter clinical notes or advice..."
          />

        </div>

        <div className="recordSection">

          <h3>
            Follow-up
          </h3>

          <input
            value={followUp}
            onChange={e =>
              setFollowUp(e.target.value)
            }
            placeholder="Enter follow-up instructions"
          />

        </div>

        <div className="notice">

          <CheckCircle2 size={18} />

          <span>
            This treatment plan is entered by
            the doctor and is saved with the
            patient's record.
          </span>

        </div>

        <div className="formActions">

          <button
            className="secondary"
            type="button"
            onClick={() =>
              setPage("doctor")
            }
          >
            <ArrowLeft size={16} />
            Back
          </button>

          <button
            className="primary"
            type="button"
            onClick={savePlan}
          >
            <Save size={16} />
            Save treatment plan
          </button>

        </div>

      </div>

    </main>
  );
}