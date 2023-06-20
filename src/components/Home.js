import React, { useState , useEffect, useContext} from 'react'
import axios from 'axios'
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import Decoder from './Decoder';
import "../assets/home.css"
import { MyContext } from './context/Context';

function Home() {
    const [data,setdata] = useState([])
    const {  getemail } = useContext(MyContext);

    const getdata = async()=>{
      const email = getemail;
        const {data} = await axios.post("https://insubstantialfilthyhashmaps.vinayak04.repl.co/getroom",{email:email})
        setdata(data)
        console.log(data)
    }

    useEffect(() => {
      getdata();
    }, [])
    
  return (
    <>
    <div className='wrapper'>{data.map(ele=>
      <div className='card-container'>
       <div>Room ID: {ele}</div>
      
       <div><Link to={`/getrooms/${ele}`}><button>Enter</button></Link></div>
      </div>
    )}
    </div>
    </>
  )
}

export default Home