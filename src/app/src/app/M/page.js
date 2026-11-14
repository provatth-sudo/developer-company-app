"use client";

import { useState } from "react";

export default function Home() {
  const [active, setActive] = useState("Dashboard");
  const [employees, setEmployees] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({
    name: "",
    designation: "",
    phone: "",
    monthly_salary: ""
  });

  const menu = [
    ["🏠", "Dashboard"],
    ["👨‍💼", "Employees"],
    ["📅", "Attendance"],
    ["🏗️", "Projects"],
    ["💰", "Accounts"],
    ["🔐", "Admin"]
  ];

  function addEmployee(e) {
    e.preventDefault();
    setEmployees([
      ...employees,
      { ...form, id: Date.now() }
    ]);
    setForm({
      name: "",
      designation: "",
      phone: "",
      monthly_salary: ""
    });
    setShowForm(false);
  }

  return (
    <main>
      <style jsx>{`
        * { box-sizing: border-box; }
        main {
          min-height: 100vh;
          background: #f1f5f9;
          color: #172033;
          font-family: Arial, sans-serif;
          margin: -8px;
          padding-bottom: 30px;
        }
        header {
          background: #102a43;
          color: white;
          padding: 22px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        header h2 { margin: 0; }
        .brand { color: #fbbf24; font-size: 12px; }
        .layout {
          display: flex;
          min-height: 90vh;
        }
        aside {
          width: 220px;
          background: #183b56;
          padding: 18px 12px;
          color: white;
          flex-shrink: 0;
        }
        aside button {
          display: block;
          width: 100%;
          padding: 14px;
          margin: 5px 0;
          border: 0;
          border-radius: 8px;
          text-align: left;
          background: transparent;
          color: white;
          font-size: 15px;
        }
        aside button.selected {
          background: #f59e0b;
          color: #172033;
          font-weight: bold;
        }
        .content {
          padding: 25px;
          flex: 1;
          min-width: 0;
        }
        .cards {
          display: grid;
          grid-template-columns: repeat(auto-fit,minmax(145px,1fr));
          gap: 15px;
          margin-top: 22px;
        }
        .card {
          background: white;
          padding: 22px 15px;
          border-radius: 12px;
          box-shadow: 0 3px 12px #0000000c;
        }
        .card button {
          border: 0;
          background: none;
          text-align: left;
          width: 100%;
          font-size: 15px;
          color: #183b56;
          font-weight: bold;
        }
        .number {
          font-size: 28px;
          margin-top: 12px;
          font-weight: bold;
          color: #f59e0b;
        }
        .panel {
          background: white;
          border-radius: 12px;
          padding: 20px;
          margin-top: 22px;
          overflow-x: auto;
        }
        .action {
          background: #f59e0b;
          border: 0;
          padding: 11px 17px;
          border-radius: 7px;
          font-weight: bold;
          margin: 5px;
        }
        input {
          display: block;
          width: 100%;
          padding: 12px;
          margin: 10px 0;
          border: 1px solid #cbd5e1;
          border-radius: 7px;
          font-size: 15px;
        }
        table {
          width: 100%;
          border-collapse: collapse;
          min-width: 500px;
        }
        td, th {
          padding: 12px;
          border-bottom: 1px solid #e2e8f0;
          text-align: left;
        }
        .delete {
          background: #fee2e2;
          color: #b91c1c;
          border: 0;
          padding: 7px;
          border-radius: 5px;
        }
        @media(max-width:600px) {
          aside { width: 125px; padding: 8px; }
          aside button { font-size: 12px; padding: 12px 5px; }
          .content { padding: 12px; }
          header { padding: 16px 12px; }
          header h2 { font-size: 18px; }
        }
      `}</style>

      <header>
        <div>
          <h2>🏗️ NHM BUILDERS</h2>
          <span className="brand">BUILDING MANAGEMENT SYSTEM</span>
        </div>
        <div>ADMIN PANEL</div>
      </header>

      <div className="layout">
        <aside>
          <h3>MAIN MENU</h3>
          {menu.map(([icon, name]) => (
            <button
              key={name}
              className={active === name ? "selected" : ""}
              onClick={() => {
                setActive(name);
                setShowForm(false);
              }}
            >
              {icon} {name}
            </button>
          ))}
        </aside>

        <section className="content">
          <h2>{active}</h2>

          {active === "Dashboard" && (
            <>
              <p>Welcome to NHM BUILDERS Admin Dashboard.</p>
              <div className="cards">
                {menu.slice(1).map(([icon, name]) => (
                  <div className="card" key={name}>
                    <button onClick={() => setActive(name)}>
                      {icon} {name}
                    </button>
                    <div className="number">
                      {name === "Employees" ? employees.length : "—"}
                    </div>
                  </div>
                ))}
              </div>
              <div className="panel">
                <h3>Company Overview</h3>
                <p>Employees: {employees.length}</p>
                <p>Welcome to your management system.</p>
              </div>
            </>
          )}

          {active === "Employees" && (
            <div className="panel">
              <h3>Employee Management</h3>
              <button
                className="action"
                onClick={() => setShowForm(!showForm)}
              >
                + Add Employee
              </button>

              {showForm && (
                <form onSubmit={addEmployee}>
                  <input
                    placeholder="Employee Name"
                    required
                    value={form.name}
                    onChange={e => setForm({...form, name:e.target.value})}
                  />
                  <input
                    placeholder="Designation"
                    required
                    value={form.designation}
                    onChange={e => setForm({...form, designation:e.target.value})}
                  />
                  <input
                    placeholder="Phone Number"
                    value={form.phone}
                    onChange={e => setForm({...form, phone:e.target.value})}
                  />
                  <input
                    type="number"
                    placeholder="Monthly Salary"
                    value={form.monthly_salary}
                    onChange={e => setForm({...form, monthly_salary:e.target.value})}
                  />
                  <button className="action" type="submit">
                    Save Employee
                  </button>
                </form>
              )}

              <h3>Employee List</h3>
              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Designation</th>
                    <th>Phone</th>
                    <th>Salary</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {employees.map(emp => (
                    <tr key={emp.id}>
                      <td>{emp.name}</td>
                      <td>{emp.designation}</td>
                      <td>{emp.phone}</td>
                      <td>{emp.monthly_salary}</td>
                      <td>
                        <button
                          className="delete"
                          onClick={() => setEmployees(
                            employees.filter(x => x.id !== emp.id)
                          )}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {employees.length === 0 && <p>No employees added yet.</p>}
            </div>
          )}

          {active !== "Dashboard" && active !== "Employees" && (
            <div className="panel">
              <h3>{active} Management</h3>
              <p>This section is ready for the next development step.</p>
            </div>
          )}
        </section>
      </div>
    </main>
  );
    }
