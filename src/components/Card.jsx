import React, { useState, useContext } from 'react';
import '../styles/card.css';
import '../styles/home.css';
import sendIcon from '../Images/send-icon.svg';
import { DataAppContext } from "./DataApp";
import Avatar from '@mui/material/Avatar';
import profile_pic from '../Images/profile.jpg';
import Send from './Send';
/* import { ShareAble } from './Home'; */

const Card = (props) => {
  const localContext = useContext(DataAppContext);
  const { appState } = localContext;
  const name = appState.name;

  const [like1, setLike1] = useState(4);
  const [like2, setLike2] = useState(3);
  const [showCommentBox1, setShowCommentBox1] = useState(false);
  const [showCommentBox2, setShowCommentBox2] = useState(false);
  const [inputs1, setInputs1] = useState("");
  const [inputs2, setInputs2] = useState("");
  const [comments1, setComments1] = useState([]);
  const [comments2, setComments2] = useState([]);
  const [svgColor1, setSvgColor1] = useState('currentColor');
  const [svgColor2, setSvgColor2] = useState('currentColor');
  const [hasLiked1, setHasLiked1] = useState(false);
  const [hasLiked2, setHasLiked2] = useState(false);
  const [sendModalIsOpen1, setSendModalIsOpen1] = useState(false);
  const [sendModalIsOpen2, setSendModalIsOpen2] = useState(false);
  const [showCommentReply1, setShowCommentReply1] = useState(false);
  const [showCommentReply2, setShowCommentReply2] = useState(false);

  const handleLike1 = () => {
    if (!hasLiked1) {
      setLike1(like1 + 1);
      setHasLiked1(true);
      setSvgColor1('blue');
    } else {
      setLike1(like1 - 1);
      setHasLiked1(false);
      setSvgColor1('gray');
    }
  };
  
  const handleLike2 = () => {
    if (!hasLiked2) {
      setLike2(like2 + 1);
      setHasLiked2(true);
      setSvgColor2('blue');
    } else {
      setLike2(like2 - 1);
      setHasLiked2(false);
      setSvgColor2('gray');
    }
  };

  const handleShowComment1 = () => {
    setShowCommentBox1(!showCommentBox1);
  };

  const handleShowComment2 = () => {
    setShowCommentBox2(!showCommentBox2);
  };

  const commentPost1 = (e) => {
    e.preventDefault();
    if (inputs1.trim() !== "") {
      // Only post the comment if it's not empty
      setComments1([...comments1, inputs1]); // Add the new comment to the comments array
      setInputs1(""); // Clear the input field
      setShowCommentReply1(true);
      /* setShowCommentBox1(false); */
    }
  };
  const commentPost2 = (e) => {
    e.preventDefault();
    if (inputs2.trim() !== "") {
      // Only post the comment if it's not empty
      setComments2([...comments2, inputs2]); // Add the new comment to the comments array
      setInputs2(""); // Clear the input field
      setShowCommentReply2(true);
      /* setShowCommentBox2(false); */
    }
  };

  const handleSendToggle1 = () => {
    setSendModalIsOpen1(!sendModalIsOpen1);
  }
  const handleSendToggle2 = () => {
    setSendModalIsOpen2(!sendModalIsOpen2);
  }

  const closeModal1 = () => {
    setSendModalIsOpen1(false);
  };
  const closeModal2 = () => {
    setSendModalIsOpen2(false);
  };

  return (
    <div>
      <div className="post libd">
        <div className="post__header">
          <div className="account__avatar">
            <div className="account__details">S</div>
          </div>
          <div className="post__info">
            <h2 className="random__name">Sunil Kumar Pal</h2>
            <p>Project Owner</p>
          </div>
        </div>

        <div className="post__body">
          <div className="post__message">
            <p>
              Linkedin Clone is a web application built using React and Local
              Storage that replicates the functionality of the popular
              professional networking site, Linkedin. It allows users to create
              profiles, create posts, like them, and comment on them. The user
              interface is designed to be intuitive and easy to use. The
              application is built with scalability in mind so that it can
              easily be extended to add more features in the future.
            </p>
          </div>
          <div className="post__creative"></div>
          <div className="post__summary"></div>
        </div>

        <div className="post__engagement--container">
          <div className="post__engagement--metrics">
            <img
              className=""
              src="https://static.licdn.com/sc/h/5zhd32fqi5pxwzsz78iui643e"
              alt="like"
            />
            <span className="linkedin__engagement">{like1}</span>
          </div>
          <div className="post__engagement--ampiflications">
            <span className="post__engagement--comment">
              <span className="linkedin__engagement">2 comments</span>
            </span>
            <span className="post__engagement--shares">
              <span className="linkedin__engagement"># shares</span>{" "}
            </span>
          </div>
        </div>

        <div className="post__engagement--comments">
          <div className="likeIcon" onClick={handleLike1}>
            <svg
              class="social-action-bar__icon lazy-loaded"
              data-svg-class-name="social-action-bar__icon--svg"
              aria-hidden="true"
              aria-busy="false"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              id="thumbs-up-outline-medium"
              data-supported-dps="24x24"
              fill={svgColor1}
              focusable="false"
              className="social-action-bar__icon--svg lazy-loaded"
              width="24"
              height="24"
            >
              <path d="M19.46 11l-3.91-3.91a7 7 0 01-1.69-2.74l-.49-1.47A2.76 2.76 0 0010.76 1 2.75 2.75 0 008 3.74v1.12a9.19 9.19 0 00.46 2.85L8.89 9H4.12A2.12 2.12 0 002 11.12a2.16 2.16 0 00.92 1.76A2.11 2.11 0 002 14.62a2.14 2.14 0 001.28 2 2 2 0 00-.28 1 2.12 2.12 0 002 2.12v.14A2.12 2.12 0 007.12 22h7.49a8.08 8.08 0 003.58-.84l.31-.16H21V11zM19 19h-1l-.73.37a6.14 6.14 0 01-2.69.63H7.72a1 1 0 01-1-.72l-.25-.87-.85-.41A1 1 0 015 17l.17-1-.76-.74A1 1 0 014.27 14l.66-1.09-.73-1.1a.49.49 0 01.08-.70.48.48 0 01.34-.11h7.05l-1.31-3.92A7 7 0 0110 4.86V3.75a.77.77 0 01.75-.75.75.75 0 01.71.51L12 5a9 9 0 002.13 3.5l4.5 4.5H19z"></path>
            </svg>
            <span className="like-text">Like</span>
          </div>
          
          <div className="commentIcon" onClick={() => handleShowComment1()}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              data-supported-dps="24x24"
              fill="currentColor"
              class="mercado-match"
              width="24"
              height="24"
              focusable="false"
            >
              <path d="M7 9h10v1H7zm0 4h7v-1H7zm16-2a6.78 6.78 0 01-2.84 5.61L12 22v-4H8A7 7 0 018 4h8a7 7 0 017 7zm-2 0a5 5 0 00-5-5H8a5 5 0 000 10h6v2.28L19 15a4.79 4.79 0 002-4z"></path>
            </svg>
            <span className="comment-text">Comment</span>
          </div>

          <div className="send-icon" onClick={handleSendToggle1}>
            <img src={sendIcon} style={{ width: 20, height: 20 }} alt="" />
            <span className="send-text">Send</span>
            {sendModalIsOpen1 && <Send onClose= {closeModal1} /* onPost={handlePost} */ />}
          </div>
        </div>
        {showCommentBox1 && (
        <div className="comment-profile-pic">
          
            <div className="profile-pic-comment">
              <div className="profile-picture">
                <Avatar
                  alt="Sunil Pal"
                  src={(name ==='sunil'|| name === 'Sunil'|| name === 'SUNIL') ? profile_pic : undefined}
                  sx={{ width: 34, height: 34 }}
                />
              </div>

              <div className="profile-name">
                <h5 className="h5_title">{name}</h5>
              </div>
            </div>
          
          <div className="commentDiv">
              <form onSubmit={(e) => commentPost1(e)} className="postComment">
                <input
                  type="text"
                  placeholder="Post Comment"
                  value={inputs1}
                  onChange={(e) => setInputs1(e.target.value)}
                />
              </form>
              {showCommentReply1 && (
            <div className="comment-reply">
              <div className="reply-profile">
              <Avatar
                  alt="Sunil Pal"
                  src={(name ==='sunil'|| name === 'Sunil'|| name === 'SUNIL') ? profile_pic : undefined}
                  sx={{ width: 34, height: 34 }}
                />
                <div className='reply-comment-secondDiv'>
                <h5 className="h5_title">{name}</h5>
                {comments1.map((comment, index) => (
                  <div key={index} className="comment">
                    <span className="showComnt">{comment}</span>
                  </div>
                ))}
                </div>
              </div>
            </div>
              )}
          </div>
        </div>
        )}
      </div>
      <div className="post libd">
        <div className="post__header">
          <div className="account__avatar">
            <div className="account__details">S</div>
          </div>
          <div className="post__info">
            <h2 className="random__name">Sanjay Kumar</h2>
            <p>User</p>
          </div>
        </div>

        <div className="post__body">
          <div className="post__message">
            <p>
              This clone can be scaled to connect backend. Processes like
              checking whether user exists or not while logging in can be pushed
              to backend in that case.
            </p>
          </div>
          <div className="post__creative"></div>
          <div className="post__summary"></div>
        </div>

        <div className="post__engagement--container">
          <div className="post__engagement--metrics">
            <img
              className=""
              src="https://static.licdn.com/sc/h/5zhd32fqi5pxwzsz78iui643e"
              alt="like"
            />
            <span className="linkedin__engagement">{like2}</span>
          </div>
          <div className="post__engagement--ampiflications">
            <span className="post__engagement--comment">
              <span className="linkedin__engagement">2 comments</span>
            </span>
            <span className="post__engagement--shares">
              <span className="linkedin__engagement"># shares</span>
            </span>
          </div>
        </div>

        <div className="post__engagement--comments">
          <div className="likeIcon" onClick={handleLike2}>
            <svg
              class="social-action-bar__icon lazy-loaded"
              data-svg-class-name="social-action-bar__icon--svg"
              aria-hidden="true"
              aria-busy="false"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              id="thumbs-up-outline-medium"
              data-supported-dps="24x24"
              fill={svgColor2}
              focusable="false"
              className="social-action-bar__icon--svg lazy-loaded"
              width="24"
              height="24"
            >
              <path d="M19.46 11l-3.91-3.91a7 7 0 01-1.69-2.74l-.49-1.47A2.76 2.76 0 0010.76 1 2.75 2.75 0 008 3.74v1.12a9.19 9.19 0 00.46 2.85L8.89 9H4.12A2.12 2.12 0 002 11.12a2.16 2.16 0 00.92 1.76A2.11 2.11 0 002 14.62a2.14 2.14 0 001.28 2 2 2 0 00-.28 1 2.12 2.12 0 002 2.12v.14A2.12 2.12 0 007.12 22h7.49a8.08 8.08 0 003.58-.84l.31-.16H21V11zM19 19h-1l-.73.37a6.14 6.14 0 01-2.69.63H7.72a1 1 0 01-1-.72l-.25-.87-.85-.41A1 1 0 015 17l.17-1-.76-.74A1 1 0 014.27 14l.66-1.09-.73-1.1a.49.49 0 01.08-.70.48.48 0 01.34-.11h7.05l-1.31-3.92A7 7 0 0110 4.86V3.75a.77.77 0 01.75-.75.75.75 0 01.71.51L12 5a9 9 0 002.13 3.5l4.5 4.5H19z"></path>
            </svg>
            <span className="like-text">Like</span>
          </div>

          <div className="commentIcon" onClick={handleShowComment2}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              data-supported-dps="24x24"
              fill="currentColor"
              class="mercado-match"
              width="24"
              height="24"
              focusable="false"
            >
              <path d="M7 9h10v1H7zm0 4h7v-1H7zm16-2a6.78 6.78 0 01-2.84 5.61L12 22v-4H8A7 7 0 018 4h8a7 7 0 017 7zm-2 0a5 5 0 00-5-5H8a5 5 0 000 10h6v2.28L19 15a4.79 4.79 0 002-4z"></path>
            </svg>
            <span className="comment-text">Comment</span>
          </div>
          
          <div className="send-icon" onClick={handleSendToggle2}>
            <img src={sendIcon} style={{ width: 20, height: 20 }} alt="" />
            <span className="send-text">Send</span>
            {sendModalIsOpen2 && <Send onClose= {closeModal2} /* onPost={handlePost} */ />}
          </div>
        </div>
        {/* Second Dummy Posts */}
        {showCommentBox2 && (
        <div className="comment-profile-pic">
          
            <div className="profile-pic-comment">
              <div className="profile-picture">
                <Avatar
                  alt="Sunil Pal"
                  src={(name ==='sunil'|| name === 'Sunil'|| name === 'SUNIL') ? profile_pic : undefined}
                  sx={{ width: 34, height: 34 }}
                />
              </div>

              <div className="profile-name">
                <h5 className="h5_title">{name}</h5>
              </div>
            </div>
          <div className="commentDiv">
              <form onSubmit={(e) => commentPost2(e)} className="postComment">
                <input
                  type="text"
                  placeholder="Post Comment"
                  value={inputs2}
                  onChange={(e) => setInputs2(e.target.value)}
                />
              </form>
              {showCommentReply2 && (
            <div className="comment-reply">
              <div className="reply-profile">
              <Avatar
                  alt="Sunil Pal"
                  src={(name ==='sunil'|| name === 'Sunil'|| name === 'SUNIL') ? profile_pic : undefined}
                  sx={{ width: 34, height: 34 }}
                />
                <div className='reply-comment-secondDiv'>
                    <h5 className="h5_title">{name}</h5>
                    {comments2.map((comment, index) => (
                      <div key={index} className="comment">
                      <span className="showComnt">{comment}</span>
                    </div>
                  ))}
                </div>
            </div>
          </div>
        )}
      </div>
    </div>
    )}
    </div>
    </div>
  );
}

export default Card;