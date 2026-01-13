import { useState } from "react";
import { Form, Row, Col, Container } from 'react-bootstrap';
import EmployeeRetireTable from "./EmployeeRetireTable";
function EmployeeRetireSearch({ allEmp }) {
  const [employeetypeSearch, setEmployeetypeSearch] = useState('');

  const dataFilter = filterData(allEmp,employeetypeSearch);
  function filterData(allEmp,employeetypeSearch) {
    let filterSearch = allEmp;
    if (employeetypeSearch) {
      filterSearch = filterSearch.filter(item => item.EmployeeType === employeetypeSearch);
    }
    return filterSearch;
  }
  return (
    <Container>
      <hr/>
    <h3 class='text-center'> RETIRE EMPLOYEE SEARCH </h3>
    <Form>
    <Row >
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
    <br></br>
  </Form>
      <EmployeeRetireTable allEmp={dataFilter} />
</Container>

  )
}

export default EmployeeRetireSearch;