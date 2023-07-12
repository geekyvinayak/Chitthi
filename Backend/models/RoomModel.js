const mongoose = require("mongoose")
const RoomSchema = new mongoose.Schema({
    Roomid:{
        type:String,
        require:true
    },
    Password:{
        type:String,
        
    },
    messages:{
        type:Array,
    }
})

module.exports = mongoose.model("Room",RoomSchema);