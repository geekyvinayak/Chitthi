import React from 'react'
import { useForm } from 'react-hook-form';
import axios from 'axios'
import { Link, useNavigate, useParams } from 'react-router-dom';
import "../assets/addpost.css"
var CryptoJS = require("crypto-js");

function Addpost() {
    const { id } = useParams();
    const nav = useNavigate();
    const {register, handleSubmit } = useForm();

    const onSubmit = async data => {
        console.log(data)
        const message = data.message
        const key = data.key
        var ciphertext = CryptoJS.AES.encrypt(message, key).toString();
        

        const date = new Date();
        const user = "abcd"
        const bag = {message : ciphertext,user:user,time:date,roomid:id}
        await axios.post("http://localhost:5000/setdata",bag);
        nav("/home");
      };


  return (
    <div class="login-container">
    <div class='form-container'>
        <ul>
           Add Post
        </ul>
    
        <form onSubmit={handleSubmit(onSubmit)}>
            <div class="form">
                <label for="date">Enter Message</label>
                <textarea name="email" id="password" placeholder="Enter Email" {...register("message")} rows="10" cols="20" ></textarea>
            </div>
            <div class="form">
                <label for="date">Key</label>
                <input type="password" name="password" id="password" placeholder="Enter Password" {...register("key")}/>
            </div>
            <div class="form-btn">
                <button>Submit</button>
            </div>
            <div class="form-btn">
               <Link to="/home">Go back</Link>
            </div>
        </form>
    </div>
    </div>
  )
}

export default Addpost
