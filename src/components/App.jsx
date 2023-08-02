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


export default App;