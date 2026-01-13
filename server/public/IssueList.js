function EmployeeSearch() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", null, "Welcome to Employee Filter "));
}
function IssueRow({
  issue,
  style
}) {
  return /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
    style: style
  }, issue.Id), /*#__PURE__*/React.createElement("td", {
    style: style
  }, issue.Owner), /*#__PURE__*/React.createElement("td", {
    style: style
  }, issue.Status), /*#__PURE__*/React.createElement("td", {
    style: style
  }, new Date(issue.Created).toUTCString()), /*#__PURE__*/React.createElement("td", {
    style: style
  }, issue.Effort), /*#__PURE__*/React.createElement("td", {
    style: style
  }, new Date(issue.Due).toUTCString()), /*#__PURE__*/React.createElement("td", {
    style: style
  }, issue.Title));
}
function EmployeeTable({
  allIssues
}) {
  const style = {
    border: "1px solid"
  };
  const allIssueRow = allIssues.map(issue => /*#__PURE__*/React.createElement(IssueRow, {
    issue: issue,
    style: style
  }));
  return /*#__PURE__*/React.createElement("div", {
    class: "Container"
  }, /*#__PURE__*/React.createElement("h3", null, "Welcome to Employee Table "), /*#__PURE__*/React.createElement("table", {
    style: style
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
    style: style
  }, "First Name"), /*#__PURE__*/React.createElement("th", {
    style: style
  }, "Last Name"), /*#__PURE__*/React.createElement("th", {
    style: style
  }, "Age"), /*#__PURE__*/React.createElement("th", {
    style: style
  }, "Date of Joining"), /*#__PURE__*/React.createElement("th", {
    style: style
  }, "Title"), /*#__PURE__*/React.createElement("th", {
    style: style
  }, "Department"), /*#__PURE__*/React.createElement("th", {
    style: style
  }, "Employee Type"), /*#__PURE__*/React.createElement("th", {
    style: style
  }, "Current Status"))), /*#__PURE__*/React.createElement("tbody", null, allIssueRow)));
}
function EmployeeCreate({
  AddSingleIssue
}) {
  const [errorMessage, setErrorMessage] = React.useState("");
  const handleSubmit = e => {
    e.preventDefault();
    const form = document.forms.addIssue;
    let newIssue = {
      Status: form.Status.value,
      Owner: form.Owner.value,
      Effort: parseInt(form.Effort.value),
      Title: form.Title.value
    };
    if (form.Owner.value.length < 3) {
      setErrorMessage("Owner's Name can't be less than 3 characters");
    } else {
      AddSingleIssue(newIssue);
    }
    document.forms.addIssue.reset();
  };
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", null, "Welcome to EmployeeCreate "), /*#__PURE__*/React.createElement("form", {
    name: "addIssue",
    onSubmit: handleSubmit
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    for: "FirstName"
  }, "First Name:"), /*#__PURE__*/React.createElement("input", {
    style: {
      "display": "block"
    },
    type: "text",
    name: "FirstName",
    placeholder: "FirstName"
  }), /*#__PURE__*/React.createElement("label", {
    for: "FirstName"
  }, "Last Name:"), /*#__PURE__*/React.createElement("input", {
    style: {
      "display": "block"
    },
    type: "text",
    name: "LastName",
    placeholder: "LastName"
  }), /*#__PURE__*/React.createElement("label", {
    for: "FirstName"
  }, "Age:"), /*#__PURE__*/React.createElement("input", {
    style: {
      "display": "block"
    },
    type: "number",
    name: "Age",
    placeholder: "Age"
  }), /*#__PURE__*/React.createElement("label", {
    for: "FirstName"
  }, "Date Of Joining:"), /*#__PURE__*/React.createElement("input", {
    style: {
      "display": "block"
    },
    type: "date",
    name: "DateOfJoining",
    placeholder: "DateOfJoining"
  }), /*#__PURE__*/React.createElement("label", {
    style: {
      "display": "block"
    },
    for: "Title"
  }, "Title:"), /*#__PURE__*/React.createElement("select", {
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
  }, "VP")), /*#__PURE__*/React.createElement("label", {
    style: {
      "display": "block"
    },
    for: "Department"
  }, "Department:"), /*#__PURE__*/React.createElement("select", {
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
  }, "Engineering")), /*#__PURE__*/React.createElement("label", {
    style: {
      "display": "block"
    },
    for: "EmployeeType"
  }, "EmployeeType:"), /*#__PURE__*/React.createElement("select", {
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
  }, "Seasonal")), /*#__PURE__*/React.createElement("button", {
    style: {
      "display": "block"
    },
    type: "submit"
  }, "Submit"))), /*#__PURE__*/React.createElement("h3", {
    style: {
      "color": "Red"
    }
  }, errorMessage));
}
const EmployeeDirectory = () => {
  const [allIssues, setAllIssues] = React.useState([]);
  let query = `
  query  {
      issueList {
          Id
          Status
          Owner
          Effort
          Created
          Due
          Title
      }
}
`;
  React.useEffect(function () {
    fetch('/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        query
      })
    }).then(async response => {
      let tempIssues = await response.json();
      console.log(tempIssues);
      let tempList = tempIssues.data.issueList;
      console.log(tempList);
      setAllIssues(tempList);
    });
  }, []);
  const AddSingleIssue = newIssue => {
    const d = new Date();
    newIssue.Id = allIssues.length + 1;
    newIssue.Created = d;
    newIssue.Due = new Date(d.getDate() + newIssue.Effort); // (new Date()).getDate() + newIssue.Effort; //date.getDate() + 1
    console.log(newIssue);
    let issues = allIssues.slice();
    issues.push(newIssue);
    setAllIssues(issues);
    let query = `
      mutation Mutation($message:String!){
        setGreetMessage(message:$message)
      }`;
    fetch('/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        query,
        variables: {
          message: "Hello "
        }
      })
    }).then(async response => {
      let temp = await response.json();
      console.log(temp);
    });
  };
  return /*#__PURE__*/React.createElement(React.StrictMode, null, /*#__PURE__*/React.createElement(EmployeeSearch, null), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement(EmployeeTable, {
    allIssues: allIssues
  }), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement(EmployeeCreate, {
    AddSingleIssue: AddSingleIssue
  }));
};
const element = ReactDOM.createRoot(document.getElementById(""));
element.render( /*#__PURE__*/React.createElement(EmployeeDirectory, null));