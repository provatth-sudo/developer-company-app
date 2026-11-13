export default function Employees() {
  const employees = [
    { id: 1, name: "Employee 1", role: "Manager", status: "Active" },
    { id: 2, name: "Employee 2", role: "Worker", status: "Active" },
    { id: 3, name: "Employee 3", role: "Engineer", status: "Active" },
  ];

  return (
    <main style={{
      minHeight: "100vh",
      background: "#0b1220",
      color: "white",
      padding: "25px",
      fontFamily: "Arial"
    }}>
      <h1>NHM BUILDERS</h1>
      <h2>Employee Management</h2>
      <p>Manage Company Employees</p>

      {employees.map((emp) => (
        <div key={emp.id} style={{
          background: "#17243a",
          padding: "20px",
          marginBottom: "15px",
          borderRadius: "12px"
        }}>
          <h3>{emp.name}</h3>
          <p>Role: {emp.role}</p>
          <p>Status: {emp.status}</p>
        </div>
      ))}
    </main>
  );
    }
