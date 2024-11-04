import React from 'react';
import './Homepage.css'; 
import { useNavigate } from 'react-router-dom';
import chat from "../../assets/chat.png"
import Header from '../Header';

const Homepage = () => {

    const navigate=useNavigate();

  return (
    <div className="homepage-container">
      <Header/>
      <main className="main-content">
        <section className="intro-section">
          <h2 className="welcome-text">Connect with Global Users 🌍</h2>
          <p className="intro-text">Experience real-time chatting with users from around the world. Join the conversation now!</p>
          <button className="btn-start-chatting" onClick={()=>navigate("/join")}>Start Chatting</button>
        </section>
        <section className="features-section">
            <div style={{paddingTop:"7em"}}>
          <h3 className="features-heading">Why Choose GlobalChat?</h3>
          <ul className="features-list">
            <li>🌐 <span style={{color:"blue",fontWeight:"bold"}}>C</span> onnect with global users in real-time</li>
            <li>💬 <span style={{color:"indigo",fontWeight:"bold"}}>S</span>imple and user-friendly interface</li>
            <li>🔒 <span style={{color:"indigo",fontWeight:"bold"}}>S</span>ecure data transmission </li>
            <li>📱 <span style={{color:"blue",fontWeight:"bold"}}>R</span>esponsive design for any device</li>
          </ul>
          </div>
          <img src={chat} alt="peopletalking"/>
        </section>
      </main>
      <footer className="footer">
        <p>&copy; 2024 GlobalChat. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Homepage;
