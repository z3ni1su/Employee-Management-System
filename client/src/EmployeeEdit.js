import React from "react";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Form, Row, Col, Container } from "react-bootstrap";

function EmployeeEdit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [allEmp, setallEmp] = useState([]);
  const [newDateOne, gotDate] = useState();
  React.useEffect(
    function () {
      let query = `
    query employeeListById($_id: String!) {
        employeeListById(_id: $_id) {
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
        let empTemp = await response.json();
        let empTempList = empTemp.data.employeeListById;
        setallEmp(empTempList);

        //Date format Change
        let newDate = parseInt(empTempList.DateOfJoining);
        let parsingNewDate = new Date(newDate).toUTCString().slice(0, 16);
        gotDate(parsingNewDate);
      });
    },
    [id]
  );

  //For change event
  const onChangeValue = function (e) {
    setallEmp(e.target.value);
  };
  // For on Submit

  const updateEmp = (id, newemployee) => {
    console.log("inside update", newemployee);
    let query = `
      mutation updateEmp($_id: String!, $Title: String!, $Department: String!,$CurrentStatus:Int!) {
        updateEmp(_id: $_id,Title: $Title, Department: $Department,CurrentStatus: $CurrentStatus) {
            _id
            Title
            Department
            CurrentStatus
        }
      }
      `;

    fetch("http://localhost:5000/graphql", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query,
        variables: {
          _id: id,
          Title: newemployee.Title,
          Department: newemployee.Department,
          CurrentStatus: newemployee.CurrentStatus,
        },
      }),
    }).then(async (response) => {
      await response.json();
    });
  };
  const [errorMessage, setErrors] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = document.forms.empCreate;
    let newemployee = {
      Title: form.Title.value,
      Department: form.Department.value,
      CurrentStatus: parseInt(form.CurrentStatus.value),
    };
    
    let errors = [];
    if ((form.EmployeeType.value === "Contract" || form.EmployeeType.value === "Seasonal") && (form.Title.value === "Manager" || form.Title.value === "Director" || form.Title.value === "VP")) {
      errors.push("*Contract and Seasonal employees cannot be Managers, Directors, or VPs");
    }
    
    if (errors.length > 0) {
      setErrors((errors));
    } else {
      updateEmp(id, newemployee);
      navigate("/directory");
    }
  };
 
  return (
    <Container>
      <hr></hr>
      <h3 class="text-center">EMPLOYEE ONBOARDING </h3>
      <form name="empCreate" onSubmit={handleSubmit}>
        <Row>
          <Col md={6}>
            <Form.Group>
              <Form.Label>First Name:</Form.Label>
              <Form.Control
                readOnly
                value={allEmp.FirstName}
                type="text"
                name="FirstName"
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group>
              <Form.Label>Last Name:</Form.Label>
              <Form.Control
                readOnly
                value={allEmp.LastName}
                type="text"
                name="LastName"
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group>
              <Form.Label>Age:</Form.Label>
              <Form.Control
                readOnly
                value={allEmp.Age}
                type="number"
                name="Age"
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group>
              <Form.Label>Date Of Joining:</Form.Label>
              <Form.Control
                readOnly
                type="text"
                value={newDateOne}
                name="DateOfJoining"
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group>
              <Form.Label>Title:</Form.Label>
              <Form.Select
                value={allEmp.Title}
                id="Title"
                name="Title"
                onChange={onChangeValue}
              >
                <option disabled value="">
                  --Select An Option--
                </option>
                <option value="Employee">Employee</option>
                <option value="Manager">Manager</option>
                <option value="Director">Director</option>
                <option value="VP">VP</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group>
              <Form.Label>Department:</Form.Label>
              <Form.Select
                value={allEmp.Department}
                id="Department"
                name="Department"
                onChange={onChangeValue}
              >
                <option disabled value="">
                  --Select An Option--
                </option>
                <option value="IT">IT</option>
                <option value="Marketing">Marketing</option>
                <option value="HR">HR</option>
                <option value="Engineering">Engineering</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group>
              <Form.Label>EmployeeType:</Form.Label>
              <Form.Select
                disabled
                value={allEmp.EmployeeType}
                id="EmployeeType"
                name="EmployeeType"
              >
                <option disabled value="">
                  --Select An Option--
                </option>
                <option value="FullTime">FullTime</option>
                <option value="PartTime">PartTime</option>
                <option value="Contract">Contract</option>
                <option value="Seasonal">Seasonal</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group>
              <Form.Label>CurrentStatus:</Form.Label>
              <Form.Select
                value={allEmp.CurrentStatus}
                id="CurrentStatus"
                name="CurrentStatus"
                onChange={onChangeValue}
              >
                <option disabled value="">
                  --Select An Option--
                </option>
                <option value="0">Retired</option>
                <option value="1">Working</option>
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>
        <h6 style={{ color: "red" }}>{errorMessage}</h6>
        <button
          class="btn btn-dark"
          style={{ marginTop: "30px", marginBottom: "20px" }}
          type="submit"
        >
          Submit
        </button>
      </form>      
    </Container>
  );
}

export default EmployeeEdit;
