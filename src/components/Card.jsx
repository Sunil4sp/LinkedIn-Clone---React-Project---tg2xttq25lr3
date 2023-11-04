import React from 'react';
import '../styles/card.css';
import sendIcon from '../Images/send-icon.svg';

const Card = () => {

  return (
    <>
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
              Linkedin Clone is a web application built using React and Redux
              that replicates the functionality of the popular professional
              networking site, Linkedin. It allows users to create profiles,
              create posts, like them, and comment on them. The user interface
              is designed to be intuitive and easy to use. The application is
              built with scalability in mind so that it can easily be extended
              to add more features in the future.
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
            <span className="linkedin__engagement">4</span>
          </div>
          <div className="post__engagement--ampiflications">
            <span className="post__engagement--comment">
              <span className="linkedin__engagement">2 comments</span>
              {/*  comments */}
            </span>
            <span className="post__engagement--shares">
              <span className="linkedin__engagement"># shares</span>{" "}
              {/* shares */}
            </span>
          </div>
        </div>
        {/* <div className="post__engagement--comments">
          <div>
            <h4 className='h4_title'>Aditya Chandrakant</h4>
            <p>LinkedIn Clone uses LocalStorage For Logging In!</p>
          </div>
        </div>
        <div className="post__engagement--comments">
          <div>
            <h4 className='h4_title'>Sonu Kumar</h4>
            <p>It uses Mock Backend!</p>
          </div>
        </div> */}
        <div className="post__engagement--comments">
          
          <div className="likeIcon">
            <svg
              class="social-action-bar__icon lazy-loaded"
              data-svg-class-name="social-action-bar__icon--svg"
              aria-hidden="true"
              aria-busy="false"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              id="thumbs-up-outline-medium"
              data-supported-dps="24x24"
              fill="currentColor"
              focusable="false"
              className="social-action-bar__icon--svg lazy-loaded"
              aria-busy="false"
              width="24"
              height="24"
            >
              <path d="M19.46 11l-3.91-3.91a7 7 0 01-1.69-2.74l-.49-1.47A2.76 2.76 0 0010.76 1 2.75 2.75 0 008 3.74v1.12a9.19 9.19 0 00.46 2.85L8.89 9H4.12A2.12 2.12 0 002 11.12a2.16 2.16 0 00.92 1.76A2.11 2.11 0 002 14.62a2.14 2.14 0 001.28 2 2 2 0 00-.28 1 2.12 2.12 0 002 2.12v.14A2.12 2.12 0 007.12 22h7.49a8.08 8.08 0 003.58-.84l.31-.16H21V11zM19 19h-1l-.73.37a6.14 6.14 0 01-2.69.63H7.72a1 1 0 01-1-.72l-.25-.87-.85-.41A1 1 0 015 17l.17-1-.76-.74A1 1 0 014.27 14l.66-1.09-.73-1.1a.49.49 0 01.08-.70.48.48 0 01.34-.11h7.05l-1.31-3.92A7 7 0 0110 4.86V3.75a.77.77 0 01.75-.75.75.75 0 01.71.51L12 5a9 9 0 002.13 3.5l4.5 4.5H19z"></path>
            </svg>
            <span className="like-text">Like</span>
          </div>
        
          <div className="commentIcon">
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
        
          <div className="send-icon">
            <img src={sendIcon} style={{width:20,
            height:20
            }} alt=''/>
            <span className="send-text">Send</span>
          </div>
        
      </div>
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
            <span className="linkedin__engagement">3</span>
          </div>
          <div className="post__engagement--ampiflications">
            <span className="post__engagement--comment">
              <span className="linkedin__engagement">2 comments</span>
              {/* comments */}
            </span>
            <span className="post__engagement--shares">
              <span className="linkedin__engagement"># shares</span>
              {/*  shares */}
            </span>
          </div>
        </div>
        {/* <div className="post__engagement--comments">
          <div>
            <h4 className='h4_title'>Aditya Chandrakant</h4>
            <p>LinkedIn Clone uses LocalStorage For Logging In!</p>
          </div>
        </div>
        <div className="post__engagement--comments">
          <div>
            <h4 className='h4_title'>Sonu Kumar</h4>
            <p>Agreed!</p>
          </div>
        </div> */}
        <div className="post__engagement--comments">
          
            <div className="likeIcon">
              <svg
                class="social-action-bar__icon lazy-loaded"
                data-svg-class-name="social-action-bar__icon--svg"
                aria-hidden="true"
                aria-busy="false"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                id="thumbs-up-outline-medium"
                data-supported-dps="24x24"
                fill="currentColor"
                focusable="false"
                className="social-action-bar__icon--svg lazy-loaded"
                aria-busy="false"
                width="24"
                height="24"
              >
                <path d="M19.46 11l-3.91-3.91a7 7 0 01-1.69-2.74l-.49-1.47A2.76 2.76 0 0010.76 1 2.75 2.75 0 008 3.74v1.12a9.19 9.19 0 00.46 2.85L8.89 9H4.12A2.12 2.12 0 002 11.12a2.16 2.16 0 00.92 1.76A2.11 2.11 0 002 14.62a2.14 2.14 0 001.28 2 2 2 0 00-.28 1 2.12 2.12 0 002 2.12v.14A2.12 2.12 0 007.12 22h7.49a8.08 8.08 0 003.58-.84l.31-.16H21V11zM19 19h-1l-.73.37a6.14 6.14 0 01-2.69.63H7.72a1 1 0 01-1-.72l-.25-.87-.85-.41A1 1 0 015 17l.17-1-.76-.74A1 1 0 014.27 14l.66-1.09-.73-1.1a.49.49 0 01.08-.70.48.48 0 01.34-.11h7.05l-1.31-3.92A7 7 0 0110 4.86V3.75a.77.77 0 01.75-.75.75.75 0 01.71.51L12 5a9 9 0 002.13 3.5l4.5 4.5H19z"></path>
              </svg>
              <span className="like-text">Like</span>
            </div>
          
            <div className="commentIcon">
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
          
            <div className="send-icon">
              <img src={sendIcon} style={{width:20,
              height:20
              }}/>
              <span className="send-text">Send</span>
            </div>
          
        </div>
      </div>
    </>
  );
}

export default Card;