import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useParams } from "react-router-dom";
import Decoder from "./Decoder";
import "../assets/read.css";
import { MyContext } from "./context/Context";
function Read() {
  const { register, handleSubmit } = useForm();
  const { index , id } = useParams();
  const [ele, setele] = useState([]);
  const [key, setkey] = useState();

  const onSubmit = async (data) => {
    console.log(data);
    const key = data.key;
    setkey(key);
  };

  const getdata = async () => {
    let { data } = await axios.post("https://insubstantialfilthyhashmaps.vinayak04.repl.co/getmessage", {
      index:index,id:id
    });
    setele(data);
  };

  useEffect(() => {
    getdata();
  }, []);

  return (
    <div className="wrapper">
      {!key && (
        <form onSubmit={handleSubmit(onSubmit)} className="Form">
          <h2>Insert Key</h2>

          <input
            type="text"
            {...register("key")}
            className="inputFeild"
          ></input>
          <input type="submit" />
          <Link to={`/getrooms/${id}`}>Go Back</Link>
        </form>
      )}
        {key && ele.message && <Decoder message={ele.message} keys={key} id={id} />}
     
      </div>
);
}

export default Read;
