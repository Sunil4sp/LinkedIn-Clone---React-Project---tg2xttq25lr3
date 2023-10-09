import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom"; // Import Link if needed
import { DataAppContext } from "./DataApp";
import Modal from "react-modal";
import '../styles/home.css';
import '../styles/Login.css'; //modal related CSS
import "../styles/Dropdown.css"; // Import your CSS file
import Avatar from '@mui/material/Avatar';
import profile_pic from '../Images/profile.jpg';

function DropDownLogout() {
  const [isOpen, setIsOpen] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const localContext = useContext(DataAppContext);
  const { appState, setAppState } = localContext;

  const name = appState.name;
  const navigate = useNavigate();

    const logoutFn = () => {
        
        navigate("/login");
        //update context variable
        setAppState({   //get the name variable from the appState object
          ...appState,
          loginStatus: false,
          username: "",
          name:'',
          isRefreshing: false,
        });
      };  

const toggleDropdown = () => {
    setIsOpen(!isOpen);
};


  const handleOpenModal = () => {
    /* setIsOpen(false); */
    setModalIsOpen(true);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="signout">
      <div className="dropdown">
        <Avatar
          alt="Sunil Pal"
          src={profile_pic}
          sx={{ width: 20, height: 20 }}
          onClick={toggleDropdown}
        />
        <p className="meIcon" onClick= {toggleDropdown}>
          Me
        </p>
        {isOpen && (
          <div className="dropdown-content">
            <span onClick={handleOpenModal} className="signoutLink">
              Logout
            </span>
          </div>
        )}
        <Modal
        isOpen={modalIsOpen}
        onRequestClose={handleCloseModal}
        ariaHideApp={false}
        backdropOpacity={1}
        className="validation-modal"
      >
        <div className="modalDiv">
          <h1>Want to Close Session {name} !</h1>
          <p className="modal_close"><font color="red">* Choose Signout</font></p>
          <button onClick={logoutFn}>Signout</button>
          <button onClick={handleCloseModal}>Close</button>
        </div>
      </Modal>
      </div>
    </div>
  );
}

export default DropDownLogout;
