const express = require("express");
const {getRoom, setRoom,getSingleRoom, login, signup, users, getroom , createroom, getmessage, joinroom,verify } = require("../contollers/RoomController");
// const getRooms = require("../contollers/RoomController.js")
const router = express.Router();

// router.get("/getdata",getRoom);
router.get("/user",users);
router.post("/getsingledata",getSingleRoom);
router.get("/verify",verify);
router.post("/getmessage",getmessage);
router.post("/setdata",setRoom);
router.post("/login",login);
router.post("/signup",signup);
router.post("/createroom",createroom);
router.post("/joinroom",joinroom);
router.post("/getroom",getroom);

module.exports = router