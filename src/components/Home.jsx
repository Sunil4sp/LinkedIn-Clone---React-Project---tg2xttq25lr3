import React, { useContext } from 'react'
import smallLogo from '../Images/smallLogo.png'
import '../styles/home.css'
import { useState } from 'react'
import imgTwoLadies from '../Images/twoLadies.png'
import { Link } from 'react-router-dom';
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router-dom";
import { DataAppContext } from "./DataApp";


const ShareAble = (props) => {
  const [inputs, setInputs] = useState("");
  let names = localStorage.getItem('name');
  console.log(names);

  const commentPost = () => {
    let objs = { inputs };
    let tempArr = [...props.posts]
    tempArr[props.index].coment.push(objs);
    console.log(tempArr, "temparr");
    props.setpost(tempArr)
  }
  return (
    <div>
        <div className='commentDiv'>
          <input type="text" placeholder='Post Comment' onChange={e => setInputs(e.target.value)} />
          <button onClick={commentPost}>Comment</button>
          {props.posts[props.index].coment.map((data) => (
            <div>
         <i className="fa fa-user-circle-o comntMe"><h5 className='h5'>{names}</h5></i>
              <p className='showComnt'>{data.inputs}</p>
            </div>
          ))}
        </div>
    </div>
  )
}
function Home() {

  const [input, setInput] = useState();
  const [post, setPost] = useState([]);
  const [like, setLike] = useState(false);
  /* let names = localStorage.getItem('name'); */
  

  const clickFn = (index) => {
    console.log("clickfn")
    let list = [...post]
    list[index].clicked = true;
    setPost(list);
  }

  const submitPost = (e) => {
    let obj = { id: post.length, clicked: false, msg: input, coment: [] };
    e.preventDefault();
    setPost([obj, ...post])
    setInput("");
    console.log(post)
  }

  const deletePost = (index) => {
    let tempArr = post;
    console.log(index);
    tempArr.splice(index, 1);
    setPost([...tempArr]);
  }

  const localContext = useContext(DataAppContext);
  const { appState, setAppState } = localContext;
  const { username, loginStatus } = appState;
  const {name, setName} = appState;
  const navigate = useNavigate();

  const logoutFn = () => {
    //update context variable
    setAppState({
      ...appState,
      loginStatus: false,
      username: "",
      name:''
    });
    navigate("/login");
  };

  return (
    <div>
      <nav className='navStart'>
        <img className='smallLogo' src={smallLogo} alt='small-logo'/>
        <input className='input1' type="search" placeholder='Search ' />
        <i className="fa fa-home faIconsIcon"><p className='homeIcon'>Home</p></i>
        <i className="fa fa-users faIcons"><p className='networkIcon'>My Network</p></i>
        <i className="fa fa-briefcase faIcons" ><p className='jobsIcon'>Jobs</p></i>
        <i className="fa fa-commenting-o faIcons" ><p className='msgIcon'>Messaging</p></i>
        <i className="fa fa-bell-o faIcons" ><p className='notificationsIcon'>Notifications</p></i>
        <i className="fa fa-user-circle-o faIcons" ><p className='meIcon'>
          <Navbar variant="light">
        <Container>
          <Nav className="me-auto">
            {loginStatus ? (
              <>
                <Nav.Link onClick={logoutFn}><i class="fa fa-sign-out" aria-hidden="true">Logout </i></Nav.Link>&ensp;&ensp;&ensp;
                {loginStatus && <Nav.Link className='user-name'> Hi {name} !</Nav.Link>}
              </>
            ) : (
              <>
                <Nav.Link>
                  <Link to="/login"><i class="fa fa-sign-in" aria-hidden="true"><p className='meIcon'>Login</p></i></Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/newuser"><i class="fa fa-user-plus" aria-hidden="true"><p className='meIcon'>Register</p></i></Link>
                </Nav.Link>
              </>
            )}
          </Nav>
        </Container>
      </Navbar></p></i>
        <i className="fa fa-th faIcons"><p>Work</p></i>

        

      </nav>
      <div className='mainContainer'>
        <div className='leftSideBar'>
          <div className='upperDiv'>
            <div className='camera'>
              <i className="fa fa-camera cameraIcon"></i>

            </div>
            <h3 className='h3'>Welcome, {name}</h3>
            <hr></hr>
            <p className='connections'>Connections &ensp; 530</p>
            <p className='growYour'>Grow your network</p>

            <hr></hr>
            <p className='access'>Access exclusive Tools & insights</p>
            <hr></hr>
            <i className="fa fa-bookmark bookmark"> My Items</i>
          </div>
          <div className='lowerDiv'>
            <p>Recent</p>
            <p>CloudComputing</p>
            <h5>Groups</h5>
            <h5>Events</h5>
            <h5>Followed Hashtags</h5>
            <hr></hr>
            <p>Discover more</p>
          </div>
        </div>
        <div className='MiddleBar'>
          <div className='PostShare'>
            <i className="fa fa-user-circle-o shareIcon" ></i>
            <input type="search" placeholder=' Start Post' onChange={e => setInput(e.target.value)} />
            <button onClick={submitPost}>Add Post</button>
            <br></br>
            <i className="fa fa-picture-o photoIcon"><p className='photos'>Photos</p></i>
            <i className="fa fa-video-camera videosIcon" ><p className='video'>Video</p></i>
            <i className="fa fa-calendar eventsIcon" ><p className='events'>Events</p></i>
            <i className="fa fa-pencil-square-o articleIcon"><p className='article'>Article</p></i>
          </div>
          <hr></hr>
          <div>
            {post.map((item, index) => (
              <div>
                <div className='postDiv'>
                  <i className="fa fa-user-circle-o postME" ></i>
                  <h2>{name}</h2>
                  {/* <p className='testingPara'></p> */}
                  <hr></hr>
                  <h3 className='testingHeading'>{item.msg}</h3>
                  <hr></hr>
                  {like ? <i className="fa fa-thumbs-o-down dislikeArrow"></i> : <i className="fa fa-thumbs-o-up likeArrow"></i>}
                  <span onClick={() => setLike(!like)}>{like ? <span>DisLike</span> : <span>Like</span>}</span>
                  <i className="fa fa-comments commentArrow" onClick={() => { clickFn(index) }}><span>Comment</span></i>
                  <i className="fa fa-trash commentArrow" onClick={() => { deletePost(index) }} ><span>Delete</span></i>
                </div>
                {item.clicked && <ShareAble posts={post} setpost={setPost} index={index} />}
              </div>
            ))}

          </div>
        </div>
        <div className='RightSideBar'>
          <div className='upperRight'>
            <h5>Add to Your Feed</h5>
            <p>#Linkedln</p>
            <button>Follow</button>
            <p>#Website</p>
            <button>Follow</button><br></br>
            <Link to=''>View all Recommendations</Link>
          </div>
          <div className='middleRight'>
            <img src={imgTwoLadies} alt='pic'/>
          </div>
          <div className='lowerRight'>
            <h4>Design and develop by Sunil Pal</h4>
            <Link to='https://github.com/Sunil4sp/LinkedIn-Clone---React-Project---tg2xttq25lr3.git' target='_blank'>Github profile link</Link>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Home;