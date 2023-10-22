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
            alt={name}
            src= {(name ==='sunil'|| name === 'Sunil'|| name === 'SUNIL') ? profile_pic : undefined}
            sx={{ width: 56, height: 56 }}
          />
        </div>
        <h3 className="h3_title">{name}</h3>
        </div>
        {/* <h5>{username}</h5> */}
        <hr></hr>
        <div className="leftSidebar_connection">
          <div className="connection_detail">
          <p className="connections">
            Who's viewed your profile &ensp;
          </p>
          <span className="connectionCount">30</span>
        </div>
        <div className="connection_detail">
        <p className="growYour">
          Connections &ensp;
        </p>
        <span className="postCount">1521</span>
        </div>
      </div>
       {/*  <hr></hr> */}
        {/* <p className="access">Access exclusive Tools & insights</p> */}
        {/* <hr></hr>
            <i className="fa fa-bookmark bookmark">My Items</i> */}
      </div>
      <div className="lowerDiv">
        <p id='lowerDiv recent'>Recent</p>
        <h5 className='h5_title' onClick={handleReactjs}>#reactJS</h5>
        <h5 className='h5_title' onClick={handleProgramming}>#programming</h5>
        <h5 className='h5_title' onClick={handleSoftwareEngineering}>#software engineering</h5>
        <h5 className='h5_title' onClick={handleDesign}>#design</h5>
        <h5 className='h5_title' onClick={handleDeveloper}>#developer</h5>
      </div>
    </div>
  );
}

export default LeftSideBar;