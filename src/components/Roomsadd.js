import axios from 'axios';
import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { MyContext } from './context/Context';
import { ToastContainer, toast } from 'react-toastify';

function Roomsadd() {
  const { register, handleSubmit } = useForm();
  const {  getemail } = useContext(MyContext)
  const nav = useNavigate();

  const onSubmit = async (data) =>{
    const result = await getdata(data.roomid,getemail);
    if(result==="done"){
      await toast.success('Room Created', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
      nav("/home")
    }
    else{
      toast.warning('Room already Exists!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    }
  };

  const onJoin = async (data) =>{
    const result = await setdata(data.roomid1,getemail);
    console.log(result)
    if(result==="joined"){
     await toast.success('Room Created', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
      nav("/home")
    }
    else{
      toast.warning("Room doesn't Exists!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    }

   
  };

  const setdata = async (roomid,email) => {
    let { data } = await axios.post("https://insubstantialfilthyhashmaps.vinayak04.repl.co/joinroom", {
     roomid:roomid , email:email
    });
    return data;
  };

  const getdata = async (roomid,email) => {
    let { data } = await axios.post("https://insubstantialfilthyhashmaps.vinayak04.repl.co/createroom", {
     roomid:roomid , email:email
    });
    return data;
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
  <ToastContainer></ToastContainer>

  </>
  )
}

export default Roomsadd