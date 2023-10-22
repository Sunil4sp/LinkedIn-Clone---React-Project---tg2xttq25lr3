import React, { useState, useEffect } from "react";
import smallLogo from "../Images/smallLogo.png";
import "../styles/home.css";
import "../styles/Login.css";
import { Link } from "react-router-dom";
import SearchBar from "./Search";
import DropDownLogout from "./DropDownLogout";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

const NavBar = () => {
  const [isSearchBarVisible, setIsSearchBarVisible] = useState(false);
  const [isSearchBarExpanded, setIsSearchBarExpanded] = useState(false);

  useEffect(() => {
    function handleResize() {
      //handle size of search bar
      const screenWidth = window.innerWidth;
      if (screenWidth <= 1024) {
        setIsSearchBarVisible(false);
        setIsSearchBarExpanded(false);
      } else {
        setIsSearchBarVisible(true);
        setIsSearchBarExpanded(true);
      }
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleSearchBar = () => {
    setIsSearchBarVisible(!isSearchBarVisible);
    setIsSearchBarExpanded(!isSearchBarExpanded);
  };

  return (
    <div className="global-nav-bar">
      <div className="navStart">
        <div className="navStart_logo">
          <Link to="/home" className="navLogo">
            <img className="smallLogo" src={smallLogo} alt="small-logo" />
          </Link>
        </div>
        <div className="main-search-div" style={{ position: "relative" }}>
          {isSearchBarVisible ? (
            <SearchBar /> // Include the SearchBar component only on the home page
          ) : (
            <div>
              {!isSearchBarExpanded ? (
                <SearchOutlinedIcon
                  onClick={toggleSearchBar}
                  style={{ cursor: "pointer" }}
                />
              ) : (
                ""
              )}
            </div>
          )}
        </div>
        <div className="rightSection">
          <div className="home">
            <Link to="/home" className="homeLink">
              {/* <i className="fa fa-home faIcons"></i> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                data-supported-dps="24x24"
                fill="currentColor"
                className="mercado-match"
                width="24"
                height="24"
                focusable="false"
              >
                <path d="M23 9v2h-2v7a3 3 0 01-3 3h-4v-6h-4v6H6a3 3 0 01-3-3v-7H1V9l11-7 5 3.18V2h3v5.09z"></path>
              </svg>
              <p className="homeIcon">Home</p>
            </Link>
          </div>
          <div className="network">
            <Link to="/MyNetwork" className="netLink">
              {/* <i className="fa fa-users faIcons"></i> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                data-supported-dps="24x24"
                fill="currentColor"
                className="mercado-match"
                width="24"
                height="24"
                focusable="false"
              >
                <path d="M12 16v6H3v-6a3 3 0 013-3h3a3 3 0 013 3zm5.5-3A3.5 3.5 0 1014 9.5a3.5 3.5 0 003.5 3.5zm1 2h-2a2.5 2.5 0 00-2.5 2.5V22h7v-4.5a2.5 2.5 0 00-2.5-2.5zM7.5 2A4.5 4.5 0 1012 6.5 4.49 4.49 0 007.5 2z"></path>
              </svg>
              <p className="networkIcon">My Network</p>
            </Link>
          </div>
          <div className="jobs">
            <Link to="/myjob" className="jobLink">
              {/* <i className="fa fa-briefcase faIcons"></i> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                data-supported-dps="24x24"
                fill="currentColor"
                className="mercado-match"
                width="24"
                height="24"
                focusable="false"
              >
                <path d="M22.84 10.22L21 6h-3.95V5a3 3 0 00-3-3h-4a3 3 0 00-3 3v1H2l2.22 5.18A3 3 0 007 13h14a2 2 0 001.84-2.78zM15.05 6h-6V5a1 1 0 011-1h4a1 1 0 011 1zM7 14h15v3a3 3 0 01-3 3H5a3 3 0 01-3-3V8.54l1.3 3A4 4 0 007 14z"></path>
              </svg>
              <p className="jobsIcon">Jobs</p>
            </Link>
          </div>
          <div className="message">
            <Link to="/messaging" className="msgLink">
              {/* <i className="fa fa-commenting-o faIcons"></i> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                data-supported-dps="24x24"
                fill="currentColor"
                className="mercado-match"
                width="24"
                height="24"
                focusable="false"
              >
                <path d="M16 4H8a7 7 0 000 14h4v4l8.16-5.39A6.78 6.78 0 0023 11a7 7 0 00-7-7zm-8 8.25A1.25 1.25 0 119.25 11 1.25 1.25 0 018 12.25zm4 0A1.25 1.25 0 1113.25 11 1.25 1.25 0 0112 12.25zm4 0A1.25 1.25 0 1117.25 11 1.25 1.25 0 0116 12.25z"></path>
              </svg>
              <p className="msgIcon">Messaging</p>
            </Link>
          </div>
          <div className="notification">
            <Link to="/notification" className="notifyLink">
              {/* <i className="fa fa-bell-o faIcons"></i> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                data-supported-dps="24x24"
                fill="currentColor"
                className="mercado-match"
                width="24"
                height="24"
                focusable="false"
              >
                <path d="M22 19h-8.28a2 2 0 11-3.44 0H2v-1a4.52 4.52 0 011.17-2.83l1-1.17h15.7l1 1.17A4.42 4.42 0 0122 18zM18.21 7.44A6.27 6.27 0 0012 2a6.27 6.27 0 00-6.21 5.44L5 13h14z"></path>
              </svg>
              <p className="notificationsIcon">Notifications</p>
            </Link>
          </div>
          <div>
            <DropDownLogout />
          </div>
          <div className="business">
            <Link to="/forBusiness" className="notifyLinkBusiness">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                data-supported-dps="24x24"
                fill="currentColor"
                className="mercado-match"
                width="24"
                height="24"
                focusable="false"
              >
                <path d="M3 3h4v4H3zm7 4h4V3h-4zm7-4v4h4V3zM3 14h4v-4H3zm7 0h4v-4h-4zm7 0h4v-4h-4zM3 21h4v-4H3zm7 0h4v-4h-4zm7 0h4v-4h-4z"></path>
              </svg>
              <p className="notificationsIcon">For Business</p>
            </Link>
          </div>
          <div class="premium-upsell-link">
            <a
              href="https://www.linkedin.com/premium/products/?family=LEARNING&amp;upsellOrderOrigin=premium_nav_upsell_text&amp;intentType=DEVELOP_SKILLS&amp;utype=learning&amp;referenceId=gAzIVIVbTdqvO1BOBo486g%3D%3D&amp;destRedirectURL=https%3A%2F%2Fwww.linkedin.com%2Ffeed%2F"
              class="link-without-visited_link"
            >
              <ul className="premium-upsell-link-ul">
                <li>Learn New Skills,</li>
                <li>Try Premium Free</li>
              </ul>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NavBar;
