import React from "react";

const Array4 = () => {
  const players = [
    {
      id: 1,
      name: "Virat Kohli",
      score: 12000,
      gender: "Male",
      isActive: true,
      age: 35,
    },
    {
      id: 2,
      name: "Ellyse Perry",
      score: 4500,
      gender: "Female",
      isActive: true,
      age: 32,
    },
    {
      id: 3,
      name: "Steve Smith",
      score: 9500,
      gender: "Male",
      isActive: true,
      age: 34,
    },
    {
      id: 4,
      name: "Harmanpreet Kaur",
      score: 6000,
      gender: "Female",
      isActive: true,
      age: 33,
    },
    {
      id: 5,
      name: "Kane Williamson",
      score: 11000,
      gender: "Male",
      isActive: true,
      age: 34,
    },
    {
      id: 6,
      name: "Mithali Raj",
      score: 7800,
      gender: "Female",
      isActive: false,
      age: 40,
    },
    {
      id: 7,
      name: "Rohit Sharma",
      score: 9800,
      gender: "Male",
      isActive: true,
      age: 36,
    },
    {
      id: 8,
      name: "Smriti Mandhana",
      score: 5200,
      gender: "Female",
      isActive: true,
      age: 29,
    },
    {
      id: 9,
      name: "David Warner",
      score: 9000,
      gender: "Male",
      isActive: true,
      age: 37,
    },
    {
      id: 10,
      name: "Jhulan Goswami",
      score: 5000,
      gender: "Female",
      isActive: false,
      age: 41,
    },
  ];

  return (
    <div style={{ textAlign: "center" }}>
      <h1> Players List </h1>
      <table className="table table-dark" style={{ backgroundColor: "black" }}>
        <thead>
          <tr>
            <th> ID </th>
            <th> Name </th>
            <th> Score </th>
            <th>Gender</th>
            <th>Active</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {players.map((player) => {
            return (
              <tr>
                <td>{player.id}</td>
                <td>{player.name}</td>
                <td
                  style={{ color: player.score >= 10000 ? "green" : "white" }}
                >
                  {player.score}
                </td>
                <td>{player.gender}</td>
                <td
                  style={{
                    color: player.isActive === true ? "white" : "yellow",
                  }}
                >
                  {player.isActive ? "Yes" : "No"}
                </td>
                <td>{player.age > 35 ? "please retire.." : player.age}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Array4;
