import React from "react";

const Array2 = () => {
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
      <h1 style={{ color: "red" }}>Employees</h1>
      {employees.map((emp) => {
        return (
          <div>
            <h1>Id = {emp.id}</h1>
            <h2>Name = {emp.name}</h2>
            <h3>Position = {emp.position}</h3>
            <h3>Department = {emp.department}</h3>
            <h3>Salary = {emp.salary}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default Array2;
