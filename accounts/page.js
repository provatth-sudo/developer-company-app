"use client";

import { useState } from "react";

export default function Accounts() {
  const [records, setRecords] = useState([]);
  const [type, setType] = useState("Income");
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");

  function addRecord() {
    if (!amount || Number(amount) <= 0 || !description.trim()) return;

    setRecords([
      ...records,
      {
        id: Date.now(),
        type,
        amount: Number(amount),
        description
      }
    ]);

    setAmount("");
    setDescription("");
  }

  const income = records
    .filter(r => r.type === "Income")
    .reduce((sum, r) => sum + r.amount, 0);

  const expenses = records
    .filter(r => r.type === "Expense")
    .reduce((sum, r) => sum + r.amount, 0);

  return (
    <main style={{
      minHeight: "100vh",
      background: "#0b1220",
      color: "white",
      padding: "25px",
      fontFamily: "Arial"
    }}>
      <h1>NHM BUILDERS</h1>
      <h2>Accounts Management</h2>
      <p>Income & Expense Management</p>

      <div style={{
        background: "#17243a",
        padding: "20px",
        borderRadius: "12px"
      }}>
        <h3>Total Income: ৳{income}</h3>
        <h3>Total Expenses: ৳{expenses}</h3>
        <h3>Balance: ৳{income - expenses}</h3>
      </div>

      <h2>Add Transaction</h2>

      <select
        value={type}
        onChange={(e) => setType(e.target.value)}
        style={{ padding: "12px", margin: "5px" }}
      >
        <option value="Income">Income</option>
        <option value="Expense">Expense</option>
      </select>

      <input
        type="number"
        placeholder="Amount (৳)"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        style={{ padding: "12px", margin: "5px" }}
      />

      <input
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        style={{ padding: "12px", margin: "5px" }}
      />

      <button onClick={addRecord} style={{
        padding: "12px 20px",
        margin: "5px"
      }}>
        + Add Transaction
      </button>

      <h2>Transaction History</h2>

      {records.map((record) => (
        <div key={record.id} style={{
          background: "#17243a",
          padding: "15px",
          marginBottom: "10px",
          borderRadius: "10px"
        }}>
          <h3>{record.type}</h3>
          <p>{record.description}</p>
          <h3>৳{record.amount}</h3>
        </div>
      ))}
    </main>
  );
        }
