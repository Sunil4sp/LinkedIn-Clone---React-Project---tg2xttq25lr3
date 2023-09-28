import React, { useState } from 'react';
import '../styles/card.css';
import posts from "../mock_backend/Posts";

const Card = (e) => {
    const [comment, setComment] = useState("");
  return (
        <div className="post libd">
      <div className="post__header">
        <div className="account__avatar">
          <div className="account__details">{e.initial}</div>
        </div>
        <div className="post__info">
          <h2 className="random__name">{e.name}</h2>
          <p>{e.description}</p>
        </div>
      </div>

      <div className="post__body">
        <div className="post__message">
          <p>{e.post}</p>
        </div>
        <div className="post__creative">
          {/* <img src="https://picsum.photos/560?random=3" alt="postImage" /> */}
        </div>
        <div className="post__summary"></div>
      </div>

      <div className="post__engagement--container">
        <div className="post__engagement--metrics">
          <img
            className=""
            src="https://static-exp1.licdn.com/sc/h/8ekq8gho1ruaf8i7f86vd1ftt"
            alt="like"
          />
          <span className="linkedin__engagement">{e.likes.size}</span>
        </div>
        <div className="post__engagement--ampiflications">
          <span className="post__engagement--comment">
            <span className="linkedin__engagement">{e.comments.length} </span>
            comments
          </span>
          <span className="post__engagement--shares">
            <span className="linkedin__engagement">#</span> shares
          </span>
        </div>
      </div>
      <div className="post__engagement--comments">
        {e.comments.map((commentUser) => (
          <div>
            <h4>{commentUser.name}</h4>
            <p>{commentUser.comment}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Card;