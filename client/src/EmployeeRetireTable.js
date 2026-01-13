import EmployeeRetireRows from './EmployeeRetireRows';
import { Container, Table } from 'react-bootstrap';

function EmployeeRetireTable ({ allEmp }) {
  const allEmpRow = allEmp.map((employee,index) => <EmployeeRetireRows employee={employee} index={index} />)

  return (
<Container>
  <h3 class='text-center'> UPCOMING RETIREMENT TABLE </h3>
  <Table striped bordered hover>
    <thead class='table-dark'>
      <tr>
        <th>ID</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Age</th>
        <th>Date of Joining</th>
        <th>Title</th>
        <th>Department</th>
        <th>Employee Type</th>
        <th>Current Status</th>
        <th>Days to Retire</th>
      </tr>
    </thead>
    <tbody>{allEmpRow}</tbody>
  </Table>
</Container>
  )
}

export default EmployeeRetireTable
