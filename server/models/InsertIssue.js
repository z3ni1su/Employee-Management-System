require('./db');
const Issue = require('./issues')
const tempIssues = [
    {Id: 1002,FirstName:"Kurien",LastName:"Mathew", Age: 64, DateOfJoining: new Date("2022-10-25"),Title:"VP", Department: "Engineering", EmployeeType: "Contract",CurrentStatus:1},
    {Id: 2004,FirstName:"Megha",LastName:"Sebastian", Age: 64, DateOfJoining: new Date("2022-10-20"),Title:"Employee", Department: "Marketing", EmployeeType: "PartTime",CurrentStatus:1},
    {Id: 3006,FirstName:"Jatin",LastName:"Anil", Age: 64, DateOfJoining: new Date("2022-12-21"),Title:"Manager", Department: "IT", EmployeeType: "FullTime",CurrentStatus:1},
    {Id: 4008,FirstName:"Peter",LastName:"Mathew", Age: 52, DateOfJoining: new Date("2021-08-20"),Title:"Employee", Department: "HR", EmployeeType: "PartTime",CurrentStatus:1},
    {Id: 5010,FirstName:"Arjun",LastName:"Sebastian", Age: 62, DateOfJoining: new Date("2018-10-20"),Title:"VP", Department: "Engineering", EmployeeType: "FullTime",CurrentStatus:1},
    {Id: 6012,FirstName:"Kalpna",LastName:"Sebastian", Age: 24, DateOfJoining: new Date("2017-12-20"),Title:"Employee", Department: "IT", EmployeeType: "Contract",CurrentStatus:0},
    {Id: 7014,FirstName:"Aparna",LastName:"Krishna", Age: 28, DateOfJoining: new Date("2022-11-20"),Title:"Manager", Department: "Marketing", EmployeeType: "FullTime",CurrentStatus:1},
    {Id: 8016,FirstName:"Niveda",LastName:"Anil", Age: 33, DateOfJoining: new Date("2023-06-20"),Title:"Employee", Department: "Engineering", EmployeeType: "FullTime",CurrentStatus:1},
    {Id: 9018,FirstName:"Aswin",LastName:"Govindan", Age: 46, DateOfJoining: new Date("2023-04-20"),Title:"VP", Department: "IT", EmployeeType: "Seasonal",CurrentStatus:0},
    {Id: 1020,FirstName:"Amala",LastName:"Sebastian", Age: 57, DateOfJoining: new Date("2023-03-20"),Title:"VP", Department: "Engineering", EmployeeType: "PartTime",CurrentStatus:1}

  ];

Issue.insertMany(tempIssues)
    .then(function(data){
})
