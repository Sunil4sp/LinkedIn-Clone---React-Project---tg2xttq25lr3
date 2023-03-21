import React from "react";
import linkedInLogo from "../Images/linkedin-logo.png";
import { Link, useNavigate } from "react-router-dom";
import menAndLap from "../Images/menwithlap.svg";
import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [credential, setCredential] = useState(false);

  const loginForm = (e) => {
    e.preventDefault();
    let emailPattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    let passwordPattern =
      /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;

    if (!email) {
      return alert("email is required");
    } else {
      if (!email.match(emailPattern)) {
        setCredential(true);
        alert("valid email");
      } else {
        setCredential(false);
        localStorage.setItem("email", email);
      }
    }

    if (!password) {
      return alert("password is required");
    } else {
      if (!password.match(passwordPattern)) {
        setCredential(true);
        console.log(credential, "firstcredential");
        alert("Invalid password");
      } else {
        setCredential(false);
        localStorage.setItem("password", password);
      }
    }

    if (!credential) {
      console.log(credential, "credential");
      if (
        email === localStorage.getItem("email") &&
        password === localStorage.getItem("password")
      ) {
        alert("successfully login");
        navigate("/home");
      } else {
        alert("Invalid credentials");
      }
    }
  };

  return (
    <div>
      <nav className="navbar">
        <img className="loginLogo" src={linkedInLogo} alt="logo" />
        <button className="sign">Sign in</button>
        <button className="join">Join Now</button>
        <i className="fa fa-cc-discover discover">
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
        </i>
      </nav>

      <div className="divAfterNav">
        <div className="leftSide">
          <p>Welcome to your professional community</p>
          <label htmlFor="Name">Email or phone</label>
          <br></br>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br></br>
          <label htmlFor="Name">Password</label>
          <br></br>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br></br>
          <Link className="forPass">
            Forgot password?
          </Link>
          <br></br>
          <button className="signIn" onClick={loginForm}>
            Sign in
          </button>
          <hr className="firsthr"></hr>
          <div className="orr">or</div>
          <hr className="secondhr"></hr>
          <br></br>
          <button className="newtoLinkedIn">
            New to Linkedln?<Link to="newuser">Join now</Link>{" "}
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
