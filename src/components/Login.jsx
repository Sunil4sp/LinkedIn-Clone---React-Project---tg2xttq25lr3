import React, { useState, useContext } from "react";
import {DataAppContext} from './DataApp';
import '../styles/Login.css';

import { useForm } from 'react-hook-form';
import linkedInLogo from "../Images/linkedin-logo.png";
import { Link, useNavigate } from "react-router-dom";
import menAndLap from "../Images/menwithlap.svg";


const Login = ({ handleLoading }) => {
  
  /* console.log("Type of handleLoading:", typeof handleLoading); */

  const initialData = {
      username: '',
      password: '',
  }

  //state object for formdata
  const [loginformdata, setFormdata] = useState(initialData);

  //state variable to check form submission status
  
  const [loginFailed, setLoginFailed] = useState(false);

  const localContext = useContext(DataAppContext);

  const navigate = useNavigate();
  
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const [email, setEmail] = useState(''); // useState to store Email address of the user
  const [password, setPassword] = useState(''); // useState to store Password


  const { register, handleSubmit, formState: { errors } } = useForm();

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
  const loginFn = (e) => {
    
        if (validateForm(e)) {
          const users = JSON.parse(localStorage.getItem("users"));
          /* setLoginFailed(false); */
          if (users) {
            const user = users.find(
              (user) =>
                user.username === e.username && user.password === e.password
            );
            console.log(user);
            
    
            if (user) {
              // Set context variable
              const obj = {
                ...localContext.appState,
                loginStatus: true, //true means logged in
                username: user.email,
                name: user.name,
              };
              localContext.setAppState(obj);
              console.log("Login successful");
              setLoginFailed(false);
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
        }
      };
            /* let loginSuccess = false;
            /* inputRef.current.focus();
              for(let i=0 ; i<temp.length ; i++) {
                  console.log(temp[i].username, loginformdata.username);
                  if(temp[i].username === email) {
                      console.log('Inside first if - ', i)
                      if(temp[i].password === password) {
                          console.log('Inside 2nd if - ', i)
                          setLoginStatus(true);
                          loginSuccess = true;
                          //set context varibale
                          let obj = {
                              ...localContext.appState,
                              loginStatus: true, //true means logged in
                              username: email,
                              name: temp[i].name,
                          };
                          localContext.setAppState(obj);
                          console.log('line no 69');
                          //navigate page to home
                          navigate('/home');
                          console.log('line no 71');
                          break;
                      }
                    }
                  } */
                       /* {
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
          } */
          /* if (!loginSuccess) {
            // Set loginFailed to true if login was not successful
            setLoginFailed(true);
          }
        } else {
          setLoginFailed(true);
        }
          setFormdata(initialData); */

    
  
/*   useEffect(() => {
      let temp = localStorage.getItem('users');
      console.log(JSON.parse(temp));
      
  }, [loginstatus]) */

  const joinNow = () =>{
    navigate('/newuser');
  }
  return (
    <div>
      <nav className="navbar">
      <div className="linkHome">
        <Link to='/home'/*  className="linkHome" */><img className="loginLogo" src={linkedInLogo} alt="logo" /></Link>
      </div>
      <div className="signin_signout">
        <div className="newuserLink">
          <Link to='/newuser' /* className="newuserLink" */><button className="join">Join Now{" "}</button></Link>
        </div>
        <div className="loginLink">
        <Link to='/login'/*  className="loginLink" */ active><button className="sign">Sign in{" "}</button></Link>
      </div> 
      </div>
        {/* <Link to='/home' className="linkHome"><img className="loginLogo" src={linkedInLogo} alt="logo" /></Link>
        <Link to='/login' className="loginLink" active><button className="sign">Sign in{" "}</button></Link>
        <Link to='/newuser' className="newuserLink"><button className="join">Join Now{" "}</button></Link> */}
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

          <form onSubmit={handleSubmit(loginFn)}>
          <label htmlFor="username" className="email">Email or phone<font color="red">*</font></label>
          <br></br>
          <input
            type="email"
            id="username"
            className="username-login"
            placeholder="Email"
            /* value={loginformdata.username} */
             onChange={(e)=>updateData(e)} 
            /*ref={inputRef} */
            {...register("username", { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i })}
          />
          {errors.username && <p id="validation-email_password">Email Address cannot be empty or should match email pattern</p>}
          <br></br>
          <label htmlFor="password" className="password">Password<font color="red">*</font></label>
          <br></br>
          
          <input
            type={showPassword ? 'text' : 'password'}
            id="password"
            placeholder="Password"
            /* value={loginformdata.password} */
            className={`password-login ${showPassword ? 'showPassword' : ''}`}
            onChange={(e)=>updateData(e)}
            {...register("password", { required: true, minLength: 6,})}
          />
          {errors.password && (<p id="validation-email_password">Password should be minimum 6 characters</p>)}
          <br></br>
          <div className="checkShowPassword">
            <input
            type= "checkbox"
            checked={showPassword} 
            onChange={toggleShowPassword}
          />
            <label htmlFor="showPassword">Show Password</label>
          </div>
          
          
          
          <br></br>

          {/* <br></br> */}
          {/* <Link className="forPass">
            Forgot password?
          </Link> 

          <br></br>*/}
          <button type="submit" className="signIn" onClick={loginFn}>
            Sign in
          </button>
          </form>
          {/* {loginstatus && <div className="alert alert-success" role="alert">
                {alert("Successfully Logged In")}
                {/* <h2>Successfully Logged In</h2> */}
                {/* </div>
            }  */}

            {loginFailed &&  <div className="alert alert-danger" role="alert">         
              {alert("Login Failed !")}
              {/* Login Failed! */}
              </div>
            }
        
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
          <img src={menAndLap} alt="pic"/>
        </div>
      </div>
    </div>
  );
}

export default Login;