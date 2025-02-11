import React from "react";

const Array3 = () => {
  const employees = [
    {
      id: 1,
      name: "John Doe",
      position: "Software Engineer",
      department: "IT",
      salary: 80000,
    },
    {
      id: 2,
      name: "Jane Smith",
      position: "Project Manager",
      department: "Operations",
      salary: 90000,
    },
    {
      id: 3,
      name: "Emily Davis",
      position: "UI/UX Designer",
      department: "Design",
      salary: 75000,
    },
    {
      id: 4,
      name: "Michael Brown",
      position: "Data Analyst",
      department: "Analytics",
      salary: 85000,
    },
    {
      id: 5,
      name: "Sarah Wilson",
      position: "Software Engineer",
      department: "MCA",
      salary: 70000,
    },
  ];

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Employee List</h1>
      <table className="table table-dark" style={{ backgroundColor: "black" }}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Position</th>
            <th>Department</th>
            <th>Salary</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp) => {
            return (
              <tr>
                <td>{emp.id}</td>
                <td>
                  <span
                    style={{
                      color: emp.name.startsWith("J") ? "yellow" : "white",
                    }}
                  >
                    {emp.name}
                  </span>
                </td>
                <td
                  style={{
                    backgroundColor:
                      emp.position === "Software Engineer" ? "green" : "black",
                  }}
                >
                  {emp.position}
                </td>
                <td>{emp.department}</td>
                <td
                  style={{
                    color: emp.salary >= 85000 ? "red" : "white",
                  }}
                >
                  {emp.salary}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Array3;
