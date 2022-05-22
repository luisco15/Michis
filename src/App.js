import './App.css';
import React from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Home from './Home';
import Login from './components/Login/Login'
import SignUp from './components/SingUp/SingUp'

function App() {
  
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/SignUp" element={<SignUp/>}></Route>
        </Routes>
      </div>
    </Router>
  );  
}

export default App;