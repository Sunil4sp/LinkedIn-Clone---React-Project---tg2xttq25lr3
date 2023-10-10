import React, { useContext, useState, useEffect } from "react";
import "../styles/home.css";
/* import { useNavigate } from "react-router-dom"; */
import { DataAppContext } from "./DataApp";
import NavBar from "./NavBar";
import LeftSideBar from "./LeftSideBar";
import RightSideBar from "./RightSideBar";
import Avatar from '@mui/material/Avatar';
import profile_pic from '../Images/profile.jpg';
import smallLogo from '../Images/smallLogo.png';
import Card from "./Card";
import PostModal from "./PostModal";

/* import posts from "../mock_backend/Posts"; */
/* import Login from './Login'; */

/* function isAuthenticated() {
  // Check if authentication information is present in storage
  const user = localStorage.getItem("user");
  return !user; // Return true if user information is found
}
console.log(isAuthenticated()); */

const ShareAble = (props) => {
  const localContext = useContext(DataAppContext);
  const { appState } = localContext;
  const name = appState.name;

  const [showCommentBox, setShowCommentBox] = useState(true);
  const [inputs, setInputs] = useState("");
  
  const commentPost = (e) => {
    e.preventDefault();
    let objs = { inputs };
    let tempArr = [...props.posts];
    tempArr[props.index].coment.push(objs);
    /* console.log(tempArr, "temparr"); */
    props.setpost(tempArr);
    setInputs("");
    setShowCommentBox(false);
    /* setShowCommenting(false); */
  };
  return (
    <div>
      {/* {showCommenting && ( */}
      <div className="comment-profile-pic">
       {showCommentBox && ( 
       <div className="profile-pic-comment">
        <div className="profile-picture">
          
          <Avatar
                  alt="Sunil Pal"
                  src= {profile_pic}
                  sx={{ width: 36, height: 36 }}
                />
        </div> 
              
        <div className="profile-name">
          <h5 className="h5_title">{name}</h5>
        </div>
      </div> 
       )}
      <div className="commentDiv">
      
      {showCommentBox && (
        <form onSubmit={commentPost} className="postComment">
          <input
            type="text"
            placeholder="Post Comment"
            value={inputs}
            onChange={(e) => setInputs(e.target.value)}
          />
        </form>
      )}
        {props.posts[props.index].coment.map((data) => (
          <div className="comment-reply">
            <div className="reply-profile">
              <h5 className="h5_title">{name}</h5>
              <span className="showComnt">{data.inputs}</span>
            </div>
          </div>

        ))}
      </div>
      </div>
    </div>
  );
};

