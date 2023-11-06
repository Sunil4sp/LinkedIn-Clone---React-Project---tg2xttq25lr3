import React, { useState, useEffect, useContext } from 'react';
import Button  from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { DataAppContext } from "./DataApp";

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
        setShow(false);
        onClose(); // Call the onClose function passed from the parent component to close the modal
    };

  return (
    <div>
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header className='modalHeader' closeButton>
        
          <Modal.Title className='modalTitle'>Send {name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            
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
          
          <Button variant="primary">
            Post
          </Button>
        </Modal.Footer>
      </Modal>
    </>
    </div>
  )
}

export default Send;