import React, { useEffect } from "react";
import EmployeeSearch from "./EmployeeSearch";
import { useState } from "react";

function EmployeeDirectory() {
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
      <EmployeeSearch allEmp={allEmp} />
      <hr />
    </React.StrictMode>
  );
}

export default EmployeeDirectory;
