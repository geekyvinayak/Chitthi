import React, { useState } from 'react'
import App from '../../App';
import { MyContext } from "./Context";

function Contextprovider(props) {
    const [logedin, setlogedin] = useState(false);
    const [getemail, setemail] = useState("");


  return (
    <MyContext.Provider value={{logedin, setlogedin,getemail, setemail}}>
         {props.children}
    </MyContext.Provider>
  )
}

export default Contextprovider