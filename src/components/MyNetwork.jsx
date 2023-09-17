import React, { useContext/* , useState */ } from "react";
import "../styles/MyNetwork.css";

/* import { useNavigate } from "react-router-dom"; */
import { DataAppContext } from "./DataApp";
import NavBar from "./NavBar";
/* import LeftSideBar from "./LeftSideBar";
import RightSideBar from "./RightSideBar"; */


const MyNetwork = () => {

  const localContext = useContext(DataAppContext);
  const { appState } = localContext;
  const { loginStatus } = appState;

  const name = appState.name;
  console.log(name);

  return (
    <div className="main">
      <>
        {" "}
        <NavBar />
        <div className="span-center-Message">
          <span className='page_under_construction'>My Network Page under construction</span>
        </div>
        
        {/* <div className="mainContainer">
          <LeftSideBar />
          <div className="MiddleBar">
            <div className="NetworkShare">
              <h3>My Network</h3>
              <h5>Invitation</h5>
              <div className="user"></div>
              <button>Add Post</button>
              <br></br>
              
            </div>
            <hr></hr>
            
          </div>
          <RightSideBar />
        </div> */}
      </>
    </div>
  )
}

export default MyNetwork;