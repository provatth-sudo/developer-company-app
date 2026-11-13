export default function Home() {
  return (
    <main style={{
      minHeight: "100vh",
      background: "#0b1220",
      color: "white",
      padding: "30px",
      fontFamily: "Arial"
    }}>
      <h1>NHM BUILDERS</h1>
      <p>BUILDING MANAGEMENT SYSTEM</p>

      <h2>Admin Dashboard</h2>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        gap: "20px"
      }}>
        {[
          "Employee Management",
          "Attendance System",
          "Project Management",
          "Accounts Management",
          "Admin Settings"
        ].map((item) => (
          <div key={item} style={{
            background: "#17243a",
            padding: "25px",
            borderRadius: "12px",
            border: "1px solid #334155"
          }}>
            <h3>{item}</h3>
            <p>Manage {item}</p>
          </div>
        ))}
      </div>
    </main>
  );
    }
