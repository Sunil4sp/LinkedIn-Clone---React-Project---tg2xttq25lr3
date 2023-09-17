import React, { useContext, useState } from 'react';
import smallLogo from '../Images/smallLogo.png'
import '../styles/home.css';
import '../styles/Login.css';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { DataAppContext } from "./DataApp";
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@mui/material/TextField";
/* import List from "./List"; */
import data from "../mock_backend/ListData.json";

const NavBar = () => {
    const localContext = useContext(DataAppContext);
    const { appState, setAppState } = localContext;

    const name = appState.name;
    console.log(name);

    const navigate = useNavigate();

    const logoutFn = () => {
        //update context variable
        navigate("/login");
        //get the name variable from the appState object
        //display the user's name in a logout message
        alert(`Logout successful. Goodbye ${name}!`);
        setAppState({
          ...appState,
          loginStatus: false,
          username: "",
          name:''
        });
      };

    const [inputText, setInputText] = useState("");
    /* const optionTexts = data.map((item) => item.text); */

    let inputHandler = (e) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
    };

  // Calculate filteredData based on inputText
  /* const filteredData = data.filter((item) => {
    if (inputText === '') {
      return null; // Return all items if inputText is empty
    } else {
      return item.text.toLowerCase().includes(inputText);
    }
  }); */

  const optionTexts = data.reduce((result, item) => {
    if (inputText === '' || item.text.toLowerCase().includes(inputText)) {
      result.push(item.text); // Map: Extract text property
    }
    return result; // Filter: Keep or exclude items based on condition
  }, []);
      
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
        onChange={(e, newValue) => setInputText(newValue)}
        renderInput={(params) => (
          <>
          <TextField
          id='text-field'
              /* id="outlined-basic" */
              /* variant="outlined" */
              onChange={inputHandler}
              placeholder="Search"
              {...params}
            />
            {/* <List input={inputText} data={filteredData} /> */} </>
        )}
      />
      
        {/* <button>
        <i className="fa fa-search"></i>
        </button> */}
        {/* <input className='input1' type="search"  placeholder='Search' onChange={inputHandler} /> */}
        {/*<div className="searchbox">
        <div className="search">
           <TextField
            id="outlined-basic"
            onChange={inputHandler}
            variant="outlined"
            fullWidth
            label="Search"
          />
        </div
       </div> */}

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
          <Link onClick={logoutFn} to='/login' className='signoutLink'>
            <i className="fa fa-user-circle-o faIcons"></i>
            <p className='meIcon'>Me</p>
          </Link>
        </div>
          {/* <Navbar variant="light">
          <Container>
          <Nav className="me-auto">
            {loginStatus ? (
              <>
                <Nav.Link onClick={logoutFn}><i className="fa fa-sign-out" aria-hidden="true">Logout </i></Nav.Link>&ensp;&ensp;&ensp;
                {loginStatus && <Nav.Link className='user-name'> Hi {name} !</Nav.Link>}
              </>
            ) : (
              <>
                <Nav.Link>
                  <Link to="/login"><i className="fa fa-sign-in" aria-hidden="true"><p className='meIcon'>Login</p></i></Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/newuser"><i className="fa fa-user-plus" aria-hidden="true"><p className='meIcon'>Register</p></i></Link>
                </Nav.Link>
              </>
            )}
          </Nav>
        </Container>
      </Navbar> */}
      </div> 
      </nav>
      
  )
}

export default NavBar;