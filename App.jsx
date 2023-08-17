<<<<<<< HEAD
import React from 'react';
import '../styles/Login.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Home from './Home';
import NewUser from './NewUser';

/* import NotFound from './NotFound'; */
import MyNetwork from './MyNetwork';
import MyJob from './MyJob';
import Messaging from './Messaging';
import NavBar from './NavBar';
import Notification from './Notification';
/* import DataApp from './DataApp'; 
import { DataAppContext } from "./DataApp";*/

const App = () => {
  
  /* const localContext = useContext(DataAppContext);
  const { appState } = localContext;
  const { loginStatus } = appState;

   const navigate = useNavigate();  

  console.log(appState.loginStatus);*/

  return (
    <div id="main">
    <BrowserRouter>
      {/* <DataApp> 
      <Login />
        {/* {loginStatus && <> 
          {/* <NavBar /> */}
				<Routes>
					<Route path="/home" element={<Home />}/>
          <Route path='/navbar' element={<NavBar />}/>
          <Route path='/login' element={<Login />}/>
          <Route path="/newuser" element={<NewUser />}/>
          <Route path='/mynetwork' element={<MyNetwork />} />
          <Route path='/myjob' element={<MyJob />} />
          <Route path='/messaging' element={<Messaging />} />
          <Route path='/notification' element={<Notification />} />
          <Route path="/" element={<Login />}/>
          <Route path='/*' element={<Login/>}/>
          
				</Routes>
        {/*</>
        }
       </DataApp> */}
		</BrowserRouter>
    </div>
  )
}


=======
import React from 'react';
import '../styles/App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './Login';
import Home from './Home';
import NewUser from './NewUser';
import DataApp from './DataApp';
import NotFound from './NotFound';
import MyNetwork from './MyNetwork';
import MyJob from './MyJob';
import Messaging from './Messaging';
import NavBar from './NavBar';

const App = () => {

  return (
    <div id="main">
    <BrowserRouter>
      <DataApp>
        <NavBar/>
				<Routes>
					<Route path="/home" element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path="/newuser" element={<NewUser/>}/>
          <Route path='/mynetwork' element={<MyNetwork/>} />
          <Route path='/myjob' element={<MyJob />} />
          <Route path='/messaging' element={<Messaging />} />
          <Route path="/" element={<Login/>}/>
          <Route path='/*' element={<NotFound/>}/>
				</Routes>
      </DataApp>
		</BrowserRouter>
    </div>
  )
}


>>>>>>> bf76f83fbe40d6361d726c68f6a8852f428b8d64
export default App;