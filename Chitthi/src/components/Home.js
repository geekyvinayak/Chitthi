import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Decoder from "./Decoder";
import "../assets/home.css";
import { ToastContainer, toast } from "react-toastify";
import { MyContext } from "./context/Context";
import { useNavigate } from "react-router-dom/dist";

function Home() {
  const [data, setdata] = useState([]);
  const { logedin, getemail } = useContext(MyContext);
  const nav = useNavigate();

  const getdata = async () => {
    const email = getemail;
    const { data } = await axios.post(
      "https://chitthi-backend.vercel.app/getroom",
      { email: email }
    );
    setdata(data);
    console.log(data);
  };

  useEffect(() => {

    if (!logedin) {
      nav("/");
    }
    else{
    getdata();}
  }, []);

  return (
    <>
      <div className="wrapper">
        {data.length===0?<div className="card-container"><h3>No Rooms Found</h3></div>:
        data.map((ele) => (
          <div className="card-container">
            <div>Room ID: {ele}</div>

            <div>
              <Link to={`/getrooms/${ele}`}>
                <button>Enter</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <ToastContainer></ToastContainer>
    </>
  );
}

export default Home;
