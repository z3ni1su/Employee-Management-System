function EmployeeRetireRows({ employee, index }) {
  let curStat;
  if (employee.CurrentStatus) {
    curStat = 'Working';
  } else {
    curStat = 'Retired';
  }

    const remaningYearToWork = 65-employee.Age;
    const retirementDate = new Date(parseInt(employee.DateOfJoining));
    retirementDate.setFullYear(retirementDate.getFullYear() + remaningYearToWork);
    const today = new Date();
    const remainingWorkDays= retirementDate-today;
    const differenceInDays = remainingWorkDays / 86400000;
    const integerNumber = Math.ceil(differenceInDays);


  if (
    employee.CurrentStatus && differenceInDays<=180 )
 {
    return (
      <tr key={employee.Id}>
        <td>{index + 1}</td>
        <td>{employee.FirstName}</td>
        <td>{employee.LastName}</td>
        <td>{employee.Age}</td>
        <td>{new Date(parseInt(employee.DateOfJoining)).toUTCString().substring(0, 16)}</td>
        <td>{employee.Title}</td>
        <td>{employee.Department}</td>
        <td>{employee.EmployeeType}</td>
        <td>{curStat}</td>
        <td>{integerNumber===1? integerNumber+" Day" : integerNumber+" Days"}</td>
      </tr>
    );
  } else {
    return(
        <div>

        </div>
    );
  }  
}

export default EmployeeRetireRows;
