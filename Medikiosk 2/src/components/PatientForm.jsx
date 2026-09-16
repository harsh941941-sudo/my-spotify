import React, { useState } from "react";

import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  FileText,
  Mic,
  ShieldCheck,
  Stethoscope,
  Upload
} from "lucide-react";

import { doctors } from "../data/data";
import { Field, SectionTitle } from "./Common";

export default function PatientForm({ onSubmit, setPage }) {

  const [form, setForm] = useState({
    name: "",
    age: "",
    gender: "Prefer not to say",
    phone: "",
    language: "English",
    symptoms: "",
    duration: "",
    severity: "Mild",
    history: "",
    medications: "",
    allergies: "",
    familyHistory: "",
    personalHistory: "",
    doctorId: "DR001"
  });

  const [files, setFiles] = useState([]);
  const [step, setStep] = useState(1);

  const doctor =
    doctors.find(d => d.id === form.doctorId) || doctors[0];

  const set = (key, value) => {
    setForm(current => ({
      ...current,
      [key]: value
    }));
  };

  const submit = event => {

    event.preventDefault();

    if (
      !form.name.trim() ||
      !form.age ||
      !form.symptoms.trim()
    ) {
      alert(
        "Please fill Patient Name, Age and Symptoms."
      );
      return;
    }

    const patient = {
      ...form,

      age: Number(form.age),

      doctorName: doctor.name,
      department: doctor.department,
      doctorId: doctor.id,

      id: `MK-${Date.now().toString().slice(-8)}`,

      token: `A-${Math.floor(
        100 + Math.random() * 899
      )}`,

      documents: files.map(file => file.name),

      status: "Waiting for doctor",

      createdAt: new Date().toISOString(),

      source: "Patient intake"
    };

    onSubmit(patient);
  };

  return (
    <main className="container narrow">

      <div className="pageHeading">

        <div>
          <div className="eyebrow">
            Patient Kiosk
          </div>

          <h1>Tell us about the patient</h1>

          <p>
            The information below becomes the record
            the doctor and admin will see.
          </p>
        </div>

        <button
          className="ghost"
          onClick={() => setPage("home")}
        >
          <ArrowLeft size={16} />
          Back
        </button>

      </div>

      <div className="stepper">

        {[1, 2, 3].map(number => (

          <div
            key={number}
            className={
              step >= number
                ? "step active"
                : "step"
            }
          >

            <span>{number}</span>

            {number === 1
              ? "Patient"
              : number === 2
              ? "Clinical history"
              : "Documents & route"}

          </div>

        ))}

      </div>

      <form
        onSubmit={submit}
        className="card formCard"
      >

        {step === 1 && (

          <>
            <SectionTitle
              title="Patient details"
              subtitle="Enter the actual details collected at the kiosk."
            />

            <div className="grid2">

              <Field label="Patient full name *">
                <input
                  value={form.name}
                  onChange={e =>
                    set("name", e.target.value)
                  }
                  placeholder="e.g. Rahul Sharma"
                />
              </Field>

              <Field label="Age *">
                <input
                  type="number"
                  min="0"
                  max="120"
                  value={form.age}
                  onChange={e =>
                    set("age", e.target.value)
                  }
                  placeholder="52"
                />
              </Field>

              <Field label="Gender">
                <select
                  value={form.gender}
                  onChange={e =>
                    set("gender", e.target.value)
                  }
                >
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                  <option>
                    Prefer not to say
                  </option>
                </select>
              </Field>

              <Field label="Phone (demo)">
                <input
                  value={form.phone}
                  onChange={e =>
                    set("phone", e.target.value)
                  }
                  placeholder="Optional"
                />
              </Field>

              <Field label="Preferred language">
                <select
                  value={form.language}
                  onChange={e =>
                    set("language", e.target.value)
                  }
                >
                  <option>English</option>
                  <option>Hindi</option>
                </select>
              </Field>

            </div>
          </>
        )}

        {step === 2 && (

          <>
            <SectionTitle
              title="Clinical history"
              subtitle="These answers are passed to the doctor without replacing them with demo data."
            />

            <div className="voiceDemo">

              <button
                type="button"
                className="voice"
                onClick={() =>
                  alert(
                    "Voice capture demo: connect speech-to-text API here."
                  )
                }
              >
                <Mic size={18} />
                Voice answer demo
              </button>

              <span>
                Multimodal intake placeholder
              </span>

            </div>

            <Field label="Main symptoms / complaint *">

              <textarea
                value={form.symptoms}
                onChange={e =>
                  set("symptoms", e.target.value)
                }
                placeholder="What is the patient experiencing?"
              />

            </Field>

            <div className="grid2">

              <Field label="How long?">

                <input
                  value={form.duration}
                  onChange={e =>
                    set("duration", e.target.value)
                  }
                  placeholder="e.g. 2 days"
                />

              </Field>

              <Field label="Severity">

                <select
                  value={form.severity}
                  onChange={e =>
                    set("severity", e.target.value)
                  }
                >
                  <option>Mild</option>
                  <option>Moderate</option>
                  <option>Severe</option>
                </select>

              </Field>

            </div>

            <Field label="Past medical history">

              <textarea
                value={form.history}
                onChange={e =>
                  set("history", e.target.value)
                }
                placeholder="Known conditions, previous illnesses, surgeries..."
              />

            </Field>

            <div className="grid2">

              <Field label="Current medicines">

                <textarea
                  value={form.medications}
                  onChange={e =>
                    set("medications", e.target.value)
                  }
                  placeholder="Medicine names and doses if known"
                />

              </Field>

              <Field label="Allergies">

                <textarea
                  value={form.allergies}
                  onChange={e =>
                    set("allergies", e.target.value)
                  }
                  placeholder="Drug/food allergies or none known"
                />

              </Field>

              <Field label="Family history">

                <textarea
                  value={form.familyHistory}
                  onChange={e =>
                    set(
                      "familyHistory",
                      e.target.value
                    )
                  }
                  placeholder="Relevant family history"
                />

              </Field>

              <Field label="Personal history">

                <textarea
                  value={form.personalHistory}
                  onChange={e =>
                    set(
                      "personalHistory",
                      e.target.value
                    )
                  }
                  placeholder="Lifestyle/context relevant to consultation"
                />

              </Field>

            </div>
          </>
        )}

        {step === 3 && (

          <>
            <SectionTitle
              title="Documents & routing"
              subtitle="Attach documents and choose the demonstration routing destination."
            />

            <label className="uploadBox">

              <Upload size={22} />

              <b>Upload medical documents</b>

              <span>
                PDF, JPG, PNG — demo only
              </span>

              <input
                type="file"
                multiple
                onChange={e =>
                  setFiles(
                    Array.from(
                      e.target.files || []
                    )
                  )
                }
              />

            </label>

            {files.length > 0 && (

              <div className="fileList">

                {files.map(file => (

                  <div key={file.name}>
                    <FileText size={16} />
                    {file.name}
                  </div>

                ))}

              </div>

            )}

            <Field label="Route to doctor">

              <select
                value={form.doctorId}
                onChange={e =>
                  set(
                    "doctorId",
                    e.target.value
                  )
                }
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

            </Field>

            <div className="routePreview">

              <Stethoscope size={19} />

              <div>

                <b>
                  Will be routed to{" "}
                  {doctor.name}
                </b>

                <span>
                  {doctor.department}.
                  Admin will see this
                  assignment too.
                </span>

              </div>

            </div>

            <div className="privacy">

              <ShieldCheck size={18} />

              <span>
                Prototype privacy notice:
                data is stored only in this
                browser's localStorage for
                the demo.
              </span>

            </div>

          </>
        )}

        <div className="formActions">

          {step > 1 ? (

            <button
              type="button"
              className="secondary"
              onClick={() =>
                setStep(step - 1)
              }
            >
              Back
            </button>

          ) : (
            <span />
          )}

          {step < 3 ? (

            <button
              type="button"
              className="primary"
              onClick={() =>
                setStep(step + 1)
              }
            >
              Continue
              <ArrowRight size={17} />
            </button>

          ) : (

            <button
              type="submit"
              className="primary"
            >
              Submit to Doctor
              <CheckCircle2 size={17} />
            </button>

          )}

        </div>

      </form>

    </main>
  );
}