const express= require("express")
const { ApolloServer } = require('apollo-server-express');
require('./models/db.js');

const app = express()
app.use(express.static('public'))

app.listen('5000',function(){

console.log("Webserver is running...")

})

const Issue = require('./models/issues');
const { findByIdAndDelete, deleteOne } = require("./models/issues");
const typeDefs = `
 type employee{
    _id: String,
    Id:Int,
    FirstName:String,
    LastName:String,
    Age:Int,
    DateOfJoining:String,
    Title:String
    Department:String,
    EmployeeType:String,
    CurrentStatus:Int
 }

    type Query {

        employeeList:[employee]
        employeeListById(_id: String!): employee  
        
        
    }
    type Mutation {

        AddEmp(FirstName:String!,LastName:String!,Age:Int!,DateOfJoining:String!,Title:String!,Department: String!,EmployeeType: String!,CurrentStatus: Int!): employee
        deleteEmp(_id: String!): employee
        updateEmp(_id: String!,Title:String!,Department: String!,CurrentStatus: Int!): employee
           
    }
`;

const resolvers = {

    Query: {
        employeeList,
        employeeListById
        
    },
    Mutation: {
        AddEmp,
        deleteEmp,
        updateEmp 
    },
};

async function employeeList() {
    return (await Issue.find());
}
async function employeeListById(_,{_id}){
    return (await(Issue.findById(_id)));
}

async function updateEmp(_,{_id,Title,Department,CurrentStatus}){
    let editemployee={
        Title:Title,
        Department:Department,
        CurrentStatus:CurrentStatus
    } 
    return (await Issue.findByIdAndUpdate(_id,editemployee));
}

async function AddEmp(_,{FirstName,LastName,Age,DateOfJoining,Title,Department,EmployeeType,CurrentStatus}){
    let employee={
        FirstName:FirstName,
        LastName:LastName,
        Age:Age,
        DateOfJoining:DateOfJoining,
        Title:Title,
        Department:Department,
        EmployeeType:EmployeeType,
        CurrentStatus:CurrentStatus
    } 
    let count=await(Issue.find().count());
    // let count = Math.floor(Math.random() * 10000) + 1;
    employee.Id=count+1;
    return await (Issue.create(employee));
}

async function deleteEmp(_,{_id}){
    return await (Issue.findByIdAndDelete(_id));
}

const server = new ApolloServer({
    typeDefs,
    resolvers
});

server.start()
    .then(function(){
        server.applyMiddleware({app, path:'/graphql', cors: true})
    })