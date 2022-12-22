const mongoose = require("mongoose");

const connect = ()=>{
    return mongoose.connect("mongodb+srv://moazzem:auth123@cluster0.4g7svdo.mongodb.net/Auth?retryWrites=true&w=majority")
}

module.exports=connect;