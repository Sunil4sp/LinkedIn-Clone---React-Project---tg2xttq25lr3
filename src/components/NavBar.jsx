import React, { useContext } from 'react';
import smallLogo from '../Images/smallLogo.png'
import '../styles/home.css';
import '../styles/App.css';
import { Link } from 'react-router-dom';
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router-dom";
import { DataAppContext } from "./DataApp";

const NavBar = () => {
    const localContext = useContext(DataAppContext);
    const { appState, setAppState } = localContext;
    const { username, loginStatus } = appState;

/*     const [input, setInput] = useState();
    const [post, setPost] = useState([]);
    const [like, setLike] = useState(0);
    const [clicked, setClicked] = useState(false); */
    
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
  
  return (
    /* <div className="main"> */
    <nav className='navStart'>
        <img className='smallLogo' src={smallLogo} alt='small-logo'/>
        <input className='input1' type="search" placeholder='Search ' />
        <Link to="/home"><i className="fa fa-home faIcons"><p className='homeIcon'>Home</p></i></Link>
        <Link to="/MyNetwork"><i className="fa fa-users faIcons"><p className='networkIcon'>My Network</p></i></Link>
        <Link to="/myjob"><i className="fa fa-briefcase faIcons" ><p className='jobsIcon'>Jobs</p></i></Link>
        <Link to="/messaging"><i className="fa fa-commenting-o faIcons" ><p className='msgIcon'>Messaging</p></i></Link>
        {/* <i className="fa fa-bell-o faIcons" ><p className='notificationsIcon'>Notifications</p></i> */}
        <i className="fa fa-user-circle-o faIcons" ><p className='meIcon'>
          <Navbar variant="light">
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
      </Navbar></p></i>
      </nav>
      /* </div> */
  )
}

export default NavBar;