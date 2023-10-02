import React, { useContext, useState, useEffect, useRef } from 'react';
import smallLogo from '../Images/smallLogo.png'
import '../styles/home.css';
import '../styles/Login.css';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { DataAppContext } from "./DataApp";
/* import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@mui/material/TextField"; */
import data from "../mock_backend/ListData.json";
import Modal from 'react-modal';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const NavBar = () => {
    const localContext = useContext(DataAppContext);
    const { appState, setAppState } = localContext;

    const name = appState.name;

    const navigate = useNavigate();

    const logoutFn = () => {
        
        navigate("/login");
        //update context variable
        setAppState({   //get the name variable from the appState object
          ...appState,
          loginStatus: false,
          username: "",
          name:''
        });
      };  
    
    const [inputText, setInputText] = useState("");
    const [optionTexts, setOptionTexts] = useState([]);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [isSearchBarVisible, setIsSearchBarVisible] = useState(false);
    const [isSearchBarExpanded, setIsSearchBarExpanded] = useState(false);
    const searchBarRef = useRef(null);
    /* const [selectedOption, setSelectedOption] = useState(null); */

    useEffect(() => {
      // Fetch data from ListData.json
      fetch('/mock_backend/ListData.json') // Replace with the actual path to your JSON file
        .then((response) => response.json())
        .then((data) => {
          // Extract the text property from the JSON data and set it as optionTexts
          const textArray = data.map((item) => item.text);
          setOptionTexts(textArray);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    }, []);

    let inputHandler = (e) => {
    //convert input text to lower case
    const lowerCase = (e.target.value || '').toLowerCase();
    setInputText(lowerCase);
    
    // Calculate filteredTexts based on inputText
    /* const filteredTexts = data
      .filter((item) => item.text.toLowerCase().includes(lowerCase))
      .map((item) => item.text);

    // Update the options
    setOptionTexts(filteredTexts); */
    };

    const handleOptionSelect = /* (event, newValue) */ (selectedOption) => {
      /*setSelectedOption(newValue); */
      setInputText(selectedOption);
      setIsSearchBarExpanded(true);
    };

    const handleCloseModal = () => {
      setModalIsOpen(false);
      logoutFn();
    };
    

  useEffect(() => {

    function handleResize() {   //handle size of search bar
      const screenWidth = window.innerWidth;
      if (screenWidth <= 1024) {
        setIsSearchBarVisible(false);
        setIsSearchBarExpanded(false);
      } else {
        /* setIsSearchBarExpanded(true); */
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

  useEffect(() => {

    function handleClickOutside(event) {
        if (
          searchBarRef.current &&
          !searchBarRef.current.contains(event.target) &&
          isSearchBarVisible &&
          isSearchBarExpanded
        ){ 
          // Clicked outside the search bar, hide it and close the Autocomplete dropdown.
          setIsSearchBarExpanded(false);
          /* setIsSearchBarVisible(false); 
          console.log(isSearchBarVisible,isSearchBarExpanded);*/
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
  }, [isSearchBarVisible, isSearchBarExpanded]);

  return (
    <>
      <nav className="navStart">
        <Link to="/home" className="navLogo">
          <img className="smallLogo" src={smallLogo} alt="small-logo" />
        </Link>
        <div className='main-search-div' style={{ position: "relative" }}>
          {isSearchBarVisible ? (
            <div
              className={`search${!isSearchBarExpanded ? '-icon' : '-expanded'}`}
              ref={searchBarRef}
            > 
              {/* <Autocomplete
                name="autocomplete"
                id="autocomplete" 
                autoComplete
                autoHighlight
                options= {optionTexts}
                value={selectedOption}     
                onChange={handleOptionSelect}
                 renderInput={(params) => (
                  <>
                    <TextField
                      id="text-field"
                      onChange={inputHandler}
                      placeholder="Search"
                       {...params}
                    />
                  </>
                  )}
                    /> */}
                    {/* <form onSubmit={handleOptionSelect}> */}
                    <input 
                    type="search" 
                    name="autcomplete" 
                    id="text-field" 
                    autoComplete='off'
                    value={inputText}
                    placeholder='Search'      
                    onChange={inputHandler}
                   />
                    
                    {inputText && (
                    <div className="search-options" /* style={{ position: 'absolute', zIndex: 1, top: '33px' } */>
                      {data
                        .filter((item) => item.text.toLowerCase().includes(inputText))
                        .map((item, index) => (
                          <div
                            key={index}
                            className="search-option"
                            onClick={() => handleOptionSelect(item.text)}
                          >
                            {item.text}
                          </div>
                        ))}
                        </div>
                      )}
            </div>
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
          <div className="signout">
            <Link
              onClick={() => {
                setModalIsOpen(true);
              }}
              /*to='/login' */ className="signoutLink"
            >
              <i className="fa fa-user-circle-o faIcons"></i>
              <p
                className="meIcon"
                onClick={() => {
                  setModalIsOpen(true);
                }}
              >
                Me
              </p>
            </Link>
            <Modal
              isOpen={modalIsOpen}
              onClose={handleCloseModal}
              ariaHideApp={false}
              backdropOpacity={1}
              className="validation-modal"
            >
              <div className="modalDiv">
                <h1>Logout Successful</h1>
                <p className='modal_close'>Goodbye {name} !</p>
                <button onClick={handleCloseModal}>Close</button>
              </div>
            </Modal>
          </div>
        </div>
      </nav>
    </>
  );
 
}

export default NavBar;