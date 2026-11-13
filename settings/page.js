"use client";

import { useState } from "react";

export default function Settings() {
  const [company, setCompany] = useState("NHM BUILDERS");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  function saveSettings() {
    alert("Settings saved successfully!");
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
      <h2>System Settings ⚙️</h2>
      <p>Manage Company Information</p>

      <div style={{
        background: "#17243a",
        padding: "25px",
        borderRadius: "15px",
        maxWidth: "500px"
      }}>
        <h3>Company Name</h3>

        <input
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          style={{ padding: "12px", width: "100%" }}
        />

        <h3>Company Email</h3>

        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ padding: "12px", width: "100%" }}
        />

        <h3>Phone Number</h3>

        <input
          type="tel"
          placeholder="Enter phone number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          style={{ padding: "12px", width: "100%" }}
        />

        <br /><br />

        <button
          onClick={saveSettings}
          style={{ padding: "12px 25px" }}
        >
          Save Settings
        </button>
      </div>
    </main>
  );
  }
