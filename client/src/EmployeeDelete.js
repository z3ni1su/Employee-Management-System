import { useParams } from "react-router-dom";
import { useEffect } from "react";
import EmployeeDirectory from "./EmployeeDirectory";

function EmployeeDelete() {
  const { id } = useParams();
  useEffect(function () {
    window.location.replace("/directory");
    let query = `
    mutation deleteEmp($_id: String!) {
        deleteEmp(_id: $_id) {
          _id
          Id
          FirstName
          LastName
          Age
          DateOfJoining
          Title
          Department
          EmployeeType
          CurrentStatus
      }
    }
    `;

    fetch("http://localhost:5000/graphql", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query, variables: { _id: id } }),
    }).then(async (response) => {
      await response.json();
    });
  }, [id]);

  return <EmployeeDirectory />;
}

export default EmployeeDelete;
