import React, { useState, useEffect, useContext, useRef } from 'react';
import { useNavigate } from "react-router-dom";
import Button  from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { DataAppContext } from "./DataApp";
import Timezone from './Timezone';
import '../styles/home.css';


const Events = ({ onClose, onPost }) => {
    const localContext = useContext(DataAppContext);
    const { appState } = localContext;
    const { loginStatus } = appState;

    const [show, setShow] = useState(false);
    const [input, setInput] = useState("");
    /* const [post, setPost] = useState([]); */
    const fileInputRef = useRef(null);
    const [eventType, setEventType] = useState('online');

    useEffect(() => {
        setShow(true);
    }, []);

    /* const handleClose = () => {
        if(fileInputRef != null){
        setShow(false);
        onClose(); }
    }; */

    const navigate = useNavigate();

    const submitPost = (e) => {
        e.preventDefault();

        if (loginStatus) {
            const message = input.trim();;
            console.log(message);
      
            if (message) {
                const newPost = {
                    id: new Date().getTime(),
                    msg: message,
                    coment: [],
                  };
              console.log(newPost);
              onPost(newPost);
              setInput(""); // Clear the input field
              /* handleClose(); // Close the modal */
            } else {
              alert("Please enter a message");
            }
          } else {
            alert("Login to add a post");
            navigate("/login");
          }
      };

      const handleFileUpload = (e) => {
        const file = e.target.files[0]; // Get the selected file
        if (file) {
          console.log('Selected file:', file.name);
        }
      };

    return (
      <div>
        <>
          <Modal
            className="EventModal"
            show={show}
            /* onHide={handleClose} */
            dialogClassName="modal-90w sizeIncrease"
          >
            <div className="modal-content event">
              <Modal.Header className="modalHeader" closeButton>
                <h3>Create an Event</h3>
              </Modal.Header>
              <Modal.Body className='event-body'>
                
                    <Modal.Body className="modal_selectFile-event">
                      <input
                          type="file"
                          accept="image/*, video/*" // Allow both images and videos
                          style={{ display: "none" }}
                          ref={fileInputRef}
                          onChange={handleFileUpload}
                        />
                      <img
                        src="https://static.licdn.com/aero-v1/sc/h/3h0vrtch1zepjr4p54aja8i9x"
                        alt="camera_image"
                      />
                      <p className="title">Upload cover picture</p>
                      <p className='p-message'>Minimum width 480 pixels, 16:9 recommended</p>
                </Modal.Body>
                <Modal.Body className='event-form'>
                <Form onSubmit={submitPost}>
                    <Form.Group className="mb-3" controlId="message">
                    <div className="form">
                      <label>Event type</label><br/>
                        <div className="radio">
                            <div className="online">
                                <input type="radio" name="eventType" id="online" value="online" 
                                checked={eventType === 'online'}
                                onChange={() => setEventType('online')} />Online
                            </div>
                            <div className="inPerson">
                                <input type="radio" name="eventType" id="inPerson" value="in person" 
                                checked={eventType === 'in person'}
                                onChange={() => setEventType('in person')} />In person
                            </div>
                        </div>
                        <div className="form-input">
                            <label>Event format*</label><br/>
                            <select name="event-format" id="event-format">
                                <option value="1">LinkedIn Audio Event</option>
                                <option value="2">LinkedIn Live</option>
                                <option value="3">External Event Link</option>
                            </select>
                            <div className="eventName">
                                <label>Event name*</label>
                                <input type="text" name="event-name" id="event-name" />
                            </div>
                            <div className="timeZone">
                                <label>Timezone*</label>
                            <Timezone />
                            </div>
                            <div className="selectDate">
                            <div className="start-date">
                                <label className='start_date'>Start date*</label>
                                <input type="date" name="startDate" id="startDate" />
                            </div>
                            <div className="start-time">
                                <label className='start_time'>Start time*</label>
                                <input type="time" name="startTime" id="startTime" />
                            </div>
                            </div>
                            <div className="addDatenTime">
                                <input type="checkbox" name="addDatetimeCheck" id="addDatetimeCheck" />
                                <label className='checkdateNtime'>Add end date and time</label>
                            </div>
                            <div className="selectEndDate">
                            <div className="end-date">
                                <label className='end_date'>End date*</label>
                                <input type="date" name="endDate" id="endDate" />
                            </div>
                            <div className="end-time">
                                <label className='end_time'>end time*</label>
                                <input type="time" name="endTime" id="endTime" />
                            </div>
                            </div>
                            <div className="description">
                                <label>Description</label>
                                <textarea name="description" id="descrip" cols="10" rows="2"></textarea>
                            </div>
                            <div className="speakerDiv">
                                <label>Speaker</label>
                                <input type="text" name="speaker" id="speaker" />
                            </div>
                        </div>
                    </div>
                    </Form.Group>
                </Form>
                </Modal.Body>    
              </Modal.Body>
              <Modal.Footer>
                <Button variant="primary" onClick={submitPost}>
                  Post
                </Button>
              </Modal.Footer>
            </div>
          </Modal>
        </>
      </div>
    );
}

export default Events;