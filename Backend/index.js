const express=require('express')
const mongoose = require('mongoose')

const cors = require("cors")
const routes = require("./routes/RoomRoute")
const app = express()

const PORT =  5000
// var corsOptions = {
//     origin: 'https://chitthi.vercel.app',
//     optionsSuccessStatus: 200 // For legacy browser support
// }

app.use(express.json())
app.use(cors());


mongoose.connect("mongodb+srv://geekyvinayak:u8z5cLQNJI324Txf@cluster0.cukrkqp.mongodb.net/Cluster0?retryWrites=true&w=majority").then(()=>console.log("connected")).catch((err)=>console.log(err))

app.use("/",routes);

app.listen(PORT,console.log("Listening at " + PORT))

