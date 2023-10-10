import React from 'react';
/* import { DataAppContext } from "./DataApp"; */
import '../styles/card.css';
/* import posts from "../mock_backend/Posts"; */

const Card = () => {

/*     const localContext = useContext(DataAppContext);
    const { appState } = localContext;
    const name = appState.name; */

/*     const [comment, setComment] = useState("");
    const [flag, setFlag] = useState(false);
    const [bg, setBg] = useState('grey');
    const [togglesend, setToggleSend] = useState(false);
    const [toggleshare, setToggleShare] = useState(false); */

    /* const toggleLike = () => {
      console.log(e.likes);
      if (e.likes.has(name)) {
        e.likes.delete(name);
        posts[posts.indexOf(e)].likes.delete(name);
        setBg('grey');
        if (togglesend === true) {
          setToggleSend(false);
        }
        if (toggleshare === true) {
          setToggleShare(false);
        }
      } else {
        e.likes.add(name);
        posts[posts.indexOf(e)].likes.add(name);
        setBg('blue');
        if (togglesend === true) {
          setToggleSend(false);
        }
        if (toggleshare === true) {
          setToggleShare(false);
        }
      }
      display([...posts]);
    }; */
  
    /* const handleComment = () => {
      console.log(comment);
      if (comment === "") {
        setFlag(true);
        console.log("Please Comment")
        console.log("true");
      }
      else {
        setFlag(false)
        console.log("false");
        posts[posts.indexOf(e)].comments.push({
          name: appState.name,
          comment: comment,
        });
        display([...posts]);
        setComment("");
      }
      
    }; */
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
              <span className="linkedin__engagement"># shares</span> {/* shares */}
            </span>
          </div>
        </div>
        <div className="post__engagement--comments">
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
              <span className="linkedin__engagement"># shares</span>{/*  shares */}
            </span>
          </div>
        </div>
        <div className="post__engagement--comments">
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
        </div>
      </div>
    </>
  );
}

export default Card;