import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

function Roomchats() {
    const { id } = useParams();
    const [data,setdata] = useState([])

    const getdata = async()=>{
        console.log("yufsvbc",id)
          const {data} = await axios.post("https://insubstantialfilthyhashmaps.vinayak04.repl.co//getsingledata",{id})
          setdata(data)
          console.log("ssss",data)
      }

      useEffect(() => {
      getdata()
      }, [])

  return (
    <>
     <div><Link to={`/addpost/${id}`}><button>Add Post</button></Link></div>
    <div className='wrapper'>{data?.map((ele,index)=>
      <div className='card-container'>
       <div>{ele.time}</div>
       <div><Link to={`/read/${id}/${index}`}><button>Enter</button></Link></div>
      </div>
    )}
    </div>
    </>
  )
}

export default Roomchats
