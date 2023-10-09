import React from 'react';
import NavBar from './NavBar';
import '../styles/home.css';
import '../styles/LeftSideBar.css';
import "../styles/App.css";
import '../styles/RightSideBar.css';
import LeftSideBar from "./LeftSideBar";
import RightSideBar from "./RightSideBar";

const Messaging = () => {
  return (

    <>
        <NavBar />
        <div className="mainContainer">
          <LeftSideBar />
        <div className="MiddleBar">
        <div className="navbar___div">
        <h3 className="deslist">Message</h3>
                    <div className="jobs_container">
                      <div className="image_container">
                        <div>
                          <img
                            className="imagejobs_width"
                            src="https://media.licdn.com/dms/image/D4D03AQFMeowfxp8BtQ/profile-displayphoto-shrink_800_800/0/1695227536012?e=1702512000&v=beta&t=EmM51-vNXRvZdz--ufkzPylep8dFPoAEpxiav1-jcGs"
                          ></img>
                        </div>
                        <div className="pad_-left">
                          <p className="para_head_black">Amit Kumar</p>
                          <p className="para_detail">Welcome dear</p>
                        </div>
                      </div>
                      <div className="image_container">
                        <p className="pad_-leftfg">Aug 16, 2022</p>
                      </div>
                    </div>
                    <div className="jobs_container">
                      <div className="image_container">
                        <div>
                          <img
                            className="imagejobs_width"
                            src="https://media.licdn.com/dms/image/D4D35AQGTxKuIgKak-Q/profile-framedphoto-shrink_400_400/0/1685966297258?e=1697392800&v=beta&t=UBzRFYIWRS0fj7QG5r8l5DKgmEcl4ysO-D7hS8K62hI"
                          ></img>
                        </div>
                        <div className="pad_-left">
                          <p className="para_head_black">Lalit Sharma</p>
                          <p className="para_detail">
                            DevOps Engineer
                          </p>
                        </div>
                      </div>
                      <div className="image_container">
                        <p className="pad_-leftfg">Aug 02, 2022</p>
                      </div>
                    </div>
                    <div className="jobs_container">
                      <div className="image_container">
                        <div>
                          <img
                            className="imagejobs_width"
                            src="https://media.licdn.com/dms/image/D5603AQHcFQdNIIgFbA/profile-displayphoto-shrink_800_800/0/1677488732969?e=1699488000&v=beta&t=3LumdSxc2eQG8b2TQkRUMO69qu9S-DDxw7ZZQPCle0k"
                          ></img>
                        </div>
                        <div className="pad_-left">
                          <p className="para_head_black">Sanju Sharma</p>
                          <p className="para_detail">thank you</p>
                        </div>
                      </div>
                      <div className="image_container">
                        <p className="pad_-leftfg">July 28, 2022</p>
                      </div>
                    </div>
                    <div className="jobs_container">
                      <div className="image_container">
                        <div>
                          <img
                            className="imagejobs_width"
                            src="https://media.licdn.com/dms/image/C4D03AQHv_7i-BmRdaA/profile-displayphoto-shrink_400_400/0/1653415788729?e=1702512000&v=beta&t=JUQP96r6Qv-ffp26n2OMqkhl9sE3Bz0PDKn6BMLJuXA"
                          ></img>
                        </div>
                        <div className="pad_-left">
                          <p className="para_head_black">Narendra Sharma</p>
                          <p className="para_detail">fine Yaar</p>
                        </div>
                      </div>
                      <div className="image_container">
                        <p className="pad_-leftfg">July 16, 2022</p>
                      </div>
                    </div>
                    <div className="jobs_container">
                      <div className="image_container">
                        <div>
                          <img
                            className="imagejobs_width"
                            src="https://media.licdn.com/dms/image/D4D03AQEDRviez5wqrw/profile-displayphoto-shrink_800_800/0/1672466942832?e=1702512000&v=beta&t=B72Je7jeI2js9-MuU8Rp0AXWmWTIx5aruRSzS2c4pUU"
                          ></img>
                        </div>
                        <div className="pad_-left">
                          <p className="para_head_black">Ujjwal Paul</p>
                          <p className="para_detail">Thank a lot</p>
                        </div>
                      </div>
                      <div className="image_container">
                        <p className="pad_-leftfg">May 16, 2022</p>
                      </div>
                    </div>
                    <div className="jobs_container">
                      <div className="image_container">
                        <div>
                          <img
                            className="imagejobs_width"
                            src="https://media.licdn.com/dms/image/C4D03AQHK23D36WW5NQ/profile-displayphoto-shrink_800_800/0/1638554805324?e=1702512000&v=beta&t=rcNdjqTEHHJmK9g91MZ6rGLSfR_fwhKRZrkjeHCaj_0"
                          ></img>
                        </div>
                        <div className="pad_-left">
                          <p className="para_head_black">Praneet Rastogi</p>
                          <p className="para_detail">okk</p>
                        </div>
                      </div>
                      <div className="image_container">
                        <p className="pad_-leftfg">Feb 10, 2022</p>
                      </div>
                    </div>
        </div>
        </div>
          <RightSideBar />
        </div>
    </>
  )
}

export default Messaging;