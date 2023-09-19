import React, { useState, useContext } from "react";
import {DataAppContext} from './DataApp';
import '../styles/Login.css';
import { useForm } from 'react-hook-form';
import linkedInLogo from "../Images/linkedin-logo.png";
import { Link, useNavigate } from "react-router-dom";
import menAndLap from "../Images/menwithlap.svg";
import Modal from 'react-modal';

const Login = ({ handleLoading }) => {
  

  const initialData = {
      username: '',
      password: '',
  }

  //state object for formdata
  const [loginformdata, setFormdata] = useState(initialData);

  //state variable to check form submission status
  
  const [loginFailed, setLoginFailed] = useState(false);
  const localContext = useContext(DataAppContext);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState(''); // useState to store Email address of the user
  const [password, setPassword] = useState(''); // useState to store Password
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  
  const navigate = useNavigate();
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  /* const onSubmit = (values) => alert(JSON.stringify(values, null, 2)); */

  function validateForm(e) {

    if (!e.username || !e.password) {
      setLoginFailed(true);
      return false;
    }
    return true;
  }

  //method to update each key of state object
  const updateData = (e) => {
      console.log(e.target.id, e.target.value);
      let tempObj = {};
      tempObj[e.target.id] = e.target.value.trim();
      if (e.target.id === 'username') {
        setEmail(e.target.value.trim());
        e.target.focus();
      } else if (e.target.id === 'password') {
        setPassword(e.target.value.trim());
        e.target.focus();
      }
      setFormdata({
          ...loginformdata, ...tempObj
      });
  }

  //methods for form submission button
  const loginFn = async(e) => {
    
        if (validateForm(e)) {
          try {
          const users = JSON.parse(localStorage.getItem("users"));
          /* setLoginFailed(false); */
          if (users) {
            const user = users.find(
              (user) =>
                user.username === e.username && user.password === e.password
            );
            console.log(user,e.username,user.username);
            
    
            if (user) {
              // Set context variable
              const obj = {
                ...localContext.appState,
                loginStatus: true, //true means logged in
                username: user.username,
                name: user.name,
                password: user.password,
              };
              localContext.setAppState(obj);
              setLoginFailed(false);
              console.log("Login successful", obj);
              handleLoading();

              // Navigate to the home page
              navigate("/home");
            } else {
              console.log("Login failed");
              setLoginFailed(true);
            }
          } else {
            console.log("No user data found");
            setLoginFailed(true);
          }
        } catch (error) {
          console.error("An error occurred during login:", error);
          setLoginFailed(true);
        } 
        }
        if (loginFailed) {
          setModalIsOpen(true);
        }
      };
            

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  const joinNow = () =>{
    navigate('/newuser');
  }
  return (
    <div>
      <nav className="navbar">
        <div className="linkHome">
          <Link to="/home" /*  className="linkHome" */>
            <img className="loginLogo" src={linkedInLogo} alt="logo" />
          </Link>
        </div>
        <div className="signin_signout">
          <div className="newuserLink">
            <Link to="/newuser" /* className="newuserLink" */>
              <button className="join">Join Now </button>
            </Link>
          </div>
          <div className="loginLink">
            <Link to="/login" /*  className="loginLink" */ active="true">
              <button className="sign">Sign in </button>
            </Link>
          </div>
        </div>
        
      </nav>

      <div className="divAfterNav">
        <div className="leftSide">
          <p>Welcome to your professional community</p>
          <br></br>

          <form onSubmit={handleSubmit(loginFn)}>
            <label htmlFor="username" className="email">
              Email or phone<font color="red">*</font>
            </label>
            <br></br>
            <input
              type="email"
              id="username"
              className="username-login"
              placeholder="Email"
              /* value={loginformdata.username} */
              onChange={(e) => updateData(e)}
              /*ref={inputRef} */
              {...register("username", {
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              })}
            />
            {errors.username && (
              <p id="validation-email_password">
                Email Address cannot be empty or should match email pattern
              </p>
            )}
            <br></br>
            <label htmlFor="password" className="password">
              Password<font color="red">*</font>
            </label>
            <br></br>

            <input
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder="Password"
              /* value={loginformdata.password} */
              className={`password-login ${showPassword ? "showPassword" : ""}`}
              onChange={(e) => updateData(e)}
              {...register("password", { required: true, minLength: 6 })}
            />
            {errors.password && (
              <p id="validation-email_password">
                Password should be minimum 6 characters
              </p>
            )}
            <br></br>
            <div className="checkShowPassword">
              <input
                type="checkbox"
                checked={showPassword}
                onChange={toggleShowPassword}
              />
              <label htmlFor="showPassword">Show Password</label>
            </div>

            <br></br>

            
            <button type="submit" className="signIn" onClick={loginFn}>
              Sign in
            </button>
          </form>
          
          <Modal isOpen={modalIsOpen} onClose={handleCloseModal} ariaHideApp={false} backdropOpacity={1} className="validation-modal">
            <div className="modalDiv">
              <h1>Login failed</h1>
              <p>Please check your username and password and try again.</p>
              <button onClick={handleCloseModal}>Close</button>
            </div>
          </Modal>

          <div className="line">
            <hr className="firsthr"></hr>
            <div className="orr">or</div>
            <hr className="secondhr"></hr>
          </div>

          <br></br>
          <span>New to Linkedln?</span>
          <button className="newtoLinkedIn" onClick={joinNow}>
            Join now
          </button>
        </div>
        <div className="rightWithImg">
          <img src={menAndLap} alt="pic" />
        </div>
      </div>
    </div>
  );
}

export default Login;