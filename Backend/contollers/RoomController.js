const RoomModel = require("../models/RoomModel.js");
const UserModel = require("../models/UserModel.js");
const bcrypt = require("bcrypt");
var jwt = require('jsonwebtoken');

module.exports.users = async (req, res) => {
  const user = await UserModel.find();
  res.send(user);
};

module.exports.getSingleRoom = async (req, res) => {
  const { id } = req.body;
  const Rooms = await RoomModel.findOne({ Roomid: id });
  res.send(Rooms.messages);
};

module.exports.getmessage = async (req, res) => {
  const { id, index } = req.body;
  const Rooms = await RoomModel.findOne({ Roomid: id });
  res.send(Rooms.messages[index]);
};

module.exports.setRoom = async (req, res) => {
  const data = req.body;
  const obj = { message: data.message, user: data.user, time: data.time };
  await RoomModel.findOneAndUpdate(
    { Roomid: data.roomid },
    { $push: { messages: { $each: [obj], $position: 0 } } }
  );
  res.send("done");
};


module.exports.verify = async (req, res) => {
  const token = req.headers['token'];
  try{
  const decode = await jwt.verify(token, 'secret');
  if (decode) {
    res.send({ stat: true, decode})
  }
  else {
    res.send({ stat: false })
  }
  }
  catch (err) {

        res.send({ stat: false, err: err.message });

    }
  
}


module.exports.login = async (req, res) => {
  const { email, password } = req.body;
  const user = await UserModel.findOne({ email: email });
  if (user === null) {
    res.send("notfound");
  } else {
    const match = await bcrypt.compare(password, user.password);

    if (match) {
      const token = jwt.sign({
        data: email
      }, 'secret', { expiresIn: 60 * 60 });
      res.send({ stat: "sucess", token: token });
    } else {
      res.send({ stat: "fail" });
    }
  }
};

module.exports.signup = async (req, res) => {
  let data = req.body;
  const { email, password } = data;
  const saltRounds = 10;
  const myPlaintextPassword = password;
  const hashedPassword = await bcrypt.hash(myPlaintextPassword, saltRounds);
  data.password = hashedPassword;

  const user = await UserModel.findOne({ email: email });
  if (user === null) {
    UserModel.create(data)
      .then((data) => {
        res.status(201).send("created");
      })
      .catch((err) => {
        res.send(err);
      });
  } else {
    res.send("already exist");
  }
};

module.exports.createroom = async (req, res) => {
  const { roomid, email } = req.body;
  const user = await RoomModel.findOne({ Roomid: roomid });
  if (user === null) {
    let data = { Roomid: roomid, password: "", messages: [] };
    await RoomModel.create(data)
      .then((data) => {
        console.log("saved");
      })
      .catch((err) => {
        console.log(err);
      });
    await UserModel.findOneAndUpdate(
      { email: email },
      { $push: { rooms: roomid } }
    );
    res.send("done");
  } else {
    res.send("roomExist");
  }
};

module.exports.joinroom = async (req, res) => {
  const { roomid, email } = req.body;
  const user = await RoomModel.findOne({ Roomid: roomid });
  if (user === null) {
    res.send("room not found");
  } else {
    await UserModel.findOneAndUpdate(
      { email: email },
      { $push: { rooms: roomid } }
    );
    res.send("joined");
  }
};

module.exports.getroom = async (req, res) => {
  const { email } = req.body;
  const user = await UserModel.findOne({ email: email });
  res.send(user.rooms);
};
