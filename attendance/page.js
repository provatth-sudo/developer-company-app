"use client";

import { useState } from "react";

export default function Attendance() {
  const [records, setRecords] = useState([]);

  function markAttendance(status) {
    setRecords([
      ...records,
      {
        id: Date.now(),
        name: "Employee",
        status,
        date: new Date().toLocaleDateString()
      }
    ]);
  }

  return (
    <main style={{
      minHeight: "100vh",
      background: "#0b1220",
      color: "white",
      padding: "25px",
      fontFamily: "Arial"
    }}>
      <h1>NHM BUILDERS</h1>
      <h2>Attendance System</h2>
      <p>Daily Employee Attendance</p>

      <button onClick={() => markAttendance("Present")}>
        Present
      </button>

      <button
        onClick={() => markAttendance("Absent")}
        style={{ marginLeft: "10px" }}
      >
        Absent
      </button>

      <h2>Attendance Records</h2>

      {records.map((record) => (
        <div key={record.id} style={{
          background: "#17243a",
          padding: "15px",
          marginBottom: "10px",
          borderRadius: "10px"
        }}>
          <h3>{record.name}</h3>
          <p>{record.status}</p>
          <p>{record.date}</p>
        </div>
      ))}
    </main>
  );
    }
