import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import Button  from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { DataAppContext } from "./DataApp";
import '../styles/home.css';
import Avatar from '@mui/material/Avatar';
import profile_pic from '../Images/profile.jpg';

const PostModal = ({ onClose, onPost }) => {
    const localContext = useContext(DataAppContext);
    const { appState } = localContext;
    const { loginStatus } = appState;
    const name = appState.name;

    const [show, setShow] = useState(false);
    const [input, setInput] = useState("");
    const [post, setPost] = useState([]);

    useEffect(() => {
        setShow(true);
    }, []);

    const handleClose = () => {
        setShow(false);
        onClose(); // Call the onClose function passed from the parent component to close the modal
    };

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
              handleClose(); // Close the modal
              /* onClose(); // Close the modal after posting */
            } else {
              alert("Please enter a message");
            }
          } else {
            alert("Login to add a post");
            navigate("/login");
          }

      };

    return (
    <div>
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header className='modalHeader'>
        <Avatar
                  alt="Sunil Pal"
                  src= {profile_pic}
                  sx={{ width: 36, height: 36 }}
                />
          <Modal.Title className='modalTitle'>{name}</Modal.Title>
          <button type="button" class="btn-close" aria-label="Close">X</button>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={submitPost}>
            
            <Form.Group
              className="mb-3"
              controlId="message"
            >
              
              <Form.Control 
              className='textareaType' 
              as="textarea" 
              rows={10} 
              placeholder='Start Typing'
              value={input}
              onChange={(e) => setInput(e.target.value)} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          
          <Button variant="primary" onClick={submitPost}>
            Post
          </Button>
        </Modal.Footer>
      </Modal>
    </>
    </div>
  )
}

export default PostModal;