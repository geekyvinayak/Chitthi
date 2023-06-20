import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Addpost from "./components/Addpost";
import Read from "./components/Read";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import { createContext } from "react";
import { MyContext } from "./components/context/Context";
import Contextprovider from "./components/context/Contextprovider";
import Roomsadd from "./components/Roomsadd";
import Roomchats from "./components/Roomchats";
import { ToastContainer, toast } from 'react-toastify';


function App() {
  return (
    <>
      <Router>
        <Contextprovider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/addpost/:id" element={<Addpost />} />
            <Route path="/read/:id/:index" element={<Read />} />
            <Route path="/getrooms/:id" element={<Roomchats />} />
            <Route path="/roomsadd" element={<Roomsadd />} />
          </Routes>
        </Contextprovider>
      </Router>
      <ToastContainer></ToastContainer>
    </>
  );
}

export default App;
