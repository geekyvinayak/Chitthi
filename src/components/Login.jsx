import axios from 'axios';
import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form';
import "../assets/login.css"
import { MyContext } from './context/Context';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

function Login() {
  const {  setlogedin,setemail } = useContext(MyContext);
  const [signup,setsignup] = useState(false);

  const nav = useNavigate();
  const {register, handleSubmit } = useForm();
  const onSubmit = async data => {
    const email = data.email;
    const password = data.password;
    const bag = {email:email,password:password}

    if(signup){
        let {data} = await axios.post("https://insubstantialfilthyhashmaps.vinayak04.repl.co/signup",bag);
        if(data=='already exist'){
            toast.error('User already Exists!', {
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
        if(data=='created'){
            toast.success('Signup sucessfully Please Login', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
            setsignup(false);
        }
        console.log(data)
    }
    else{
        let {data} = await axios.post("https://insubstantialfilthyhashmaps.vinayak04.repl.co/login",bag);
        if(data === 'notfound'){
            toast.error('User not Exists! Please signupp', {
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
        if(data === 'fail'){
            toast.warning('Wrong Password', {
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
        if(data==='sucess'){
            setlogedin(true)
            setemail(email);
            nav("/home");
        }
        console.log(data)
    }
  }

  const changesignup = () =>{
    setsignup(!signup);
  }
  return (
    <div class="login-container">
            <div class='form-container'>
                <ul>
                    {signup?<li>Signup</li>:
                    <li>Login</li>}
                </ul>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div class="form">
                        <label for="date">Email</label>
                        <input type="email" name="email" id="password" placeholder="Enter Email" {...register("email")} />
                    </div>
                    <div class="form">
                        <label for="date">Password</label>
                        <input type="password" name="password" id="password" placeholder="Enter Password" {...register("password")}/>
                    </div>
                    <div class="form-btn">
                        <button>Submit</button>
                    </div>
                    <div class="form-btn">
                        <p>{signup?<div onClick={changesignup}>Login</div>:<div onClick={changesignup}>Sign Up</div>}</p>
                    </div>
                </form>
            </div>
            <ToastContainer></ToastContainer>
        </div>
  )
}

export default Login