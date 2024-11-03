import React, { useState } from 'react'
import "./Join.css"
import chatapplogo from '../../assets/chatapplogo.png';
import {Link} from "react-router-dom"

//anchor tag causes reloading whereas Link does not reload the page

let user;

const Join = () => {

  const [name,setName]=useState("");
  console.log(name);

  const sendUser=()=>{
    user=document.getElementById("joinInput").value;
    document.getElementById("joinInput").value="";
  }

  return (
    <div className='joinPage'>
      <div className='joinContainer'>
        <img src={chatapplogo} alt="" />
        <h1>Lets Chat</h1>
        <input onChange={(e)=>setName(e.target.value)} type="text" id="joinInput" placeholder="Enter your name"  />
        <Link onClick={(e)=>!name?e.preventDefault():null} to='/chat'><button onClick={sendUser} className='joinbtn'>Login</button></Link>
      </div>
    </div>
  )
}

export default Join
export {user}
