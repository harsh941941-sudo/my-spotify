export const STORAGE_KEY = "medikiosk_patients_v2";

export const doctors = [
  {
    id: "DR001",
    name: "Dr. Ananya Verma",
    department: "General Medicine"
  },
  {
    id: "DR002",
    name: "Dr. Rohan Mehta",
    department: "General Medicine"
  },
  {
    id: "DR003",
    name: "Dr. Kavya Iyer",
    department: "AYUSH / Integrative Care"
  }
];

export const seedPatients = [
  {
    id: "MK-DEMO-001",
    name: "Demo Patient",
    age: 52,
    gender: "Male",
    phone: "XXXXXX1234",
    language: "English",
    symptoms: "Chest discomfort for 2 days",
    duration: "2 days",
    severity: "Moderate",
    history: "History of hypertension.",
    medications: "Amlodipine 5 mg",
    allergies: "No known allergies",
    familyHistory: "Father had hypertension.",
    personalHistory: "Non-smoker. No alcohol reported.",
    documents: [],
    doctorId: "DR001",
    doctorName: "Dr. Ananya Verma",
    department: "General Medicine",
    status: "Demo record",
    createdAt: new Date().toISOString(),
    source: "Demo"
  }
];

export function loadPatients() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));

    return Array.isArray(saved) ? saved : seedPatients;
  } catch {
    return seedPatients;
  }
}

export function savePatients(list) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
}