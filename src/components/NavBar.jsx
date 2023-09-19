import React, { useContext, useState } from 'react';
import smallLogo from '../Images/smallLogo.png'
import '../styles/home.css';
import '../styles/Login.css';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { DataAppContext } from "./DataApp";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@mui/material/TextField";
import data from "../mock_backend/ListData.json";
import Modal from 'react-modal';

const NavBar = () => {
    const localContext = useContext(DataAppContext);
    const { appState, setAppState } = localContext;

    const name = appState.name;
    console.log(name);

    const navigate = useNavigate();

    const logoutFn = () => {
        
        
        //display the user's name in a logout message
        /* alert(`Logout successful. Goodbye ${name}!`); */

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

    let inputHandler = (e) => {
    //convert input text to lower case
    /* var lowerCase = e.target.value.toLowerCase(); */
    const lowerCase = (e.target.value || '').toLowerCase();
    setInputText(lowerCase);

    // Calculate filteredTexts based on inputText
    const filteredTexts = data
      .filter((item) => item.text.toLowerCase().includes(lowerCase))
      .map((item) => item.text);

    // Update the options
    setOptionTexts(filteredTexts);
    };

  const handleCloseModal = () => {
    setModalIsOpen(false);
    /* navigate("/login"); */
    logoutFn();
  };
      
  return (
    
    <nav className='navStart'>
        {/* <Link to="/home"> */}<img className='smallLogo' src={smallLogo} alt='small-logo'/>{/* </Link> */}
        <Autocomplete
        id='autocomplete'
        style={{width: '20%'}}
        freeSolo
        autoComplete
        autoHighlight
        options={optionTexts}
        value={inputText}
        inputValue={inputText}
        defaultValue={[]}
        getOptionLabel={(option) => option}
        onChange={(e, newValue) => setInputText(newValue)}
        renderInput={(params) => (
          <>
          <TextField
          id='text-field'
              onChange={inputHandler}
              placeholder="Search"
              {...params}
            />
          </>
        )}
      />

        <div className="rightSection">
        <div className="home">
          <Link to="/home" className='homeLink'>
            <i className="fa fa-home faIcons"></i>
            <p className='homeIcon'>Home</p>
          </Link>
        </div>
        <div className="network">
          <Link to="/MyNetwork" className='netLink'>
            <i className="fa fa-users faIcons"></i>
            <p className='networkIcon'>My Network</p>
          </Link>
        </div>
        <div className="jobs">
          <Link to="/myjob" className='jobLink'>
            <i className="fa fa-briefcase faIcons"></i>
            <p className='jobsIcon'>Jobs</p>
          </Link>
        </div>
        <div className="message">
          <Link to="/messaging" className='msgLink'>
            <i className="fa fa-commenting-o faIcons"></i>
            <p className='msgIcon'>Messaging</p>
          </Link>
        </div>
        <div className="notification">
          <Link to="/notification" className='notifyLink'>
            <i className="fa fa-bell-o faIcons" ></i>
            <p className='notificationsIcon'>Notifications</p>
          </Link>
        </div>
        <div className="signout">
          <Link onClick={() => {setModalIsOpen(true)}}  /*to='/login' */ className='signoutLink'>
            <i className="fa fa-user-circle-o faIcons"></i>
            <p className='meIcon' onClick={() => {setModalIsOpen(true)}}>Me</p>
          </Link>
          <Modal isOpen={modalIsOpen} onClose={handleCloseModal} ariaHideApp={false} backdropOpacity={1} className="validation-modal">
            <div className="modalDiv">
              <h1>Logout Successful</h1>
              <p>Goodbye {name} !</p>
              <button onClick={handleCloseModal}>Close</button>
            </div>
          </Modal>
        </div>
      </div> 
      </nav>
      
  )
}

export default NavBar;