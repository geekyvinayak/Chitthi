import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import "../assets/read.css"

var CryptoJS = require("crypto-js");

function Decoder({message , keys ,id}) {
  const nav = useNavigate();
  const [s, st] = useState('');

  const set = () => {
    console.log("called");
    var bytes =  CryptoJS.AES.decrypt(message, keys);
    try{
      var decryptedData = bytes.toString(CryptoJS.enc.Utf8);
      st(decryptedData)
    }
    catch{
      st('Error')
    }
    
  };

  const goback = () =>{
    nav(`/getrooms/${id}`);
  }

  useEffect(() => {
       
    set()
      }, []);


  return (
    <>
    {s!=='Error'?<div className='messagebox'>{s}</div>:'Invalid Key'}
    <input type="submit" value="Go Back" onClick={goback}/>
    </>
  )
}

export default Decoder