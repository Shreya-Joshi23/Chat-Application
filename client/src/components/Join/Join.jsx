import React, { useState } from 'react'
import "./Join.css"
import chatapplogo from '../../assets/chatapplogo.png';
import {Link} from "react-router-dom"
import Header from '../Header';

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
    <>
    <div className='joinPage'>

      <div className='joinContainer'>
      <Header/>
        <h2>Lets Chat</h2>
        <input onChange={(e)=>setName(e.target.value)} type="text" id="joinInput" placeholder="Enter your username"  />
        <Link onClick={(e)=>!name?e.preventDefault():null} to='/chat'><button onClick={sendUser} className='joinbtn'>Login</button></Link>
      </div>
    </div>
    </>
  )
}

export default Join
export {user}
