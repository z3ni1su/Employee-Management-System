import React, { useEffect } from "react";
import { useState } from "react";
import EmployeeRetireSearch from "./EmployeeRetireSearch";

function EmployeeRetire() {
  const [allEmp, setallEmp] = useState([]);
  useEffect(function () {
    let query = `
    query  {
        employeeList {
            _id
            Age
            CurrentStatus
            DateOfJoining
            Department
            EmployeeType
            FirstName
            Id
            LastName
            Title
          }
  }
  `;
    fetch("http://localhost:5000/graphql", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query }),
    }).then(async (response) => {
      let tempemployees = await response.json();
      let tempList = tempemployees.data.employeeList;

      setallEmp(tempList);
    });
  }, []);

  return (
    <React.StrictMode>
      <EmployeeRetireSearch allEmp={allEmp} />
      <hr />
    </React.StrictMode>
  );
}

export default EmployeeRetire;
