import React, { useState, useEffect } from "react";
import "../styles/newuser.css";
import logo from "../Images/linkedin-logo.png";
import { Link, useNavigate } from "react-router-dom";

const NewUser = () => {

  const initialData = {
      name: '',
      username: '',
      password: '',
  }

  //state object for formdata
  const [formdata, setFormdata] = useState(initialData);

  //state variable to check form submission status
  const [status, setStatus] = useState(false);

  //method to update each key of state object
  const updateData = (e) => {
      console.log(e.target.id, e.target.value);
      let tempObj = {};
      tempObj[e.target.id] = e.target.value.trim();
      setFormdata({
          ...formdata, ...tempObj
      });
  }

  const navigate = useNavigate();
  //methods for form submission button
  const registerFn = () => {
          //form submiited
          setStatus(true);
          //call api for form submission - POST - Submit Data - formdata/localstorage
          let temp = JSON.parse(localStorage.getItem('users')) || [];
          localStorage.setItem('users', JSON.stringify([...temp, formdata]));
          //store the response in a state variable
          setFormdata(initialData);

          alert("User Registered"); //acknowledge user account creation
          navigate("/login"); //navigate to login page

  }

  useEffect(() => {
      let temp = localStorage.getItem('users');
      console.log(JSON.parse(temp));
  }, [status])



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
          id="name"
          onChange={(e)=>updateData(e)} value={formdata.name}
        ></input>
        <label htmlFor="Name">Email or Username </label>
        <br></br>
        <input
          type="email"
          id="username"
          onChange={(e)=>updateData(e)} value={formdata.username}
        />
        <br></br>
        <label htmlFor="Name">Password (6 or more characters)</label>
        <br></br>
        <input
          type="password"
          id="password"
          onChange={updateData} value={formdata.password}
        />
        <br></br>
        <p>
          By clicking Agree & Join, you agree to the LinkedIn
          <span>User Agreement, Privacy Policy,</span> and
          <span> Cookie Policy.</span>
        </p>
        <button onClick={registerFn}>Agree & Join</button>
        <h4>
          Already on Linkedln?
          <Link to='/login'>Sign in</Link>
        </h4>
      </div>
    </div>
  );
}

export default NewUser;
