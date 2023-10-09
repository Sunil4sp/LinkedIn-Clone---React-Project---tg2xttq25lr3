import React, { useState } from 'react';
import '../styles/Login.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Home from './Home';
import NewUser from './NewUser';
import Refresh from './Refresh';
import MyNetwork from './MyNetwork';
import MyJob from './MyJob';
import Messaging from './Messaging';
import NavBar from './NavBar';
import Notification from './Notification';

const App = () => {
  const [loading, setLoading] = useState(true);
  const handleLoading = () => {
    setTimeout(() => {
      setLoading(false);
      }, 2000);
  }

  return (
    <div id="main">
    <BrowserRouter>
        {/* <Refresh /> */}
				<Routes>
					<Route path="/home" element={<Home loading={loading} />}/>
          <Route path='/navbar' element={<NavBar />}/>
          <Route path='/login' element={<Login handleLoading={handleLoading}/>}/>
          <Route path="/newuser" element={<NewUser />}/>
          <Route path='/mynetwork' element={<MyNetwork />} />
          <Route path='/myjob' element={<MyJob />} />
          <Route path='/messaging' element={<Messaging />} />
          <Route path='/notification' element={<Notification />} />
          <Route path="/" element={<Login handleLoading={handleLoading} />}/>
          <Route path='/*' element={<Login handleLoading={handleLoading} />}/>
				</Routes>
		</BrowserRouter>
    </div>
  )
}


export default App;