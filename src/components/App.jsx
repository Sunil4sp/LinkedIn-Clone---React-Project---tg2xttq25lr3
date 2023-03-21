import React from 'react';
import '../styles/App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './Login';
import Header from './Header';
import Home from './Home';
import NewUser from './NewUser';
import DataApp from './DataApp';

const App = () => {

  return (
    <div id="main">
    {<BrowserRouter>
      <DataApp>
      <Header />
				<Routes>
					<Route path="/" element={<Login/>}/>
					<Route path="/home" element={<Home/>}/>
          <Route path="/newuser" element={<NewUser/>}/>
				</Routes>
      </DataApp>
		</BrowserRouter>
    }
    
    </div>
  )
}


export default App;