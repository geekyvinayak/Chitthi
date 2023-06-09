import React, { useContext, useState } from "react";
import { Link, Routes } from "react-router-dom";
import { useNavigate } from "react-router-dom/dist";
import "../assets/navbar.css";
import { MyContext } from "./context/Context";

const Navbar = () => {
  const { logedin, signup, setsignup } = useContext(MyContext);
  const nav = useNavigate();

  return (
    <div className="container">
      <nav className="navbarcontainer">
        <div className="navbar">
          <ul className="navbarul">
            <li className="navbaritem">Chitthi</li>
            <li className="navbaritem">
              {logedin ? (
                <div className="navbaractions">
                  <Link to="/home">
                    <button>Home</button>
                  </Link>
                  <Link to="/roomsadd">
                    <button>Create/Join Room </button>
                  </Link>

                  <button
                    onClick={() => {
                      console.log("ha hua click");
                      localStorage.removeItem("token");
                      nav("/");
                    }}
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <div className="navbaractions">
                  <button
                    onClick={() => {
                      setsignup(!signup);
                    }}
                  >
                    {signup ? "Login" : "Sign Up"}
                  </button>
                </div>
              )}
            </li>
            {logedin ? 
            <li className="responsive-menu">
              <div class="hamburger-menu">
                <div className="appname">Chitthi</div>
                <input id="menu__toggle" type="checkbox"  />
                <label class="menu__btn" for="menu__toggle">
                  <span></span>
                </label>
                <ul class="menu__box">
                      <li>
                        <Link to="/home">
                          <button className="menu__item" onClick={()=>{(document.getElementById("menu__toggle").checked = false)}}>Home</button>
                        </Link>
                      </li>
                      <li>
                        <Link to="/roomsadd">
                          <button className="menu__item" onClick={()=>{(document.getElementById("menu__toggle").checked = false)}}>Create/Join Room </button>
                        </Link>
                      </li>
                      <li>
                        <button className="menu__item"
                          onClick={() => {
                            console.log("ha hua click");
                            localStorage.removeItem("token");
                            nav("/");
                          }}
                        >
                          Logout
                        </button>
                      </li>
                </ul>
              </div>
            </li>
            : <div className="appname">Chitthi</div>}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
