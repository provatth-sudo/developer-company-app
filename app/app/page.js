"use client";

import { useState } from "react";

const menu = [
  "Dashboard",
  "Account Manager",
  "Employees",
  "Attendance",
  "Salary",
  "Projects",
  "Clients",
  "Bank Transactions",
  "Daily Expenses",
  "Materials & Stock",
  "Suppliers",
  "Invoice & Billing",
  "Due Collection",
  "Contractor Management",
  "Financial Reports",
  "User & Role Management",
];

const stats = [
  ["Total Employees", "0", "👥"],
  ["Active Projects", "0", "🏗️"],
  ["Total Clients", "0", "🤝"],
  ["Bank Balance", "৳0", "🏦"],
  ["Today's Expenses", "৳0", "💸"],
  ["Total Due", "৳0", "📄"],
];

export default function Home() {
  const [active, setActive] = useState("Dashboard");
  const [open, setOpen] = useState(false);

  return (
    <main style={{
      minHeight: "100vh",
      background: "#070b14",
      color: "#fff",
      fontFamily: "Arial",
    }}>

      <aside className={`sidebar ${open ? "show" : ""}`}>
        <h2 style={{ color: "#38bdf8" }}>NHM BUILDERS</h2>
        <small style={{ color: "#64748b" }}>
          BUILDING MANAGEMENT
        </small>

        <div style={{
          padding: 15,
          margin: "25px 0",
          background: "#14243b",
          borderRadius: 12,
          border: "1px solid #1e40af",
        }}>
          <small style={{ color: "#38bdf8" }}>ADMIN PANEL</small>
          <h3 style={{ marginBottom: 0 }}>Administrator</h3>
        </div>

        <div style={{
          maxHeight: "70vh",
          overflowY: "auto",
        }}>
          {menu.map(item => (
            <button
              key={item}
              onClick={() => {
                setActive(item);
                setOpen(false);
              }}
              style={{
                width: "100%",
                padding: 13,
                marginBottom: 6,
                textAlign: "left",
                border: "none",
                borderRadius: 8,
                background: active === item
                  ? "linear-gradient(90deg,#1d4ed8,#0891b2)"
                  : "transparent",
                color: active === item ? "#fff" : "#94a3b8",
                cursor: "pointer",
              }}
            >
              {item}
            </button>
          ))}
        </div>
      </aside>

      <section className="content">

        <button
          onClick={() => setOpen(!open)}
          className="mobile-menu"
        >
          ☰ Menu
        </button>

        <header style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          borderBottom: "1px solid #1e293b",
          paddingBottom: 20,
        }}>
          <div>
            <h1>{active}</h1>
            <p style={{ color: "#64748b" }}>
              NHM BUILDERS | Management System
            </p>
          </div>

          <div style={{
            padding: "12px 20px",
            background: "#10243c",
            color: "#38bdf8",
            borderRadius: 10,
            border: "1px solid #2563eb",
          }}>
            ADMIN
          </div>
        </header>

        {active === "Dashboard" ? (
          <>
            <h2 style={{ marginTop: 30 }}>Business Overview</h2>

            <div className="stats">
              {stats.map(item => (
                <div className="stat-card" key={item[0]}>
                  <div style={{ fontSize: 28 }}>{item[2]}</div>
                  <p style={{ color: "#94a3b8" }}>{item[0]}</p>
                  <h2 style={{ color: "#38bdf8" }}>{item[1]}</h2>
                </div>
              ))}
            </div>

            <div className="welcome">
              <h2>Welcome to NHM BUILDERS</h2>
              <p style={{ color: "#94a3b8" }}>
                Your complete construction business management platform.
              </p>
              <p style={{ color: "#38bdf8" }}>
                Manage your employees, projects, clients and finances
                from one place.
              </p>
            </div>
          </>
        ) : (
          <div className="welcome">
            <h2>{active}</h2>
            <p style={{ color: "#94a3b8" }}>
              {active} Management Module
            </p>
            <p style={{ color: "#38bdf8" }}>
              Module interface created.
              Database and working features will be added next.
            </p>
          </div>
        )}

        <footer style={{
          marginTop: 40,
          color: "#475569",
          textAlign: "center",
          fontSize: 12,
        }}>
          © NHM BUILDERS | BUILDING MANAGEMENT SYSTEM
        </footer>
      </section>

      <style jsx>{`
        .sidebar {
          position: fixed;
          top: 0;
          left: 0;
          bottom: 0;
          width: 245px;
          padding: 22px 15px;
          box-sizing: border-box;
          background: #0c1424;
          border-right: 1px solid #1e3a5f;
          z-index: 10;
        }

        .content {
          margin-left: 245px;
          padding: 30px;
        }

        .stats {
          display: grid;
          grid-template-columns: repeat(auto-fit,minmax(180px,1fr));
          gap: 18px;
        }

        .stat-card {
          background: linear-gradient(145deg,#14243b,#0d1728);
          border: 1px solid #1e3a5f;
          border-radius: 14px;
          padding: 22px;
          box-shadow: 0 8px 25px #0005;
        }

        .welcome {
          margin-top: 25px;
          padding: 25px;
          background: #0e1a2d;
          border: 1px solid #1e3a5f;
          border-radius: 14px;
        }

        .mobile-menu {
          display: none;
          background: #1d4ed8;
          color: white;
          border: none;
          padding: 12px 18px;
          border-radius: 8px;
          margin-bottom: 20px;
        }

        @media(max-width:700px) {
          .sidebar {
            transform: translateX(-100%);
            transition: transform .25s;
          }

          .sidebar.show {
            transform: translateX(0);
          }

          .content {
            margin-left: 0;
            padding: 18px;
          }

          .mobile-menu {
            display: block;
          }
        }
      `}</style>
    </main>
  );
}
