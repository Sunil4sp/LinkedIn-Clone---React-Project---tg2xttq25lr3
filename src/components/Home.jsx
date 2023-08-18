import React, { useContext, useState } from "react";
import "../styles/home.css";

import { useNavigate } from "react-router-dom";
import { DataAppContext } from "./DataApp";
import NavBar from "./NavBar";
import LeftSideBar from "./LeftSideBar";
import RightSideBar from "./RightSideBar";


const ShareAble = (props) => {
  const [inputs, setInputs] = useState("");

  const commentPost = () => {
    let objs = { inputs };
    let tempArr = [...props.posts];
    tempArr[props.index].coment.push(objs);
    console.log(tempArr, "temparr");
    props.setpost(tempArr);
  };
  return (
    <div>
      <div className="commentDiv">
        <input
          type="text"
          placeholder="Post Comment"
          onChange={(e) => setInputs(e.target.value)}
        />
        <button className="comment-btn" onClick={commentPost}>
          Comment
        </button>
        {props.posts[props.index].coment.map((data) => (
          <div>
            <i className="fa fa-user-circle-o comntMe">
              <h5 className="h5">{props.name}</h5>
            </i>
            <p className="showComnt">{data.inputs}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

function Home() {
  const localContext = useContext(DataAppContext);
  const { appState } = localContext;
  const { loginStatus } = appState;

  const [input, setInput] = useState();
  const [post, setPost] = useState([]);
  const [like, setLike] = useState(0);
  const [clicked, setClicked] = useState(false);

  const name = appState.name;
  console.log(name);

  const navigate = useNavigate();

  const handleClick = () => {
    const clickedOnce = !clicked;
    setLike(clickedOnce ? like + 1 : like - 1);
    setClicked(clickedOnce);
  };

  const clickFn = (index) => {
    console.log("clickfn");
    let list = [...post];
    list[index].clicked = true;
    setPost(list);
  };

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

  return (
    <div className="main">
      <>
        {" "}
        <NavBar />
        <div className="mainContainer">
          <LeftSideBar />
          <div className="MiddleBar">
            <div className="PostShare">
              <i className="fa fa-user-circle-o shareIcon">
                <h3>{name}</h3>
              </i>
              <input
                type="search"
                placeholder="Start Post"
                onChange={(e) => setInput(e.target.value)}
              />
              <button onClick={submitPost}>Add Post</button>
              <br></br>
              <i className="fa fa-picture-o photoIcon">
                <p className="photos">Photos</p>
              </i>
              <i className="fa fa-video-camera videosIcon">
                <p className="video">Video</p>
              </i>
              <i className="fa fa-calendar eventsIcon">
                <p className="events">Events</p>
              </i>
              <i className="fa fa-pencil-square-o articleIcon">
                <p className="article">Article</p>
              </i>
            </div>
            {/* <hr></hr> */}
            <div>
              {loginStatus &&
                post.map((item, index) => (
                  <div>
                    <div className="postDiv">
                      <i className="fa fa-user-circle-o postME"></i>
                      <h3>{name}</h3>

                      <hr></hr>
                      <h4 className="testingHeading">{item.msg}</h4>
                      <hr></hr>
                      <i
                        className="fa fa-thumbs-o-up likeArrow"
                        onClick={handleClick}
                      >
                        <span>{like} Like</span>
                      </i>
                      <i
                        className="fa fa-comments commentArrow"
                        onClick={() => {
                          clickFn(index);
                        }}
                      >
                        <span>Comment</span>
                      </i>
                      <i
                        className="fa fa-trash commentArrow"
                        onClick={() => {
                          deletePost(index);
                        }}
                      >
                        <span>Delete</span>
                      </i>
                    </div>
                    {item.clicked && (
                      <ShareAble posts={post} setpost={setPost} index={index} />
                    )}
                  </div>
                ))}
            </div>
          </div>
          <RightSideBar />
        </div>
      </>
    </div>
  );
}

export default Home;
