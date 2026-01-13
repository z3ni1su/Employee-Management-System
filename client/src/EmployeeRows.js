import { Link } from 'react-router-dom';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import trashImg from './img/trash.png';
import penImg from './img/pen.png';

function EmployeeRows({ employee, index }) {
  let curStat;

  const remaningYearToWork = 65-employee.Age;
  const retirementDate = new Date(parseInt(employee.DateOfJoining));
  retirementDate.setFullYear(retirementDate.getFullYear() + remaningYearToWork);
  const today = new Date();
  let remainingWorkDays= retirementDate-today;
  const differenceInDays = remainingWorkDays / 86400000;
  let integerNumber = Math.ceil(differenceInDays);

  function convertDaysToYearsMonthsDays(days) {
    const years = Math.floor(days / 365);
    days %= 365;
    const months = Math.floor(days / 30);
    days %= 30;
  
    let result = '';
    if (years > 0) {
      result += years + (years === 1 ? ' Year' : ' Years');
    }
    if (months > 0) {
      result += (result.length > 0 ? ', ' : '') + months + (months === 1 ? ' Yonth' : ' Months');
    }
    if (days > 0) {
      result += (result.length > 0 ? ', ' : '') + days + (days === 1 ? ' Day' : ' Days');
    }
  
    return result;
  }
  
  const formattedString = convertDaysToYearsMonthsDays(integerNumber);
  
  if (employee.CurrentStatus) {
    curStat = 'Working';
  } else {
    curStat = 'Retired';
  }

  const tooltipMessage = employee.CurrentStatus ? 'Cannot delete a working employee.' : "Press to delete this employee's records";

  return (
    <tr>
      <td>{index + 1}</td>
      <td>{employee.FirstName}</td>
      <td>{employee.LastName}</td>
      <td>{employee.Age}</td>
      <td>{new Date(parseInt(employee.DateOfJoining)).toUTCString().substring(0, 16)}</td>
      <td>{employee.Title}</td>
      <td>{employee.Department}</td>
      <td>{employee.EmployeeType}</td>
      <td>{curStat}</td>
      <td>{integerNumber > 0 && employee.CurrentStatus===1 ? formattedString : "Retired"}</td>
      <td>
        <Link to={`/edit/${employee._id}`}>
          <img alt='Pencil' style={{ width: '20px' }} src={penImg}></img>
        </Link>
      </td>
      <td>
        {employee.CurrentStatus === 1 ?
        <OverlayTrigger placement='right' overlay={<Tooltip>{tooltipMessage}</Tooltip>}>
          <img alt='Trash' style={{ width: '20px', opacity: 0.4 }} src={trashImg}></img> 
          </OverlayTrigger>:
          <OverlayTrigger placement='right' overlay={<Tooltip>{tooltipMessage}</Tooltip>}>
            <Link to={`/delete/${employee._id}`}>
              <img alt='Trash' style={{ width: '20px' }} src={trashImg}></img>
            </Link>
          </OverlayTrigger>
        }
      </td>
    </tr>
  );
}

export default EmployeeRows;
