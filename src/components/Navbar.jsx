import React from 'react';
import { Avatar } from '@mui/material';
import '../CSS/leftside.css';

const LeftSideBar = () => {
  return (
    <div className='sidebar'>
        
        <div className='sidebar__profile'>
            <img src='https://img.freepik.com/free-vector/realistic-polygonal-background_23-2148899085.jpg' alt='profile-pic'></img>
            <div className='profile__details'>
                <Avatar></Avatar>
                <h4>Sunil Kumar Pal</h4>
                <p>Web Developer</p>
            </div>
            <div className='profile__stats'>
                <span>Profile</span>
                <span className='stat__number'>20</span>
            </div>
            <div className='profile__stats'>
                <span>Connection<br></br><b>Grow your network</b></span>
                <span className='stat__number'>150</span>
            </div>
        </div>
        <div className='sidebar__recent'>
                <p>Recent</p>
                <p className='hash'><span>#</span> branding</p>
                <p className='hash'><span>#</span> marketing</p>
                <p className='hash'><span>#</span> web development</p>
                <p className='hash'><span>#</span> programming</p>
                <p className='hash'><span>#</span> react.js</p>
                <p className='hash'><span>#</span> javascript</p>
            </div>
    </div>
  )
}

export default LeftSideBar;