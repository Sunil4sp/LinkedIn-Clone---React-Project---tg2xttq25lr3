import React, { useState } from "react";
import "../styles/RightSideBar.css";
import { Link } from "react-router-dom";

const RightSideBar = () => {
  const [value1, setValue1] = useState(true);
  const [value2, setValue2] = useState(true);
  const [value3, setValue3] = useState(true);
  const [value4, setValue4] = useState(true);
  const [value5, setValue5] = useState(true);
  const [value6, setValue6] = useState(true);
  const [value7, setValue7] = useState(true);

  const handleClick1 = () => {
    setValue1(!value1);
  };
  const handleClick2 = () => {
    setValue2(!value2);
  };
  const handleClick3 = () => {
    setValue3(!value3);
  };
  const handleClick4 = () => {
    setValue4(!value4);
  };
  const handleClick5 = () => {
    setValue5(!value5);
  };
  const handleClick6 = () => {
    setValue6(!value6);
  };
  const handleClick7 = () => {
    setValue7(!value7);
  };

  return (
    <div className="RightSideBar">
      <div className="upperRight">
        <h5>Add to Your Feed</h5>
        <p>React Coding Challenges</p>
        <button onClick={handleClick1}>
          {value1 ? "+ Follow" : "Unfollow"}
        </button>
        <p>JavaScript Coding Challenges</p>
        <button onClick={handleClick2}>
          {value2 ? "+ Follow" : "Unfollow"}
        </button>
        <br></br>
        <p>Html Coding Challenges</p>
        <button onClick={handleClick3}>
          {value3 ? "+ Follow" : "Unfollow"}
        </button>
        <br></br>
        <p>Bootstrap Coding Challenges</p>
        <button onClick={handleClick4}>
          {value4 ? "+ Follow" : "Unfollow"}
        </button>
        <br></br>
        <p>Java Coding Challenges</p>
        <button onClick={handleClick5}>
          {value5 ? "+ Follow" : "Unfollow"}
        </button>
        <br></br>
        <p>Python Coding Challenges</p>
        <button onClick={handleClick6}>
          {value6 ? "+ Follow" : "Unfollow"}
        </button>
        <br></br>
        <p>PHP Coding Challenges</p>
        <button onClick={handleClick7}>
          {value7 ? "+ Follow" : "Unfollow"}
        </button>
        <br></br>
      </div>
      {/* <div className='middleRight'>
            <img src={imgTwoLadies} alt='pic'/>
          </div> */}
      <div className="lowerRight">
        <div className="h4">
          <h4>Design and developed by Sunil Pal</h4>
        </div>
        <div className="gitDiv">
          <Link
            to="https://github.com/Sunil4sp/LinkedIn-Clone---React-Project---tg2xttq25lr3.git"
            target="_blank"
            className="git"
          >
            Github Project
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RightSideBar;
