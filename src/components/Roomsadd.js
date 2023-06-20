import axios from 'axios';
import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { MyContext } from './context/Context';

function Roomsadd() {
  const { register, handleSubmit } = useForm();
  const {  getemail } = useContext(MyContext)
  const nav = useNavigate();
  const onSubmit = async (data) =>{
    getdata(data.roomid,getemail);
    nav("/home")
  };

  const onJoin = async (data) =>{
    setdata(data.roomid1,getemail);
    nav("/home")
  };

  const setdata = async (roomid,email) => {
    let { data } = await axios.post("https://insubstantialfilthyhashmaps.vinayak04.repl.co/joinroom", {
     roomid:roomid , email:email
    });
    console.log(data)
  };

  const getdata = async (roomid,email) => {
    let { data } = await axios.post("https://insubstantialfilthyhashmaps.vinayak04.repl.co/createroom", {
     roomid:roomid , email:email
    });
    console.log(data)
    
  };

  return (
    <>
    <div className="wrapper">
      <form onSubmit={handleSubmit(onSubmit)} className="Form">
        <h2>Create Room</h2>
        <label for="date">Choose Room ID:</label>
        <input
          type="text"
          {...register("roomid")}
          className="inputFeild"
        ></input>
        <input type="submit" />
        <Link to="/home">Go Back</Link>
      </form>
    </div>
    <div className="wrapper">
    <form onSubmit={handleSubmit(onJoin)} className="Form">
      <h2>Join Room</h2>
      <label for="date">Enter Room ID:</label>
      <input
        type="text"
        {...register("roomid1")}
        className="inputFeild"
      ></input>
      <input type="submit" />
      <Link to="/home">Go Back</Link>
    </form>
  </div>
  </>
  )
}

export default Roomsadd