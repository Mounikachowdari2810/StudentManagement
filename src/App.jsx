
import React from "react";

function Header() {
  return (
    <>
      <h1>Student Management System</h1>
      <h2>Student List</h2>
    </>
  );
}

function Students() {
  const students = [
    { roll: 101, name: "Abhinav", marks: 90, feedback: "Excellent" },
    { roll: 102, name: "Rahul", marks: 85, feedback: "Good" },
    { roll: 103, name: "Ravi", marks: 78, feedback: "Good" },
    { roll: 104, name: "Kiran", marks: 95, feedback: "Excellent" },
    { roll: 105, name: "Arjun", marks: 70, feedback: "Average" }
  ];

  return (
    <table border="1" cellPadding="10">
      <thead>
        <tr>
          <th>Roll Number</th>
          <th>Name</th>
          <th>Marks</th>
          <th>Feedback</th>
          <th>Result</th>
        </tr>
      </thead>

      <tbody>
        {students.map((s) => (
          <tr key={s.roll}>
            <td>{s.roll}</td>
            <td>{s.name}</td>
            <td>{s.marks}</td>
            <td>{s.feedback}</td>
            <td>{s.marks >= 40 ? "Pass" : "Fail"}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function Footer() {
  return <h3>© 2026 Student Management System</h3>;
}

function App() {
  return (
    <div>
      <Header />
      <Students />
      <Footer />
    </div>
  );
}

export default App;
