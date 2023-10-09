import React, { useState } from "react";
import '../styles/home.css';
import '../styles/LeftSideBar.css';
import "../styles/App.css";
import '../styles/RightSideBar.css';
import NavBar from "./NavBar";
import LeftSideBar from "./LeftSideBar";
import RightSideBar from "./RightSideBar";


const MyNetwork = () => {

  const [btn1, setBtn1] = useState(false);

  const handleBtn1 = () => {
    setBtn1(true);
    setTimeout(() => {
      setBtn1(false);
    }, 1000);
  }
  const handleBtn2 = () => {
    setBtn1(true);
    setTimeout(() => {
      setBtn1(false);
    }, 1000);
  }
  const handleBtn3 = () => {
    setBtn1(true);
    setTimeout(() => {
      setBtn1(false);
    }, 1000);
  }
  
  

  return (
    
        <>
        <NavBar />
        <div className="mainContainer">
          <LeftSideBar />
        <div className="MiddleBar">
        <div className="navbar___div">
          <h3 className="deslist">My Network</h3>
          <p>Invitations</p>
          <div className="jobs_container">
            <div className="image_container">
              <div>
                <img
                  className="imagejobs_width"
                  src="https://media.licdn.com/dms/image/C4E03AQGFaQO0G788Nw/profile-displayphoto-shrink_800_800/0/1650194519725?e=1699488000&v=beta&t=XibwV99X5A3U6ALt0ATg0aC33zkAnh8u5cXTOZFSAko"
                ></img>
              </div>
              <div className="pad_-left">
                <p className="para_head_black">Parathamesh Dalvi</p>
                <p className="para_detail">
                  Student at the New Collage, Kolhapur
                </p>
              </div>
            </div>
            <div className="image_container">
              <p className="pad_-leftfg">
                <h5>Ignore</h5>
              </p>
              <p className="pad_-leftfg_button">Accept</p>
            </div>
          </div>
          <div className="jobs_container">
            <div className="image_container">
              <div>
                <img
                  className="imagejobs_width"
                  src="https://media.licdn.com/dms/image/C4D03AQF8RepiU5txig/profile-displayphoto-shrink_800_800/0/1653567133276?e=1699488000&v=beta&t=WqUjGWgLCoQktYE3-5-AAgQrz0BhzKfrdlcCm3zEgMw"
                ></img>
              </div>
              <div className="pad_-left">
                <p className="para_head_black">Vardhan Choudhary</p>
                <p className="para_detail">
                  Student on Newton School
                </p>
              </div>
            </div>
            <div className="image_container">
              <p className="pad_-leftfg">
                <h5>Ignore</h5>
              </p>
              <p className="pad_-leftfg_button">Accept</p>
            </div>
          </div>
          <p>Connections</p>
          <div className="mynetwork_container">
            <div className="left_mynetwork_container">
              <img
                className="imagejobs_width"
                src="https://media.licdn.com/dms/image/D4D35AQGwk9qgQYmVzQ/profile-framedphoto-shrink_100_100/0/1677430771525?e=1697389200&v=beta&t=HlMbpqSiWP2kKFoMECBmwkKWg-uI3hrGL63sgKXTJ3E"
              ></img>
              <p className="para_head_black">Anand Dubey</p>
              <p className="mynetwork_textd">Frontend Developer</p>
              <div>
                <p className="mynetwork_text">
                  Based on your profile
                </p>
                <button
                  className="mynetwork_button"
                  onClick={handleBtn1}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    data-supported-dps="16x16"
                    fill="currentColor"
                    className="mercado-match"
                    width="16"
                    height="16"
                    focusable="false"
                  >
                    <path d="M9 4a3 3 0 11-3-3 3 3 0 013 3zM6.75 8h-1.5A2.25 2.25 0 003 10.25V15h6v-4.75A2.25 2.25 0 006.75 8zM13 8V6h-1v2h-2v1h2v2h1V9h2V8z"></path>
                  </svg>{""}Connect
                </button>
              </div>
            </div>
            <div className="left_mynetwork_container">
              <img
                className="imagejobs_width"
                src="https://media.licdn.com/dms/image/D4D35AQE9rVFNYW75Zg/profile-framedphoto-shrink_400_400/0/1690443000020?e=1697389200&v=beta&t=VutYtpm4vhUvnBKpG4ILWts-ikalb1ehQTkGMdjT1bQ"
              ></img>
              <p className="para_head_black">Sonu Kumar</p>
              <p className="mynetwork_textd">
                Full Stack Web Developer
              </p>
              <div>
                <p className="mynetwork_text">
                  Based on your profile
                </p>
                <button
                  className="mynetwork_button"
                  onClick={handleBtn2}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    data-supported-dps="16x16"
                    fill="currentColor"
                    className="mercado-match"
                    width="16"
                    height="16"
                    focusable="false"
                  >
                    <path d="M9 4a3 3 0 11-3-3 3 3 0 013 3zM6.75 8h-1.5A2.25 2.25 0 003 10.25V15h6v-4.75A2.25 2.25 0 006.75 8zM13 8V6h-1v2h-2v1h2v2h1V9h2V8z"></path>
                  </svg>{""}Connect
                </button>
              </div>
            </div>
            <div className="left_mynetwork_container">
              <img
                className="imagejobs_width"
                src="https://media.licdn.com/dms/image/D5603AQGVB9SBbU7mdg/profile-displayphoto-shrink_800_800/0/1672079391081?e=1699488000&v=beta&t=AmkAqUN37rj3JHPwpM66gVTNcRsbsUEdFTf8q-12fLY"
              ></img>
              <p className="para_head_black">Mahendra Singh</p>
              <p className="mynetwork_textd">Fresher</p>
              <div>
                <p className="mynetwork_text">
                  Based on your profile
                </p>
                <button
                  className="mynetwork_button"
                  onClick={handleBtn3}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    data-supported-dps="16x16"
                    fill="currentColor"
                    className="mercado-match"
                    width="16"
                    height="16"
                    focusable="false"
                  >
                    <path d="M9 4a3 3 0 11-3-3 3 3 0 013 3zM6.75 8h-1.5A2.25 2.25 0 003 10.25V15h6v-4.75A2.25 2.25 0 006.75 8zM13 8V6h-1v2h-2v1h2v2h1V9h2V8z"></path>
                  </svg>{""}Connect
                </button>
              </div>
            </div>
          </div>
          {btn1 && (<p className="connect__working">Still we are working on this</p>)}
        </div>
        </div>
        <RightSideBar />
        </div>
        
    </>
  )
}

export default MyNetwork;