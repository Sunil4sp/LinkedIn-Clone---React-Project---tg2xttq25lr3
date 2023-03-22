import React from 'react';
import '../styles/App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './Login';
import Home from './Home';
import NewUser from './NewUser';
import DataApp from './DataApp';
import NotFound from './NotFound';

const App = () => {

  return (
    <div id="main">
    {<BrowserRouter>
      <DataApp>
				<Routes>
					<Route path="/home" element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path="/newuser" element={<NewUser/>}/>
          <Route path="/" element={<Login/>}/>
          <Route path='/*' element={<NotFound/>}/>
				</Routes>
      </DataApp>
		</BrowserRouter>
    }
    
    </div>
  )
}


export default App;