const mongoose = require("mongoose")
const userSchema = new mongoose.Schema({
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    rooms:{
        type:Array
 }

})

module.exports = mongoose.model("User",userSchema);