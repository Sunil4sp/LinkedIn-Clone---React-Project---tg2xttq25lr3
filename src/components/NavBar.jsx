import React, { useState, useEffect } from 'react';
import smallLogo from '../Images/smallLogo.png'
import '../styles/home.css';
import '../styles/Login.css';
import { Link } from 'react-router-dom';
import SearchBar from './Search';
import DropDownLogout from './DropDownLogout';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const NavBar = () => {

    const [isSearchBarVisible, setIsSearchBarVisible] = useState(false);
    const [isSearchBarExpanded, setIsSearchBarExpanded] = useState(false);
    
  useEffect(() => {

    function handleResize() {   //handle size of search bar
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

  /* useEffect(() => {

    function handleClickOutside(event) {
        if (
          searchBarRef.current &&
          !searchBarRef.current.contains(event.target) &&
          isSearchBarVisible &&
          isSearchBarExpanded
        ){ 
          // Clicked outside the search bar, hide it and close the Autocomplete dropdown.
          setIsSearchBarExpanded(false);
          }
      };

    if (isSearchBarVisible && isSearchBarExpanded) {
      document.addEventListener('click', handleClickOutside);
    } else {
      document.removeEventListener('click', handleClickOutside);;
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isSearchBarVisible, isSearchBarExpanded]);  */

  return (
    <>
      <nav className="navStart">
        <Link to="/home" className="navLogo">
          <img className="smallLogo" src={smallLogo} alt="small-logo" />
        </Link>
          <div className='main-search-div' style={{ position: "relative" }}>
          
            {isSearchBarVisible ? (
          <SearchBar /> // Include the SearchBar component only on the home page
          ) : (
            <div>
              {!isSearchBarExpanded ? (
              <SearchOutlinedIcon
                onClick={toggleSearchBar}
                style={{ cursor: "pointer" }}
              />
              ) : ('')}
            </div>
          )}
        </div>
        <div className="rightSection">
          <div className="home">
            <Link to="/home" className="homeLink">
              <i className="fa fa-home faIcons"></i>
              <p className="homeIcon">Home</p>
            </Link>
          </div>
          <div className="network">
            <Link to="/MyNetwork" className="netLink">
              <i className="fa fa-users faIcons"></i>
              <p className="networkIcon">My Network</p>
            </Link>
          </div>
          <div className="jobs">
            <Link to="/myjob" className="jobLink">
              <i className="fa fa-briefcase faIcons"></i>
              <p className="jobsIcon">Jobs</p>
            </Link>
          </div>
          <div className="message">
            <Link to="/messaging" className="msgLink">
              <i className="fa fa-commenting-o faIcons"></i>
              <p className="msgIcon">Messaging</p>
            </Link>
          </div>
          <div className="notification">
            <Link to="/notification" className="notifyLink">
              <i className="fa fa-bell-o faIcons"></i>
              <p className="notificationsIcon">Notifications</p>
            </Link>
          </div>
          <div>
                <DropDownLogout />
          </div>
        </div>
      </nav>
    </>
  );
};
export default NavBar;