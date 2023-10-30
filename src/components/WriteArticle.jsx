import React, { useState, useEffect, useContext, useRef } from 'react';
import { useNavigate } from "react-router-dom";
import NavBar from './NavBar';
/* import Button  from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal'; */
import { DataAppContext } from "./DataApp";
import Avatar from '@mui/material/Avatar';
import profile_pic from '../Images/profile.jpg';
import '../styles/home.css';


const WriteArticle = ({ onClose, onPost }) => {
    const localContext = useContext(DataAppContext);
    const { appState } = localContext;
    const { loginStatus } = appState;
    const name = appState.name;

    const [show, setShow] = useState(false);
    const [input, setInput] = useState("");
    const fileInputRef = useRef(null);

    useEffect(() => {
        setShow(true);
    }, []);

    const handleClose = () => {
        if(fileInputRef != null){
        setShow(false);
        onClose(); }
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

      const handleFileUpload = (e) => {
        const file = e.target.files[0]; // Get the selected file
        if (file) {
          console.log('Selected file:', file.name);
        }
      };
    
      const preventModalClose = (e) => {
        e.stopPropagation(); // Prevent the modal from closing
      };

    return (
      <div>
        <>
          <NavBar />
          <div className="article-mainSection">
            <div className="article-headerSection">
              <div className="profileDetail">
                <Avatar
                  className="profilePic"
                  alt="Sunil Pal"
                  src={
                    name === "sunil" || name === "Sunil" || name === "SUNIL"
                      ? profile_pic
                      : undefined
                  }
                  sx={{ width: 40, height: 40 }}
                />
                <ul className="profileDetail-header">
                  <li>{name}</li>
                  <li>Individual article</li>
                </ul>
              </div>
              {/* <div className="article-formattingDiv">
              <div className='artdeco-dropdown'>
                Style
              </div>
            </div> */}
              <div className="btn-rightSection">
                <div className="artdeco-dropdown">
                  <button
                    aria-expanded="false"
                    aria-label="Manage menu"
                    id="ember612"
                    className="artdeco-button--2"
                    type="button"
                    tabindex="0"
                  >
                    Manage
                    <li-icon
                      aria-hidden="true"
                      type="caret-filled-down-icon"
                      className="artdeco-dropdown__trigger-icon"
                      size="small"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        data-supported-dps="16x16"
                        fill="currentColor"
                        className="mercado-match"
                        width="16"
                        height="16"
                        focusable="false"
                      >
                        <path d="M8 11L3 6h10z" fill-rule="evenodd"></path>
                      </svg>
                    </li-icon>
                  </button>
                </div>
                <button className="next">
                  Next
                  <li-icon
                    aria-hidden="true"
                    type="arrow-right-icon"
                    class="artdeco-button__icon"
                    size="small"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      class="mercado-match"
                      data-supported-dps="16x16"
                      fill="currentColor"
                      width="16"
                      height="16"
                      focusable="false"
                    >
                      <path d="M11.45 3L15 8l-3.55 5H9l2.84-4H2V7h9.84L9 3z"></path>
                    </svg>
                  </li-icon>
                </button>
              </div>
            </div>
          </div>
          <div className="article-editor-cover-image__placeholder">
            <svg
              role="none"
              aria-hidden="true"
              className="article-editor-cover-image__placeholder-illustration"
              xmlns="http://www.w3.org/2000/svg"
              width="64"
              height="64"
              viewBox="0 0 64 64"
              data-supported-dps="64x64"
              data-test-icon="image"
            >
              <svg display="none">
                <image
                  href="https://static.licdn.com/aero-v1/sc/h/3v0qqn0qg9h47wg81rum0twek"
                  x="0"
                  y="0"
                  width="64"
                  height="64"
                ></image>
              </svg>

              <svg display="block">
                <image
                  href="https://static.licdn.com/aero-v1/sc/h/8x7kwtluy3rlydstzy8b6tywc"
                  x="0"
                  y="0"
                  width="64"
                  height="64"
                ></image>
              </svg>
            </svg>
            <p className="article-editor-cover-image__placeholder-description">
              We recommend uploading or dragging in an image that is{" "}
              <strong>1920x1080 pixels</strong>
            </p>
            <input
              accept="image/*"
              id="article-editor-cover-image__file-input"
              className="article-editor-cover-image__file-input visually-hidden"
              type="file"
            />
            <label
              for="article-editor-cover-image__file-input"
              className="article-editor-cover-image__label artdeco-button artdeco-button--secondary artdeco-button--2 artdeco-button--muted"
            >
              Upload from computer
            </label>
          </div>
          <div class="article-editor-headline">
            <label
              class="a11y-text"
              for="article-editor-headline__textarea"
              aria-hidden="true"
            >
              Title
            </label>
            <textarea
              id="article-editor-headline__textarea"
              class="article-editor-headline__textarea"
              placeholder="Title"
              maxlength="150"
              rows="1"
              spellcheck="false"
            ></textarea>
          </div>
          {/* <div class="article-editor-content">
          <div class="article-editor-content__canvas"></div>
          <div contenteditable="true" translate="no" tabindex="0" class="ProseMirror" spellcheck="false">
            <p class="article-editor-content__paragraph is-empty article-editor-content--is-empty" data-placeholder="Write here. You can also include @mentions."><br class="ProseMirror-trailingBreak"/></p>
          </div>
          </div> */}
          <div className="article-editor-content">
            <div className="article-editor-content__canvas"></div>
            <div
              contenteditable="true"
              translate="no"
              tabindex="0"
              className="ProseMirror"
              spellcheck="false"
            >
              <p
                className="article-editor-content__paragraph is-empty article-editor-content--is-empty"
                data-placeholder="Write here. You can also include @mentions."
              >
                <br className="ProseMirror-trailingBreak" />
              </p>
            </div>
          </div>
        </>
      </div>
    );
}

export default WriteArticle;