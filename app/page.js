"use client";

import { useState } from "react";

const menu = [
  "Dashboard",
  "Employees",
  "Attendance",
  "Projects",
  "Accounts",
];

export default function Home() {
  const [active, setActive] = useState("Dashboard");

  const stats = [
    { title: "Total Employees", value: "0", icon: "👥" },
    { title: "Present Today", value: "0", icon: "✅" },
    { title: "Active Projects", value: "0", icon: "🏗️" },
    { title: "Total Accounts", value: "৳0", icon: "💰" },
  ];

  return (
    <main style={{
      minHeight: "100vh",
      background: "#0b1120",
      color: "white",
      fontFamily: "Arial",
      display: "flex",
    }}>
      <aside style={{
        width: "230px",
        background: "#111c30",
        padding: "25px 15px",
      }}>
        <h2 style={{ color: "#38bdf8" }}>NHM BUILDERS</h2>
        <p style={{ color: "#94a3b8", fontSize: "12px" }}>
          BUILDING MANAGEMENT
        </p>

        <hr style={{ borderColor: "#334155", margin: "25px 0" }}/>

        {menu.map(item => (
          <button
            key={item}
            onClick={() => setActive(item)}
            style={{
              display: "block",
              width: "100%",
              padding: "14px",
              marginBottom: "8px",
              border: "none",
              borderRadius: "8px",
              textAlign: "left",
              background: active === item ? "#2563eb" : "transparent",
              color: "white",
              cursor: "pointer",
              fontSize: "14px",
            }}
          >
            {item}
          </button>
        ))}
      </aside>

      <section style={{
        flex: 1,
        padding: "30px",
        minWidth: 0,
      }}>
        <h1>{active}</h1>
        <p style={{ color: "#94a3b8" }}>
          NHM BUILDERS Management System
        </p>

        {active === "Dashboard" ? (
          <>
            <h2 style={{ marginTop: "35px" }}>Overview</h2>

            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))",
              gap: "18px",
            }}>
              {stats.map(stat => (
                <div key={stat.title} style={{
                  background: "#17243a",
                  padding: "25px",
                  borderRadius: "14px",
                  border: "1px solid #263750",
                }}>
                  <div style={{ fontSize: "28px" }}>{stat.icon}</div>
                  <p style={{ color: "#94a3b8" }}>{stat.title}</p>
                  <h2>{stat.value}</h2>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div style={{
            marginTop: "30px",
            padding: "25px",
            background: "#17243a",
            borderRadius: "14px",
          }}>
            <h2>{active} Management</h2>
            <p style={{ color: "#94a3b8" }}>
              This module is ready for the next development stage.
            </p>
          </div>
        )}
      </section>
    </main>
  );
    }
