import React, { useContext, useState } from "react";
import "../styles/home.css";

import { useNavigate } from "react-router-dom";
import { DataAppContext } from "./DataApp";
import NavBar from "./NavBar";
import LeftSideBar from "./LeftSideBar";
import RightSideBar from "./RightSideBar";
import Avatar from '@mui/material/Avatar';
import profile_pic from '../Images/profile.jpg';


const ShareAble = (props) => {
  const localContext = useContext(DataAppContext);
  const { appState } = localContext;
  const name = appState.name;

  const [showCommentBox, setShowCommentBox] = useState(true);
/*   const [showCommenting, setShowCommenting] = useState(true); */
  const [inputs, setInputs] = useState("");
  

  const commentPost = (e) => {
    e.preventDefault();
    let objs = { inputs };
    let tempArr = [...props.posts];
    tempArr[props.index].coment.push(objs);
    console.log(tempArr, "temparr");
    props.setpost(tempArr);
    setInputs("");
    setShowCommentBox(false);
    /* setShowCommenting(false); */
  };
  return (
    <div>
      {/* {showCommenting && ( */}
      <div className="comment-profile-pic"/*  onClick={() => setShowCommenting(showCommenting)} */>
       {showCommentBox && ( 
       <div className="profile-pic-comment">
        <div className="profile-picture">
          {/* <i className="fa fa-user-circle-o comntMe"></i> */}
          <Avatar
                  alt="Sunil Pal"
                  src= {profile_pic}
                  sx={{ width: 36, height: 36 }}
                />
        </div> 
              
        <div className="profile-name">
          <h5>{name}</h5>
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
              {/* <i className="fa fa-user-circle-o comntMe"></i> */}
              {/* <Avatar
                  alt="Sunil Pal"
                  src= {profile_pic}
                  sx={{ width: 30, height: 30 }}
                /> */}
              <h5 className="h5">{name}</h5>
            </div>
            <span className="showComnt">{data.inputs}</span>
          </div>
        ))}
      </div>
      </div>
      {/* )} */}
    </div>
  );
};

function Home({loading}) {
  const localContext = useContext(DataAppContext);
  const { appState } = localContext;
  const { loginStatus } = appState;

  const [input, setInput] = useState();
  const [post, setPost] = useState([]);
  const [like, setLike] = useState(0);
  const [clicked, setClicked] = useState(false);

  const [togglephoto, setTogglePhoto] = useState(false);
  const [toggleevent, setToggleEvent] = useState(false);
  const [togglewriteArticle, setToggleWriteArticle] = useState(false);

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

  const name = appState.name;
  console.log(name);

  const navigate = useNavigate();

  const handleClick = () => {
    const clickedOnce = !clicked;
    setLike(clickedOnce ? like + 1 : like - 1);
    setClicked(clickedOnce);
  };

/*   const clickFn = (index) => {
    console.log("clickfn");
    let list = [...post];
    list[index].clicked = true;
    setPost(list);
  }; */

  const submitPost = (e) => {
    if (loginStatus) {
      let obj = { id: post.length, clicked: false, msg: input, coment: [] };
      e.preventDefault();

      if (obj.msg !== "") {
        setPost([obj, ...post]);
        setInput("");
        console.log(post);
      } else {
        alert("Please enter a message");
      }
    } else {
      alert("Login to add post & comment");
      navigate("/login");
    }
  };

  const deletePost = (index) => {
    let tempArr = post;
    console.log(index);
    tempArr.splice(index, 1);
    setPost([...tempArr]);
  };

  const [showComments, setShowComments] = useState(false);

  const handleShowComment = () =>{
      setShowComments(!showComments);
  }

  return (
    <>
    {loading && (
        <div class="loading-screen">
          <div class="loading-animation">
            {/* <img
              src="https://image.flaticon.com/icons/svg/1409/1409945.svg"
              alt=""
              class="logo"
            /> */}
            <p className="loading__text">
              Linked<span className="logo_text">in</span>
            </p>
            <div class="loading-bar"></div>
          </div>
        </div>
      )}
    {!loading && (  
    <div className="main">
      <>
        {" "}
        <NavBar />
        <div className="mainContainer">
          <LeftSideBar />
          <div className="MiddleBar">
            <div className="PostShare">
              <div className="user_profile">
                {/* <i className="fa fa-user-circle-o shareIcon"></i> */}
                <Avatar
                  alt="Sunil Pal"
                  src= {profile_pic}
                  sx={{ width: 36, height: 36 }}
                />
                <form onSubmit={submitPost} className="form_submit">
                  <input
                    type="search"
                    placeholder="Start Post"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                  />
                </form>
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
            </div>
            <div>
              {loginStatus &&
                post.map((item, index) => (
                  <div>
                    <div className="postDiv">
                      {/* <i className="fa fa-user-circle-o postME"></i> */}
                      <Avatar
                        alt="Sunil Pal"
                        src= {profile_pic}
                        sx={{ width: 36, height: 36 }}
                      />
                      {/* <h3>{name}</h3> */}
                      <h4 className="testingHeading">{item.msg}</h4>
                      
                      <div className="shareDetail">
                      <div className="like_button" onClick={handleClick}>
                        <img src="https://static.licdn.com/sc/h/5zhd32fqi5pxwzsz78iui643e"
                        className="fa fa-thumbs-o-up likeArrow"
                         alt="like_pic"/>
                        <span>{like}Like</span>
                      </div>
                      
                      <div className="comment" onClick={handleShowComment}>
                      
                        <i
                        className="fa fa-comments commentArrow"></i>
                        <span>Comment</span>
                      </div>
                      
                      <div className="deleteComment" onClick={() => {
                          deletePost(index);
                        }}>
                        <i
                        className="fa fa-trash commentArrow"></i>
                        <span>Delete</span>
                      </div>
                      </div>
                      {showComments && (
                      <ShareAble posts={post} setpost={setPost} index={index} />
                      )}
                     
                    </div>
                  </div>
                ))}
            </div>
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
