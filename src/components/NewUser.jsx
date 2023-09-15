import React, { useState, useEffect } from "react";
import "../styles/newuser.css";
import logo from "../Images/linkedin-logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

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
  const { register, handleSubmit, formState, setError } = useForm();

  //method to update each key of state object
  const updateDataAndSubmit = (e) => {
    
      console.log(/* e.target.id, */ e.target.value);

      let tempObj = {};
      tempObj[e.target.id] = e.target.value.trim();
      setFormdata({
          ...formdata, ...tempObj
      });
  }
       

  const navigate = useNavigate();
  //methods for form submission button
  const registerFn = (e) => {
          // Check if the email and password meet your validation criteria here.
        if (!e.username || !e.password) {
          setError("username", { type: "required", message: "Email is required" });
          setError("password", { type: "required", message: "Password is required" });
          return;
        }
        console.log(e);

          //form submitted
          setStatus(true);
          //call api for form submission - POST - Submit Data - formdata/localstorage
          let temp = JSON.parse(localStorage.getItem('users')) || [];
          localStorage.setItem('users', JSON.stringify([...temp, e]));
          //store the response in a state variable
          setFormdata(initialData);

          alert("User Registered ! Kindly login."); //acknowledge user account creation
          navigate("/login"); //navigate to login page

  }

  useEffect(() => {
      let temp = localStorage.getItem('users');
      console.log(JSON.parse(temp));
  }, [status])


  return (
    <div className="newuser_main">
      <nav className="newUserNav">
        <img src={logo} alt="newuser"/>
      </nav>
      <div className="centerDiv">
        <p>Make the most of your professional life</p>
      </div>
      <div className="formDiv">
      <form onSubmit={handleSubmit(registerFn)}>
        <label htmlFor="name">Name<font color="red">*</font></label>
        <input
          type="text"
          id="name"
          className="name"
          onChange={(e)=>updateDataAndSubmit(e)} 
          {...register("name", { required: true })}
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
          {...register("username", { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,})}
          required
          /* value={formdata.username} */
        />
        {formState.errors.username && (
            <p id="error-message">Email Address should be complete</p>
          )}
        <br></br>
        <label htmlFor="password">Password (6 or more characters)<font color="red">*</font></label>
        <br></br>
        <input
          type="password"
          id="password"
          className="password"
          onChange={updateDataAndSubmit}
          {...register("password", { required: true, minLength: 6,})}
          /* value={formdata.password} */
          required
        /> 
        {formState.errors.password && (
            <p id="error-message-password">Password should be minimum 6 characters </p>
          )}
        <br></br>
        <p>
          By clicking Agree & Join, you agree to the LinkedIn
          <span> User Agreement, Privacy Policy,</span> and
          <span> Cookie Policy.</span>
        </p>
        <button type="submit" onClick={registerFn}>Agree & Join</button>
        </form>
        <h4>
          Already on Linkedln?
          <Link to='/login'>Sign in</Link>
        </h4>
      </div>
    </div>
  );
}

export default NewUser;
