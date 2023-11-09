import React, { useState, useEffect, useContext } from 'react';
import Button  from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { DataAppContext } from "./DataApp";
import '../styles/home.css';

const Send = ({ onClose, onPost }) => {
    const localContext = useContext(DataAppContext);
    const { appState } = localContext;
    /* const { loginStatus } = appState; */
    const name = appState.name;
    const [show, setShow] = useState(false);
    const [input, setInput] = useState("");

    useEffect(() => {
        setShow(true);
    }, []);

    const handleClose = () => {
        console.log('Close button clicked'); 
        setShow(false);
        onClose(); // Call the onClose function passed from the parent component to close the modal
    };
    const handleSubmit = () =>{
        alert("Send Successfully");
        handleClose();
    }

  return (
    <div>
    <>
      <Modal show={show} onHide={handleClose} onClick={(e) => e.stopPropagation()}>
        <Modal.Header className='modalHeader'>
        
          <Modal.Title className='modalTitle'>Send {name}'s Post</Modal.Title>
          <button type="button" class="btn-close" aria-label="Close" onClick={handleClose}>X</button>
        </Modal.Header>
        <Modal.Body className='send-body'>
          <div className="textInputBox">
            <input type='text' className='search-input-send' placeholder='Type a name' />
          </div>
          <div className="send-listItem">
            
            <div className="send-listItem_1">
              <div className="send_profile-pics">
                <img
                  className="imagejobs_width"
                  src="https://media.licdn.com/dms/image/C4E03AQGFaQO0G788Nw/profile-displayphoto-shrink_800_800/0/1650194519725?e=1699488000&v=beta&t=XibwV99X5A3U6ALt0ATg0aC33zkAnh8u5cXTOZFSAko" alt=''
                ></img>
              </div>
              <div className="name-design">
                <span>Parathamesh Dalvi</span>
                <span>Student at the New Collage, Kolhapur</span>
                </div>
              <div className="send-checkbox">
                <input type="checkbox" name="chkbx1" id="chkbx1" />
              </div>
            </div>
            
            <div className="send-listItem_1">
              <div className="send_profile-pics">
                <img
                    className="imagejobs_width"
                    src="https://media.licdn.com/dms/image/C4D03AQF8RepiU5txig/profile-displayphoto-shrink_800_800/0/1653567133276?e=1699488000&v=beta&t=WqUjGWgLCoQktYE3-5-AAgQrz0BhzKfrdlcCm3zEgMw" alt=''
                  ></img>
              </div>
              <div className="name-design">
                <span>Vardhan Choudhary</span>
                <span>Student at Newton School</span>
              </div>
              <div className="send-checkbox">
                <input type="checkbox" name="chkbx1" id="chkbx1" />
              </div>
            </div>  

            <div className="send-listItem_1">
              <div className="send_profile-pics">
                <img
                  className="imagejobs_width"
                  src="https://media.licdn.com/dms/image/C5103AQGCuqWiQuejng/profile-displayphoto-shrink_100_100/0/1574857620241?e=1704931200&v=beta&t=omrMaKYOOxwF1mp_3cH-LH_ui9aXA8fxxPVz-V4xIYA" alt=''
                ></img>
              </div>
              <div className="name-design">
                <span>Austein Keil</span>
                <span>Business Development and Marketing Manager</span>
              </div>
              <div className="send-checkbox">
                <input type="checkbox" name="chkbx1" id="chkbx1" />
              </div>
            </div>

            <div className="send-listItem_1">
              <div className="send_profile-pics">
                <img
                  className="imagejobs_width"
                  src="https://media.licdn.com/dms/image/D4D03AQEKSQXRDQ2…eta&t=5szmILiWZeSz-UtrzOjRXkGr-gD3BOg76XxwvF5S2oo" alt=''
                ></img>
              </div>
              <div className="name-design">
                <span>Mahendra Singh</span>
                <span>Frontend Developer</span>
              </div>
              <div className="send-checkbox">
                <input type="checkbox" name="chkbx1" id="chkbx1" />
              </div>
            </div>

            <div className="send-listItem_1">
              <div className="send_profile-pics">
                <img
                  className="imagejobs_width"
                  src="https://media.licdn.com/dms/image/C5603AQF42-PUp73…eta&t=99y77V2DTrylWMI8ENJRUfw8yC9onKhA4NYK-18PDBw" alt=''
                ></img>
              </div>
              <div className="name-design">
                <span>Mohd Darain</span>
                <span>Full Stack developer Trainee</span>
              </div>
              <div className="send-checkbox">
                <input type="checkbox" name="chkbx1" id="chkbx1" />
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className='send-footer'>
          <Button variant="primary" className='sendBtn' autoFocus onClick={handleSubmit}>
            Send
          </Button>
        </Modal.Footer>
      </Modal>
    </>
    </div>
  )
}

export default Send;