function Home({loading}) {
  const localContext = useContext(DataAppContext);
  const { appState } = localContext;
  const { loginStatus } = appState;
  /* const isLoading = appState.isLoading; */

  const [input, setInput] = useState();
  const [post, setPost] = useState([]);
  const [like, setLike] = useState(0);
  const [clicked, setClicked] = useState(false);
  /* const [displayPosts, setDisplayPosts] = useState(posts); */
  const [togglephoto, setTogglePhoto] = useState(false);
  const [toggleevent, setToggleEvent] = useState(false);
  const [togglewriteArticle, setToggleWriteArticle] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handlePhotoToggle = () => {
    setTogglePhoto(!togglephoto);
    
    if (toggleevent === true) {
      setToggleEvent(false);
    }
    if (togglewriteArticle === true) {
      setToggleWriteArticle(false);
    }
  }

  const handleEventToggle = () => {
    setToggleEvent(!toggleevent);
    
    if (togglephoto === true) {
      setTogglePhoto(false);
    }
    if (togglewriteArticle === true) {
      setToggleWriteArticle(false);
    }
  };

   const handleWriteArticleToggle = () => {
    setToggleWriteArticle(!togglewriteArticle);
    
    if (togglephoto === true) {
      setTogglePhoto(false);
    }
    if (toggleevent === true) {
      setToggleEvent(false);
    }
  };

  /* const navigate = useNavigate(); */

  const handleClick = () => {
    const clickedOnce = !clicked;
    setLike(clickedOnce ? like + 1 : like - 1);
    setClicked(clickedOnce);
  };

  /* const submitPost = (e) => {
    if (loginStatus) {
      let obj = { id: post.length, clicked: false, msg: input, coment: [] };
      e.preventDefault();

      if (obj.msg !== "") {
        setPost([obj, ...post]);
        setInput("");
        /* console.log(post); */
      /* } else {
        alert("Please enter a message");
      }
    } else {
      alert("Login to add post & comment");
      navigate("/login");
    }
  };  */

  const deletePost = (index) => {
   /*  let tempArr = post;
    tempArr.splice(index, 1);
    setPost([...tempArr]); */
    let tempArr = post.slice(); // Create a copy of the array
    tempArr.splice(index, 1);
    setPost([...tempArr]);
  };

  /* const [showComments, setShowComments] = useState(false); */
  const [showComments, setShowComments] = useState({});
  
  /* const handleShowComment = () =>{
      setShowComments(!showComments);
  } */
  const handleShowComment = (index) => {
    setShowComments((prevState) => ({
      ...prevState,
      [index]: !prevState[index], // Toggle the state for the specific post index
    }));
  };

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handlePost = (newPost) => {
    setPost([newPost, ...post]);
    console.log("Post:", post);
  };

  /* const handleCloseModal = () => {
    setModalIsOpen(false);
  }; */
/* 
  useEffect(() => {
    // Redirect to the login page if not authenticated
    if (!isAuthenticated()) {
      navigate("/login");
    }
  }, [navigate]); */

  return (
    <> 
     {loading && (
        <div className="loading-screen">
          <div className="loading-animation">
            <p className="loading__text">
              <font color="blue" weight="bold">Linked</font><img src={smallLogo} className="logo_text" alt="in" />
            </p>
            <div className="loading-bar"></div>
          </div>
        </div>
      )} 
    {!loading &&   
    (
    <div className="main">
      <>
        {" "}
        <NavBar />
        <div className="mainContainer">
          <LeftSideBar />
          <div className="MiddleBar">
            <div className="PostShare">
              <div className="user_profile">
                <Avatar
                  alt="Sunil Pal"
                  src= {profile_pic}
                  sx={{ width: 36, height: 36 }}
                />
                {/* <form onSubmit={submitPost} className="form_submit"> */}
                  <input
                    className="postMsg"
                    type="search"
                    placeholder="Start Post"
                    value={input}
                    /* onChange={(e) => setInput(e.target.value)} */
                    onClick={openModal}
                  />
                  {modalIsOpen && <PostModal onClose= {closeModal} onPost={handlePost} />}
                  
                {/* </form> */}
              </div>
              
              <div className="share_box">
                <div className="share_box-1" onClick={handlePhotoToggle}>
                  <i className="fa fa-picture-o photoIcon"></i>
                  <p className="photos">Media</p>
                </div>
                <div className="share_box-2" onClick={handleEventToggle}>
                  <i className="fa fa-calendar eventsIcon"></i>
                  <p className="events">Events</p>
                </div>
                <div className="share_box-3" onClick={handleWriteArticleToggle}>
                  <i className="fa fa-pencil-square-o articleIcon"></i>
                  <p className="article">Write Article</p>
                </div>
              </div>
              <br></br>
              <div className="sections">
                {togglephoto ? (
                  <span className="working_on_div__pad">
                    working on media feature
                  </span>
                ) : (
                  ""
                )}

                {toggleevent ? (
                  <span className="working_on_div__pad">
                    working on event feature
                  </span>
                ) : (
                  ""
                )}
                {togglewriteArticle ? (
                  <span className="working_on_div__pad">
                    working on write article
                  </span>
                ) : (
                  ""
                )}
              </div>
            </div>
            <div>
              {loginStatus &&
                post.map((item, index) => (
                  <div key={item.id}>
                    <div className="postDiv">
                      <div className="postMsg">
                        <Avatar
                          alt="Sunil Pal"
                          src= {profile_pic}
                          sx={{ width: 36, height: 36 }}
                        />
                        {/* <h3>{name}</h3> */}
                        <h4 className="testingHeading">{item.msg}</h4>
                      </div>
                      <div className="shareDetail">
                      <div className="like_button" onClick={handleClick}>
                        <img src="https://static.licdn.com/sc/h/5zhd32fqi5pxwzsz78iui643e"
                        className="fa fa-thumbs-o-up likeArrow"
                         alt="like_pic"/>
                        <span className="shareDetail-like">{like} Like</span>
                      </div>
                      
                      <div className="comment" onClick={() => handleShowComment(index)}>
                      
                        <i
                        className="fa fa-comments commentArrow"></i>
                        <span className="shareDetail-comment">Comment</span>
                      </div>
                      
                      <div className="deleteComment" onClick={() => {
                          deletePost(index);
                        }}>
                        <i
                        className="fa fa-trash commentArrow"></i>
                        <span className="shareDetail-delete">Delete</span>
                      </div>
                      </div>
                      {showComments[index] && (
                      <ShareAble posts={post} setpost={setPost} index={index} />
                      )}
                     
                    </div>
                  </div>
                ))}
            </div>
            <Card />
          </div>
          <RightSideBar />
        </div>
      </>
    </div>
    )} 
    </>
  );
}

export default Home;
