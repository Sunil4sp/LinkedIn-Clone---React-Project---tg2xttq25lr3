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

  /* const [isFormValidated, setIsFormValidated] = useState(false); */

  //state variable to check form submission status
  const [status, setStatus] = useState(false);

  //method to update each key of state object
  const updateDataAndSubmit = (e) => {
    
      /* const { name, username, password } = formdata;
      window.localStorage.setItem("name", name);
      window.localStorage.setItem("username", username);
      window.localStorage.setItem("password", password); */
      console.log(/* e.target.id, */ e.target.value);

      let tempObj = {};
      tempObj[e.target.id] = e.target.value.trim();
      setFormdata({
          ...formdata, ...tempObj
      });
  }
      /* e.preventDefault();
      const form = e.currentTarget;

      if (!form.checkValidity()) {
        setIsFormValidated(true);
        return;
      }*/
      
        
  
        /* console.log(e.target.id, e.target.value);
        let tempObj = {};
        tempObj[e.target.id] = e.target.value.trim();
        setFormdata({
            ...formdata, ...tempObj
        });
        alert("User Created. Kindly login.");
        navigate("/login"); // Navigate to the login page  */ 

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

          alert("User Registered ! Kindly login."); //acknowledge user account creation
          navigate("/login"); //navigate to login page

  }

  useEffect(() => {
      let temp = localStorage.getItem('users');
      console.log(JSON.parse(temp));
  }, [status])

  /* useEffect(() => {
    if (status) {
      const { name, username, password } = formdata;
      window.localStorage.setItem("name", name);
      window.localStorage.setItem("username", username);
      window.localStorage.setItem("password", password);
    }
  }, [status, formdata]); */
  

  return (
    <div className="newuser_main">
      <nav className="newUserNav">
        <img src={logo} alt="newuser"/>
      </nav>
      <div className="centerDiv">
        <p>Make the most of your professional life</p>
      </div>
      <div className="formDiv">
      {/* <form
          onSubmit= {registerFn}
           noValidate
          className={isFormValidated ? "was-validated" : ""} 
        > */}
        <label htmlFor="name">Name<font color="red">*</font></label>
        <input
          type="text"
          id="name"
          className="name"
          onChange={(e)=>updateDataAndSubmit(e)} 
          /* value={formdata.name} */
          required 
        />
        <label htmlFor="username">Email or Username<font color="red">*</font></label>
        <br></br>
        <input
          type="email"
          id="username"
          className="username"
          onChange={(e)=>updateDataAndSubmit(e)}
          /* value={formdata.username} */
          required
        />
        <br></br>
        <label htmlFor="password">Password (6 or more characters)<font color="red">*</font></label>
        <br></br>
        <input
          type="password"
          id="password"
          className="password"
          onChange={updateDataAndSubmit}
          /* value={formdata.password} */
          required
        /> 
        <br></br>
        <p>
          By clicking Agree & Join, you agree to the LinkedIn
          <span> User Agreement, Privacy Policy,</span> and
          <span> Cookie Policy.</span>
        </p>
        <button onClick={registerFn}>Agree & Join</button>
        {/* </form> */}
        <h4>
          Already on Linkedln?
          <Link to='/login'>Sign in</Link>
        </h4>
      </div>
    </div>
  );
}

export default NewUser;
