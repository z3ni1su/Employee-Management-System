function EmployeeSearch() {
  return /*#__PURE__*/React.createElement("div", null);
}
function EmployeeRows({
  employee
}) {
  let curStat;
  if (employee.CurrentStatus) {
    curStat = "Working";
  } else {
    curStat = "Retired";
  }
  return /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, employee.Id), /*#__PURE__*/React.createElement("td", null, employee.FirstName), /*#__PURE__*/React.createElement("td", null, employee.LastName), /*#__PURE__*/React.createElement("td", null, employee.Age), /*#__PURE__*/React.createElement("td", null, new Date(parseInt(employee.DateOfJoining)).toUTCString()), /*#__PURE__*/React.createElement("td", null, employee.Title), /*#__PURE__*/React.createElement("td", null, employee.Department), /*#__PURE__*/React.createElement("td", null, employee.EmployeeType), /*#__PURE__*/React.createElement("td", null, curStat));
}
function EmployeeTable({
  allEmp
}) {
  const allEmpRow = allEmp.map(employee => /*#__PURE__*/React.createElement(EmployeeRows, {
    employee: employee
  }));
  return /*#__PURE__*/React.createElement("div", {
    class: "container"
  }, /*#__PURE__*/React.createElement("h3", {
    class: "text-center"
  }, " EMPLOYEE TABLE "), /*#__PURE__*/React.createElement("table", {
    class: "table  table-striped "
  }, /*#__PURE__*/React.createElement("thead", {
    class: "table-dark"
  }, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "ID"), /*#__PURE__*/React.createElement("th", null, "First Name"), /*#__PURE__*/React.createElement("th", null, "Last Name"), /*#__PURE__*/React.createElement("th", null, "Age"), /*#__PURE__*/React.createElement("th", null, "Date of Joining"), /*#__PURE__*/React.createElement("th", null, "Title"), /*#__PURE__*/React.createElement("th", null, "Department"), /*#__PURE__*/React.createElement("th", null, "Employee Type"), /*#__PURE__*/React.createElement("th", null, "Current Status"))), /*#__PURE__*/React.createElement("tbody", null, allEmpRow)));
}
function EmployeeCreate({
  AddEmp
}) {
  const [errorMessage, setErrors] = React.useState("");
  const handleSubmit = e => {
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
      CurrentStatus: "true"
    };
    let errors = [];
    if (form.FirstName.value == "") {
      errors.push("*Please Enter First Name");
    }
    if (form.LastName.value == "") {
      errors.push("*Please Enter Last Name");
    }
    if (form.Age.value == "") {
      errors.push("*Please Enter Age ");
    } else if (form.Age.value < 20 || form.Age.value > 70) {
      errors.push("*Please Enter an eligible age");
    }
    if (form.DateOfJoining.value == "") {
      errors.push("*Please Enter DOJ");
    }
    if (form.Title.value == "") {
      errors.push("*Please Enter Title");
    }
    if (form.Department.value == "") {
      errors.push("*Please Enter Department");
    }
    if (form.EmployeeType.value == "") {
      errors.push("*Please Enter Employee Type");
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
      return /*#__PURE__*/React.createElement("div", null, props.map((value, index) => /*#__PURE__*/React.createElement("div", {
        key: index
      }, value)));
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    class: "container"
  }, /*#__PURE__*/React.createElement("h3", {
    class: "text-center"
  }, "EMPLOYEE ONBOARDING "), /*#__PURE__*/React.createElement("form", {
    name: "empCreate",
    onSubmit: handleSubmit
  }, /*#__PURE__*/React.createElement("div", {
    class: "row"
  }, /*#__PURE__*/React.createElement("div", {
    class: " col-md-6"
  }, /*#__PURE__*/React.createElement("label", {
    class: "form-label",
    for: "FirstName"
  }, "First Name:"), /*#__PURE__*/React.createElement("input", {
    class: "form-control ",
    type: "text",
    name: "FirstName"
  })), /*#__PURE__*/React.createElement("div", {
    class: "col-md-6"
  }, /*#__PURE__*/React.createElement("label", {
    class: "form-label",
    for: "FirstName"
  }, "Last Name:"), /*#__PURE__*/React.createElement("input", {
    class: "form-control ",
    type: "text",
    name: "LastName"
  })), /*#__PURE__*/React.createElement("div", {
    class: "col-md-6"
  }, /*#__PURE__*/React.createElement("label", {
    class: "form-label",
    for: "FirstName"
  }, "Age:"), /*#__PURE__*/React.createElement("input", {
    class: "form-control ",
    type: "number",
    name: "Age"
  })), /*#__PURE__*/React.createElement("div", {
    class: "col-md-6"
  }, /*#__PURE__*/React.createElement("label", {
    class: "form-label",
    for: "FirstName"
  }, "Date Of Joining:"), /*#__PURE__*/React.createElement("input", {
    class: "form-control ",
    type: "date",
    name: "DateOfJoining"
  })), /*#__PURE__*/React.createElement("div", {
    class: "col-md-6"
  }, /*#__PURE__*/React.createElement("label", {
    class: "form-label",
    for: "Title"
  }, "Title:"), /*#__PURE__*/React.createElement("select", {
    class: "form-control ",
    id: "Title",
    name: "Title"
  }, /*#__PURE__*/React.createElement("option", {
    disabled: true,
    selected: true,
    value: ""
  }, "--Select An Option--"), /*#__PURE__*/React.createElement("option", {
    value: "Employee"
  }, "Employee"), /*#__PURE__*/React.createElement("option", {
    value: "Manager"
  }, "Manager"), /*#__PURE__*/React.createElement("option", {
    value: "Director"
  }, "Director"), /*#__PURE__*/React.createElement("option", {
    value: "VP"
  }, "VP"))), /*#__PURE__*/React.createElement("div", {
    class: "col-md-6"
  }, /*#__PURE__*/React.createElement("label", {
    class: "form-label",
    for: "Department"
  }, "Department:"), /*#__PURE__*/React.createElement("select", {
    class: "form-control ",
    id: "Department",
    name: "Department"
  }, /*#__PURE__*/React.createElement("option", {
    disabled: true,
    selected: true,
    value: ""
  }, "--Select An Option--"), /*#__PURE__*/React.createElement("option", {
    value: "IT"
  }, "IT"), /*#__PURE__*/React.createElement("option", {
    value: "Marketing"
  }, "Marketing"), /*#__PURE__*/React.createElement("option", {
    value: "HR"
  }, "HR"), /*#__PURE__*/React.createElement("option", {
    value: "Engineering"
  }, "Engineering"))), /*#__PURE__*/React.createElement("div", {
    class: "col-md-6"
  }, /*#__PURE__*/React.createElement("label", {
    class: "form-label",
    for: "EmployeeType"
  }, "EmployeeType:"), /*#__PURE__*/React.createElement("select", {
    class: "form-control ",
    id: "EmployeeType",
    name: "EmployeeType"
  }, /*#__PURE__*/React.createElement("option", {
    disabled: true,
    selected: true,
    value: ""
  }, "--Select An Option--"), /*#__PURE__*/React.createElement("option", {
    value: "FullTime"
  }, "FullTime"), /*#__PURE__*/React.createElement("option", {
    value: "PartTime"
  }, "PartTime"), /*#__PURE__*/React.createElement("option", {
    value: "Contract"
  }, "Contract"), /*#__PURE__*/React.createElement("option", {
    value: "Seasonal"
  }, "Seasonal")))), /*#__PURE__*/React.createElement("button", {
    class: "btn btn-dark",
    type: "submit"
  }, "Submit")), /*#__PURE__*/React.createElement("i", {
    style: {
      "color": "Red"
    }
  }, errorMessage));
}
function EmployeeDirectory() {
  const [allEmp, setallEmp] = React.useState([]);
  let query = `
    query  {
        employeeList {
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
  React.useEffect(function () {
    fetchData();
  }, []);
  function fetchData() {
    fetch('/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        query
      })
    }).then(async response => {
      let tempemployees = await response.json();
      let tempList = tempemployees.data.employeeList;
      setallEmp(tempList);
    });
  }
  const AddEmp = newemployee => {
    let query = `
      mutation AddEmp($FirstName: String!, $LastName: String!, $Age: Int!, $DateOfJoining: String!, $Title: String!, $Department: String!, $EmployeeType: String!,$CurrentStatus:String!) {
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
    fetch('/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
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
          CurrentStatus: newemployee.CurrentStatus
        }
      })
    }).then(async response => {
      let temp = await response.json();
      fetchData();
    });
  };
  return /*#__PURE__*/React.createElement(React.StrictMode, null, /*#__PURE__*/React.createElement(EmployeeSearch, null), /*#__PURE__*/React.createElement(EmployeeCreate, {
    AddEmp: AddEmp
  }), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement(EmployeeTable, {
    allEmp: allEmp
  }));
}
const element = ReactDOM.createRoot(document.getElementById("root-1"));
element.render( /*#__PURE__*/React.createElement(EmployeeDirectory, null));