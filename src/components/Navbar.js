import React, { useContext } from "react";
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
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
