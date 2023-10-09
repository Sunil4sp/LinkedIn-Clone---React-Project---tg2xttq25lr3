import React, { useContext } from 'react';
import Avatar from '@mui/material/Avatar';
import { DataAppContext } from "./DataApp";
import '../styles/LeftSideBar.css';
import profile_pic from '../Images/profile.jpg';

const LeftSideBar = () => {

    const localContext = useContext(DataAppContext);
    const { appState } = localContext;
    /* const { loginStatus } = appState; */

    const name = appState.name;
/*     const username = appState.username; 
    console.log(name);*/

    const handleDesign = () => {
        window.open(
          "https://medium.com/@Vincentxia77/beginners-guide-how-to-learn-web-designing-at-home-796c01b8c0c2/"
        );
      };
    
      const handleSoftwareEngineering = () => {
        window.open(
          "https://resources.workable.com/software-engineer-job-description/"
        );
      };
    
      const handleProgramming = () => {
        window.open("https://www.coursera.org/articles/what-is-programming/");
      };
    
      const handleReactjs = () => {
        window.open("https://legacy.reactjs.org/");
      };
    
      const handleDeveloper = () => {
        window.open("https://developers.google.com/");
      };
  return (
    <div className="leftSideBar">
      <div className="upperDiv">
        <div className="upperDiv_profile">
        <div className="camera">
          {/* <i className="fa fa-camera cameraIcon"></i> */}
          <Avatar
            id="avatar"
            alt="Sunil Pal"
            src= {profile_pic}
            sx={{ width: 56, height: 56 }}
          />
          {/* <img class="avatar avatar-xl" src="Images/profile.jpg" alt='Profile_pic' /> */}
        </div>
        <h3 className="h3">{name}</h3>
        </div>
        {/* <h5>{username}</h5> */}
        <hr></hr>
        <p className="connections">
          Who's viewed your profile &ensp;
          <span className="connectionCount">30</span>
        </p>

        <p className="growYour">
          Views on post &ensp;<span className="postCount">1521</span>
        </p>

       {/*  <hr></hr> */}
        {/* <p className="access">Access exclusive Tools & insights</p> */}
        {/* <hr></hr>
            <i className="fa fa-bookmark bookmark">My Items</i> */}
      </div>
      <div className="lowerDiv">
        <p id='lowerDiv recent'>Recent</p>
        <h5 onClick={handleReactjs}>#reactJS</h5>
        <h5 onClick={handleProgramming}>#programming</h5>
        <h5 onClick={handleSoftwareEngineering}>#software engineering</h5>
        <h5 onClick={handleDesign}>#design</h5>
        <h5 onClick={handleDeveloper}>#developer</h5>
      </div>
    </div>
  );
}

export default LeftSideBar;