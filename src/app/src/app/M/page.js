export default function Home() {
  const cards = [
    ["👨‍💼", "Employees", "Employee Management"],
    ["📅", "Attendance", "Daily Attendance"],
    ["🏗️", "Projects", "Project Management"],
    ["💰", "Accounts", "Income & Expenses"],
    ["🔐", "Admin", "Admin Management"],
    ["⚙️", "Settings", "System Settings"],
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
      <p>BUILDING MANAGEMENT SYSTEM</p>

      <h2>Admin Dashboard</h2>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
        gap: "18px"
      }}>
        {cards.map((card) => (
          <div key={card[1]} style={{
            background: "#17243a",
            padding: "25px",
            borderRadius: "15px",
            border: "1px solid #334155"
          }}>
            <h1>{card[0]}</h1>
            <h2>{card[1]}</h2>
            <p>{card[2]}</p>
          </div>
        ))}
      </div>
    </main>
  );
    }
