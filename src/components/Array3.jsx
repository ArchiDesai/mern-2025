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
      position: "HR Specialist",
      department: "Human Resources",
      salary: 70000,
    },
  ];

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Employee List</h1>
      <table class="table table-dark">
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
                <td>{emp.name}</td>
                <td>{emp.position}</td>
                <td>{emp.department}</td>
                <td>{emp.salary}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Array3;
