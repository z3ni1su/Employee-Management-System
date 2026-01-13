import React from "react";
import { useState } from "react";
import {  useNavigate } from 'react-router-dom';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';



function EmployeeCreate() {
  const AddEmp = (newemployee) => {
    let query = `
        mutation AddEmp($FirstName: String!, $LastName: String!, $Age: Int!, $DateOfJoining: String!, $Title: String!, $Department: String!, $EmployeeType: String!,$CurrentStatus:Int!) {
          AddEmp(FirstName: $FirstName, LastName: $LastName, Age: $Age, DateOfJoining: $DateOfJoining, Title: $Title, Department: $Department, EmployeeType: $EmployeeType,CurrentStatus: $CurrentStatus) {
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
      body: JSON.stringify({
        query,
        variables: {
          FirstName: newemployee.FirstName,
          LastName: newemployee.LastName,
          Age: newemployee.Age,
          DateOfJoining: newemployee.DateOfJoining,
          Title: newemployee.Title,
          Department: newemployee.Department,
          EmployeeType: newemployee.EmployeeType,
          CurrentStatus: newemployee.CurrentStatus,
        },
      }),
    }).then(async (response) => {
      await response.json();
      navigate("/directory");
    });
  };

  const [errorMessage, setErrors] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = document.forms.empCreate;
    let newemployee = {
      FirstName: form.FirstName.value,
      LastName: form.LastName.value,
      Age: parseInt(form.Age.value),
      DateOfJoining: form.DateOfJoining.value,
      Title: form.Title.value,
      Department: form.Department.value,
      EmployeeType: form.EmployeeType.value,
      CurrentStatus: 1,
    };

    let errors = [];

    if (form.FirstName.value === "") {
      errors.push("*Please Enter First Name");
    }

    if (form.LastName.value === "") {
      errors.push("*Please Enter Last Name");
    }

    if (form.Age.value === "") {
      errors.push("*Please Enter Age ");
    } else if (form.Age.value < 20 || form.Age.value > 65) {
      errors.push("*Please Enter an eligible age");
    }

    if (form.DateOfJoining.value === "") {
      errors.push("*Please Enter DOJ");
    }
    if (form.Title.value === "") {
      errors.push("*Please Enter Title");
    }
    if (form.Department.value === "") {
      errors.push("*Please Enter Department");
    }
    if (form.EmployeeType.value === "") {
      errors.push("*Please Enter Employee Type");
    }
    if ((form.EmployeeType.value === "Contract" || form.EmployeeType.value === "Seasonal") && (form.Title.value === "Manager" || form.Title.value === "Director" || form.Title.value === "VP")) {
      errors.push("*Contract and Seasonal employees cannot be Managers, Directors, or VPs");
    }
    
    if (errors.length > 0) {
      setErrors(ErrorList(errors));
    } else {
      AddEmp(newemployee);
      setErrors("");
      resetForm();

    }

    //Reset Forms
    function resetForm() {
      form.reset();
      document.getElementById("Title").selectedIndex = 0;
      document.getElementById("Department").selectedIndex = 0;
      document.getElementById("EmployeeType").selectedIndex = 0;
    }

    //Error List
    function ErrorList(props) {
      return (
        <div>
          {props.map((value, index) => (
            <div key={index}>{value}</div>
          ))}
        </div>
      );
    }
  };

  return (
    <Container>
  <hr />
  <h3 className="text-center">EMPLOYEE ONBOARDING </h3>
  <Form name="empCreate" onSubmit={handleSubmit}>
    <Row>
      <Col md={6}>
        <Form.Label>First Name:</Form.Label>
        <Form.Control type="text" name="FirstName" />
      </Col>
      <Col md={6}>
        <Form.Label>Last Name:</Form.Label>
        <Form.Control type="text" name="LastName" />
      </Col>
      <Col md={6}>
        <Form.Label>Age:</Form.Label>
        <Form.Control type="number" name="Age" />
      </Col>
      <Col md={6}>
        <Form.Label>Date Of Joining:</Form.Label>
        <Form.Control type="date" name="DateOfJoining" />
      </Col>
      <Col md={6}>
        <Form.Label>Title:</Form.Label>
        <Form.Select id="Title" name="Title">
          <option disabled selected value="">
            --Select An Option--
          </option>
          <option value="Employee">Employee</option>
          <option value="Manager">Manager</option>
          <option value="Director">Director</option>
          <option value="VP">VP</option>
        </Form.Select>
      </Col>
      <Col md={6}>
        <Form.Label>Department:</Form.Label>
        <Form.Select id="Department" name="Department">
          <option disabled selected value="">
            --Select An Option--
          </option>
          <option value="IT">IT</option>
          <option value="Marketing">Marketing</option>
          <option value="HR">HR</option>
          <option value="Engineering">Engineering</option>
        </Form.Select>
      </Col>
      <Col md={6}>
        <Form.Label>EmployeeType:</Form.Label>
        <Form.Select id="EmployeeType" name="EmployeeType">
          <option disabled selected value="">
            --Select An Option--
          </option>
          <option value="FullTime">FullTime</option>
          <option value="PartTime">PartTime</option>
          <option value="Contract">Contract</option>
          <option value="Seasonal">Seasonal</option>
        </Form.Select>
      </Col>
    </Row>
    <h6 style={{ color: "red" }}>{errorMessage}</h6>
    <Button
      variant="dark"
      style={{ marginTop: "30px", marginBottom: "20px" }}
      type="submit"
    >
      Submit
    </Button>
  </Form>
  
</Container>
  );
}

export default EmployeeCreate;
