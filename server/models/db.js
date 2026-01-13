const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://kurien:123@cluster0.trdrkwp.mongodb.net/fullStackAssignment1');
mongoose.connection.on("connected", function(){
    console.log("Application is connected to Database");
})