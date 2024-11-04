import React,{useEffect, useState} from 'react'
import {user} from "../Join/Join"
import socketIo from 'socket.io-client'
import './Chat.css'
import Message from "../Message/Message"
import ReactScrollToBottom from 'react-scroll-to-bottom'
import { IoIosCloseCircle } from "react-icons/io";

let socket;
const ENDPOINT="http://localhost:4500/";

const Chat = () => {

  const [id,setid]=useState("");
  const [messages,setmessages]=useState([]);

  const send=()=>{
    const message=document.getElementById('chatInput').value;
    socket.emit('message',{message,id});
    document.getElementById('chatInput').value="";
  }

  console.log(messages);

  useEffect(()=>{
     socket=socketIo(ENDPOINT,{transports:['websocket']});
    socket.on('connect',()=>{
      alert('Connected');
      setid(socket.id);
    })

    socket.emit('joined',{user});

    socket.on('welcome',(data)=>{
      setmessages([...messages,data]);
      console.log(data.user,data.message);
    })

    socket.on('userJoined',((data)=>{
      setmessages([...messages,data]);
      console.log(data.user,data.message);
    }))

    socket.on('leave',(data)=>{
      setmessages([...messages,data]);
      console.log(data.user,data.message);
    })

    return ()=>{
      socket.disconnect();
    }
  },[]);
 
  useEffect(()=>{
    socket.on('sendMessage',(data)=>{
      setmessages([...messages,data]);
      console.log(data.user,data.message,data.id);
    })

    return ()=>{
      socket.off();
    }
  },[messages]);

  return (
    <div className='chatPage'>
      <div className='chatContainer'>
          <div className="chatheader">
            <h2>GlobalChat</h2>
            <a href="/"><IoIosCloseCircle className='closebtn'/></a>
          </div>
          <ReactScrollToBottom className="chatBox">
            {messages.map((item,i)=><Message user={item.id===id?'':item.user} message={item.message} classs={item.id===id?'right':'left'}/>)}
          </ReactScrollToBottom>
          <div className="inputBox">
            <input onKeyPress={(e)=>e.key==='Enter'?send():null} type="text" id="chatInput" />
            <button onClick={send} className='sendBtn'>Send</button>
          </div>
      </div>
    </div>
  )
}

export default Chat
