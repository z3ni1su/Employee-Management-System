const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const EmployeeSchema = new Schema({
    Id:Number,
    FirstName: String,
    LastName: String,
    Age: Number,
    DateOfJoining: {type: Date, default: new Date()},
    Title: String,
    Department: String,
    EmployeeType: String,
    CurrentStatus: Boolean,
});

const Issue = mongoose.model('Issue', EmployeeSchema, "issues");
module.exports = Issue;