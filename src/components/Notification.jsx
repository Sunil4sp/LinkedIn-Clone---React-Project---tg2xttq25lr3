import React from "react";
import NavBar from "./NavBar";
import "../styles/home.css";
import "../styles/LeftSideBar.css";
import "../styles/App.css";
import "../styles/RightSideBar.css";
import LeftSideBar from "./LeftSideBar";
import RightSideBar from "./RightSideBar";

const Notification = () => {
  return (
    <>
      <NavBar />
      <div className="mainContainer">
        <LeftSideBar />
        <div className="MiddleBar">
          <div className="navbar___div">
            <h3 className="deslist">Notifications</h3>
            <div className="jobs_container">
              <div className="image_container">
                <div>
                  <img
                    className="imagejobs_width"
                    src="https://media.licdn.com/dms/image/D4D0BAQHl2YaMYr-thA/company-logo_100_100/0/1688623900493?e=1699488000&v=beta&t=_5b9fbvcwtpQ0fID_83MCLXhTKYYCX9PZ9eANKMewwE"
                  ></img>
                </div>
                <div className="pad_-left">
                  <p className="para_detail">
                    <span className="para_text">Pranav Malik</span> posted:
                    MADAIgos is hiring please apply
                  </p>
                </div>
              </div>
              <div className="image_container">
                <p className="pad_-leftfg pad_-leftffont">&#8230;</p>
              </div>
            </div>
            <div className="jobs_container">
              <div className="image_container">
                <div>
                  <img
                    className="imagejobs_width"
                    src="https://media.licdn.com/dms/image/D4E0BAQFFLPdR-R9FWA/company-logo_100_100/0/1688389218865?e=1699488000&v=beta&t=z_bgWYFLwAPMsi4O8kDPqaebeHZymZDBSHrJjRdOUKQ"
                  ></img>
                </div>
                <div className="pad_-left">
                  <p className="para_detail">
                    Now hiring:
                    <span className="para_text"> web developer </span>
                    jobs in
                    <span className="para_text"> India </span>
                    for your job alert
                  </p>
                </div>
              </div>
              <div className="image_container">
                <p className="pad_-leftfg pad_-leftffont">&#8230;</p>
              </div>
            </div>
            <div className="jobs_container">
              <div className="image_container">
                <div>
                  <img
                    className="imagejobs_width"
                    src="https://media.licdn.com/dms/image/C4D0BAQHG9-3tQBFNGg/company-logo_100_100/0/1655230767724?e=1699488000&v=beta&t=ly2E74bOWdIsHZh77wnX-ywMLpyP3AkqEvNKgB6JeRg"
                  ></img>
                </div>
                <div className="pad_-left">
                  <p className="para_detail">
                    Now hiring:
                    <span className="para_text"> software engineer </span>
                    jobs in
                    <span className="para_text"> India </span>
                    for your job alert
                  </p>
                </div>
              </div>
              <div className="image_container">
                <p className="pad_-leftfg pad_-leftffont">&#8230;</p>
              </div>
            </div>
            <div className="jobs_container">
              <div className="image_container">
                <div>
                  <img
                    className="imagejobs_width"
                    src="https://media.licdn.com/dms/image/C4D0BAQHu-o4jvxOflw/company-logo_100_100/0/1654059736253?e=1699488000&v=beta&t=m9LRXv8vxdvdjCiA-dRfIx4Q5Oqq3gLqfdmc-5FIi-c"
                  ></img>
                </div>
                <div className="pad_-left">
                  <p className="para_detail">
                    Now hiring:
                    <span className="para_text"> full stack engineer </span>
                    jobs in
                    <span className="para_text"> India </span>
                    for your job alert
                  </p>
                </div>
              </div>
              <div className="image_container">
                <p className="pad_-leftfg pad_-leftffont">&#8230;</p>
              </div>
            </div>
            <div className="jobs_container">
              <div className="image_container">
                <div>
                  <img
                    className="imagejobs_width"
                    src="https://media.licdn.com/dms/image/D4D0BAQHboyesc4EbaQ/company-logo_100_100/0/1686777665914?e=1699488000&v=beta&t=F3UQNaE2TuBoySye67__vFnaOM5_l7eCwWgYj7uciU0"
                  ></img>
                </div>
                <div className="pad_-left">
                  <p className="para_detail">
                    You appeared in
                    <span className="para_text"> 14 search </span> in this week.
                  </p>
                </div>
              </div>
              <div className="image_container">
                <p className="pad_-leftfg pad_-leftffont">&#8230;</p>
              </div>
            </div>
            <div className="jobs_container">
              <div className="image_container">
                <div>
                  <img
                    className="imagejobs_width"
                    src="https://media.licdn.com/dms/image/D5603AQHNPtIYBJA4BA/profile-displayphoto-shrink_800_800/0/1685570698083?e=1699488000&v=beta&t=IPc-3K0_uul_Eby0JnIANcjwVr8p5ilEDqZKXiPKHwY"
                  ></img>
                </div>
                <div className="pad_-left">
                  <p className="para_detail">
                    You may know
                    <span className="para_text"> Anand Dewangan, </span> Add to
                    your network.
                  </p>
                </div>
              </div>
              <div className="image_container">
                <p className="pad_-leftfg pad_-leftffont">&#8230;</p>
              </div>
            </div>
          </div>
        </div>
        <RightSideBar />
      </div>
    </>
  );
};

export default Notification;
