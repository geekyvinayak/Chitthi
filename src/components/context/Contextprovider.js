import React, { useState } from "react";
import App from "../../App";
import { MyContext } from "./Context";

function Contextprovider(props) {
  const [logedin, setlogedin] = useState(false);
  const [getemail, setemail] = useState("");
  const [signup, setsignup] = useState(false);

  return (
    <MyContext.Provider
      value={{ logedin, setlogedin, getemail, setemail, signup, setsignup }}
    >
      {props.children}
    </MyContext.Provider>
  );
}

export default Contextprovider;
