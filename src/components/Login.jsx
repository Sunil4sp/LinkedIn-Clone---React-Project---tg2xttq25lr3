import React, { useState, useEffect, useContext, useRef } from "react";
import {DataAppContext} from './DataApp';
import '../styles/home.css';
import '../styles/App.css';

import linkedInLogo from "../Images/linkedin-logo.png";
import { Link, useNavigate } from "react-router-dom";
import menAndLap from "../Images/menwithlap.svg";

const Login = () => {
  
  const initialData = {
      username: '',
      password: '',
  }

  //state object for formdata
  const [loginformdata, setFormdata] = useState(initialData);

  //state variable to check form submission status
  const [loginstatus, setStatus] = useState(false);

  const [loginApiFailStatus, setLoginApiFailStatus] = useState(false);


  const localContext = useContext(DataAppContext);
  const navigate = useNavigate();

  /* const [email, setEmail] = useState('');
  const [password, setPassword] = useState(''); */

  /* const passwordInputRef = useRef(null); */
  const [showPassword, setShowPassword] = useState(false);
  /* const [isSubmitted, setIsSubmitted] = useState(false); */

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

/*   const handleInput = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default: 
    }
  }; */
  //method to update each key of state object
  const updateData = (e) => {
      console.log(e.target.id, e.target.value);
      let tempObj = {};
      tempObj[e.target.id] = e.target.value.trim();
      setFormdata({
          ...loginformdata, ...tempObj
      });
      /* handleInput(); */
  }

  //methods for form submission button
  const loginFn = () => {
          
          let temp = JSON.parse(localStorage.getItem('users'));

          if(temp) {
              for(let i=0 ; i<temp.length ; i++) {
                  console.log(temp[i].username, loginformdata.username);
                  if(temp[i].username === loginformdata.username) {
                      console.log('Inside first if - ', i)
                      if(temp[i].password === loginformdata.password) {
                          console.log('Inside 2nd if - ', i)
                          setStatus(true);
                          //set context varibale
                          let obj = {
                              ...localContext.appState,
                              loginStatus: true, //true means logged in
                              username: loginformdata.username,
                              name: temp[i].name,
                          };
                          localContext.setAppState(obj)
                          //navigate page to home
                          navigate('/home')
                      }
                      else {
                          setLoginApiFailStatus(true);
                      }
                  }
                  else {
                      setLoginApiFailStatus(true);
                  }
              }
          }
          else {
              setLoginApiFailStatus(true);
          }
          setFormdata(initialData);
  }
    
  
  useEffect(() => {
      let temp = localStorage.getItem('users');
      console.log(JSON.parse(temp));
      
  }, [loginstatus])

 
  return (
    <div>
      <nav className="navbar">
        <img className="loginLogo" src={linkedInLogo} alt="logo" />
        <button className="sign"><Link to='/login' active>Sign in</Link>{" "}</button>
        <button className="join"><Link to='/newuser'>Join Now</Link>{" "}</button>
        {/* <i className="fa fa-cc-discover discover">
          <p>Discover</p>
        </i>
        <i className="fa fa-users discover ">
          <p>People</p>
        </i>
        <i className="fa fa-youtube-play discover">
          <p>Learning</p>
        </i>
        <i className="fa fa-briefcase discover">
          <p>Jobs</p>
        </i> */}
      </nav>

      <div className="divAfterNav">
        <div className="leftSide">
          <p>Welcome to your professional community</p>
          <br></br>
          <label htmlFor="Name">Email or phone</label>
          <br></br>
          <input
            type="email"
            id="username"
            placeholder="Email"
            value={loginformdata.username}
            onChange={(e)=>updateData(e)}
          />
          <br></br>
          <label htmlFor="Name">Password</label>
          <br></br>
          <input
            type={showPassword ? 'text' : 'password'}
            id="password"
            placeholder="Password"
            value={loginformdata.password}
            style={{ height: showPassword && '50px', width: '62%', margin: '10px 0px 20px 50px'}}
            onChange={(e)=>updateData(e)}
          />
          <br></br>
          <label htmlFor="showPassword">Show Password</label>
          <input
            type= "checkbox"
            checked={showPassword} 
            onChange={toggleShowPassword}
          />
          
          <br></br>

          {/* <br></br> */}
          {/* <Link className="forPass">
            Forgot password?
          </Link> */}

          <br></br>
          <button className="signIn" onClick={loginFn}>
            Sign in
          </button>
          {loginstatus && <div className="alert alert-success" role="alert">
                <h2>Successfully Logged In</h2>
                </div>
            }

            {loginApiFailStatus &&  <div className="alert alert-danger" role="alert">         
              {alert("Login Failed !")}
              </div>
            }

            
            

          <hr className="firsthr"></hr>
          <div className="orr">or</div>
          <hr className="secondhr"></hr>
          <br></br>
          <button className="newtoLinkedIn">
            New to Linkedln?<Link to="/newuser">Join now</Link>{" "}
          </button>
        </div>
        <div className="rightWithImg">
          <img src={menAndLap} alt="pic"/>
        </div>
      </div>
    </div>
  );
}

export default Login;
