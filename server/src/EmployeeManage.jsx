function EmployeeSearch() {
    return (
        <div>
            {/* <h3>Employee Filter Search Coming Soon </h3> */}
        </div>
    )
  }
  function EmployeeRows({employee}) {
    let curStat;
    if(employee.CurrentStatus){
        curStat="Working"
    }else{
        curStat="Retired"
    }
    return (
    
        <tr>
            <td>{employee.Id}</td>
            <td>{employee.FirstName}</td>
            <td>{employee.LastName}</td>
            <td>{employee.Age}</td>
            <td>{new Date(parseInt(employee.DateOfJoining)).toUTCString()}</td>
            <td>{employee.Title}</td>
            <td>{employee.Department}</td>
            <td>{employee.EmployeeType}</td>
            <td>{curStat}</td>
        </tr> 
    )
  }
  
  function EmployeeTable({allEmp}) {
    const allEmpRow = allEmp.map((employee) => (
            <EmployeeRows employee={employee}/>
        ));
  
    return (
        <div class="container">
            <h3 class="text-center"> EMPLOYEE TABLE </h3>
            <table class="table  table-striped ">
                <thead class="table-dark">
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
                    </tr>
                </thead>
                <tbody>
                    {allEmpRow}               
                </tbody>
            </table>
        </div>
    )
  }


  function EmployeeCreate({AddEmp}) {
    const [errorMessage, setErrors] = React.useState("");
    
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
            CurrentStatus: "true"
        }
        
        let errors=[] ;
        
        if(form.FirstName.value == "") {
            errors.push("*Please Enter First Name")
        } 
        
        if(form.LastName.value  == "") {
            errors.push("*Please Enter Last Name")
        }
        
        if(form.Age.value == "") {
            errors.push("*Please Enter Age ")
        }
        else if(form.Age.value<20 || form.Age.value>70) {
            errors.push("*Please Enter an eligible age")
        }

        if(form.DateOfJoining.value == "") {
            errors.push("*Please Enter DOJ")
        } 
        if(form.Title.value == "") {
            errors.push("*Please Enter Title")
        } 
        if(form.Department.value == "") {
            errors.push("*Please Enter Department")
        } 
        if(form.EmployeeType.value == "") {
            errors.push("*Please Enter Employee Type")
        } 
        if(errors.length>0){
            setErrors(ErrorList(errors));     
        }else{
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
    }
  
    return (
        <div class="container" >
            <h3 class="text-center">EMPLOYEE ONBOARDING </h3>
            <form name="empCreate" onSubmit={handleSubmit}>   
            <div class="row">           
              <div class=" col-md-6" >
                <label class="form-label" for="FirstName">First Name:</label>
                <input  class="form-control " type="text"name="FirstName"/>
                </div>
                <div class="col-md-6" >
                <label class="form-label"  for="FirstName">Last Name:</label>
                <input  class="form-control "  type="text" name="LastName"/>
                </div>
                <div class="col-md-6" >
                <label class="form-label" for="FirstName">Age:</label>
                <input class="form-control "  type="number" name="Age" />
                </div>
                <div class="col-md-6" >
                <label class="form-label" for="FirstName">Date Of Joining:</label>
                <input class="form-control "  type="date" name="DateOfJoining"/>
                </div>
                <div class="col-md-6" >
                <label class="form-label"  for="Title">Title:</label>
                  <select class="form-control " id="Title" name="Title">
                  <option disabled selected value="">--Select An Option--</option>
                      <option value="Employee">Employee</option>
                      <option value="Manager">Manager</option>
                      <option value="Director">Director</option>
                      <option value="VP">VP</option>
                  </select>
                </div>
                <div class="col-md-6" >
                <label class="form-label"  for="Department">Department:</label>
                  <select class="form-control " id="Department" name="Department">
                      <option disabled selected value="">--Select An Option--</option>
                      <option value="IT">IT</option>
                      <option value="Marketing">Marketing</option>
                      <option value="HR">HR</option>
                      <option value="Engineering">Engineering</option>
                  </select>
                </div>
                <div class="col-md-6" >
                <label  class="form-label" for="EmployeeType">EmployeeType:</label>
                  <select class="form-control "  id="EmployeeType" name="EmployeeType">
                      <option disabled selected value="">--Select An Option--</option>
                      <option value="FullTime">FullTime</option>
                      <option value="PartTime">PartTime</option>
                      <option value="Contract">Contract</option>
                      <option value="Seasonal">Seasonal</option>
                  </select>
                </div>
                </div>
                <button class="btn btn-dark" type="submit">Submit</button> 
            </form>
            <i style={{"color": "Red"}}>{errorMessage}</i>
         </div>
    )
  }
  
  function EmployeeDirectory  (){
  
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
  
  React.useEffect(function(){
    fetchData();
  },[]);

  function fetchData(){
      fetch('/graphql', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json'},
          body: JSON.stringify({ query })
      }).then(async (response)=> {
        
          let tempemployees = await response.json();
          let tempList = tempemployees.data.employeeList;
          
          setallEmp(tempList);
      })
  }

  const AddEmp = (newemployee) => {
      let query=`
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
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({ query,variables:{FirstName:newemployee.FirstName,LastName:newemployee.LastName,Age:newemployee.Age,DateOfJoining:newemployee.DateOfJoining,Title:newemployee.Title,Department:newemployee.Department,EmployeeType:newemployee.EmployeeType,CurrentStatus:newemployee.CurrentStatus}})
    }).then(async (response)=> {
          
        let temp = await response.json();
        fetchData();
    })
  }

  
    return(
        <React.StrictMode>
           <EmployeeSearch />
           <EmployeeCreate AddEmp={AddEmp}/>
           <hr />
           <EmployeeTable allEmp={allEmp}/>
        </React.StrictMode>       
    )
  }
  
  const element = ReactDOM.createRoot(document.getElementById("root-1"));
  element.render(
        <EmployeeDirectory />
  );