import React, { useState, useEffect, useContext, useRef } from 'react';
import { useNavigate } from "react-router-dom";
import Button  from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { DataAppContext } from "./DataApp";
import '../styles/home.css';


const Media = ({ onClose, onPost }) => {
    const localContext = useContext(DataAppContext);
    const { appState } = localContext;
    const { loginStatus } = appState;

    const [show, setShow] = useState(false);
    /* const [input, setInput] = useState(""); */
    const [selectedFile, setSelectedFile] = useState(null);
    const fileInputRef = useRef(null);

    useEffect(() => {
        setShow(true);
    }, []);

    const handleClose = () => {
        setShow(false);
        onClose(); 
    };

    /*const navigate = useNavigate();*/

    /*  const submitPost = (e) => {
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
              setSelectedFile(null);
              handleClose(); // Close the modal
              /* onClose();*/ // Close the modal after posting
           /*  } else {
              alert("Please enter a message");
            }
          } else {
            alert("Login to add a post");
            navigate("/login");
          }
      };  */

      const handleFileUpload = (e) => {
        const file = e.target.files[0]; // Get the selected file
        if (file) {
            setSelectedFile(file);
            console.log('Selected file:', file.name);
        }
      };
    
      /* const preventModalClose = (e) => {
        e.stopPropagation(); // Prevent the modal from closing
      }; */

    return (
    <div>
    <>
      <Modal className='MediaModal' show={show} onHide={handleClose} dialogClassName="modal-90w" onClick={(e) => e.stopPropagation()}>
        <div className="modal-content media">
        <Modal.Header className='modalHeader'>
          <h3>Editor</h3>
          <button type="button" class="btn-close" aria-label="Close" onClick={handleClose}>X</button>
        </Modal.Header>
        <Modal.Body className='modal-body'>
          <Form /* onSubmit={submitPost} */>
            
            <Form.Group
              className="mb-3"
              controlId="message"
            >
                <Modal.Body className='modal_selectFile'>
          <p className='title'>
            Select files to begin
          </p>
          <p>
            Share images or a single video in your post
          </p>
          <input
        type="file"
        accept="image/*, video/*" // Allow both images and videos
        style={{ display: 'none' }}
        ref={fileInputRef}
        onChange={handleFileUpload}
      />
        <button className='uploadButton' onClick={(e) => {
                      fileInputRef.current.click();
                    }}>
            Upload from computer
        </button>
        {selectedFile && (
                      <div>
                        <p>Selected File: {selectedFile.name}</p>
                      </div>
                    )}
        </Modal.Body>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary"/*  onClick={submitPost} */>
            Post
          </Button>
        </Modal.Footer>
        </div>
      </Modal>
    </>
    </div>
  );
}

export default Media;