import { useMemo, useState } from "react";
import EmployeeTable from "./EmployeeTable";
import { Form, Row, Col, Container } from 'react-bootstrap';
function EmployeeSearch({ allEmp }) {

  const [titleSearch, setTitleSearch] = useState('');
  const [departmentSearch, setDepartmentSearch] = useState('');
  const [employeetypeSearch, setEmployeetypeSearch] = useState('');

  const dataFilter =useMemo(()=> {
    let filterSearch = allEmp;
    if (titleSearch) {
      filterSearch = filterSearch.filter(item => item.Title === titleSearch);
    }
    if (departmentSearch) {
      filterSearch = filterSearch.filter(item => item.Department === departmentSearch);
    }
    if (employeetypeSearch) {
      filterSearch = filterSearch.filter(item => item.EmployeeType === employeetypeSearch);
    }
    return filterSearch;
  })
  return (
    <Container>
      <hr></hr>
    <h3 class='text-center'> EMPLOYEE SEARCH </h3>
    <Form>
    <Row>
      <Col md={6}>
        <Form.Label>Title:</Form.Label>
        <Form.Select value={titleSearch} onChange={e => setTitleSearch(e.target.value)}>
          <option value="">All</option>
          <option value="Employee">Employee</option>
          <option value="Manager">Manager</option>
          <option value="Director">Director</option>
          <option value="VP">VP</option>
        </Form.Select>
      </Col>
      <Col md={6}>
        <Form.Label>Department:</Form.Label>
        <Form.Select value={departmentSearch} onChange={e => setDepartmentSearch(e.target.value)}>
          <option value="">All</option>
          <option value="IT">IT</option>
          <option value="Marketing">Marketing</option>
          <option value="HR">HR</option>
          <option value="Engineering">Engineering</option>
        </Form.Select>
      </Col>
      <Col md={6}>
        <Form.Label>EmployeeType:</Form.Label>
        <Form.Select value={employeetypeSearch} onChange={e => setEmployeetypeSearch(e.target.value)}>
          <option value="">All</option>
          <option value="FullTime">FullTime</option>
          <option value="PartTime">PartTime</option>
          <option value="Contract">Contract</option>
          <option value="Seasonal">Seasonal</option>
        </Form.Select>
      </Col>
    </Row>
  </Form>
      <EmployeeTable allEmp={dataFilter} />
</Container>

  )
}

export default EmployeeSearch;