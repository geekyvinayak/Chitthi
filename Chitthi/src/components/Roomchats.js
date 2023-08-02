import axios from "axios";
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom/dist";
import { MyContext } from "./context/Context";

function Roomchats() {
  const { id } = useParams();
  const [data, setdata] = useState([]);
  const { logedin } = useContext(MyContext);
  const nav = useNavigate();
  const getdata = async () => {
    console.log("yufsvbc", id);
    const { data } = await axios.post(
      "https://chitthi-backend.vercel.app/getsingledata",
      { id }
    );
    setdata(data);
    console.log("ssss", data);
  };

  useEffect(() => {
    if (!logedin) {
      nav("/");
    }
    getdata();
  }, []);

  return (
    <>
      <div className="navbaractions" id="addpost">
        <Link to={`/addpost/${id}`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            id="add"
          >
            <path fill="none" d="M0 0h48v48H0z"></path>
            <path d="M8 12H4v28c0 2.21 1.79 4 4 4h28v-4H8V12zm32-8H16c-2.21 0-4 1.79-4 4v24c0 2.21 1.79 4 4 4h24c2.21 0 4-1.79 4-4V8c0-2.21-1.79-4-4-4zm-2 18h-8v8h-4v-8h-8v-4h8v-8h4v8h8v4z"></path>
          </svg>
        </Link>
      </div>
      <div className="wrapper">
      {data.length===0?<div className="card-container"><h3>No Chats Found</h3></div>:
      data?.map((ele, index) => (
          <div className="card-container">
          <div>{data.length - 1 - index} - </div>
            <div>{ele.time}</div>
            <div>
              <Link to={`/read/${id}/${index}`}>
                <button>Enter</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Roomchats;
