import React, { useState } from "react";
import "../styles/newuser.css";
import logo from "../Images/linkedin-logo.png";
import { Link, useNavigate } from "react-router-dom";

function NewUser() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let emailPattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    let passwordPattern =
      /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;
    let namePattern = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;

    if (!email) {
      return alert("email is required");
    }
    if (!email.match(emailPattern)) {
      alert("Invalid email");
    } else {
      localStorage.setItem("email", email);
    }

    if (!name) {
      return alert("name is required");
    }
    if (!name.match(namePattern)) {
      alert("Invalid name");
    } else {
      localStorage.setItem("name", name);
    }

    if (!password) {
      return alert("password is required");
    } else {
      if (!password.match(passwordPattern)) {
        alert("Invalid password");
      } else {
        localStorage.setItem("password", password);
      }
    }
    alert("Registered successfully");

    navigate("/");
    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <nav className="newUserNav">
        <img src={logo} alt="newuser"/>
      </nav>
      <div className="centerDiv">
        <p>Make the most of your professional life</p>
      </div>
      <div className="formDiv">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
        ></input>
        <label htmlFor="Name">Email or phone number</label>
        <br></br>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <br></br>
        <label htmlFor="Name">Password (6 or more characters)</label>
        <br></br>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <br></br>
        <p>
          By clicking Agree & Join, you agree to the LinkedIn
          <span>User Agreement, Privacy Policy,</span> and
          <span> Cookie Policy.</span>
        </p>
        <button onClick={handleSubmit}>Agree & Join</button>
        <h4>
          Already on Linkedln?
          <Link to="login">Sign in</Link>
        </h4>
      </div>
    </div>
  );
}

export default NewUser;
