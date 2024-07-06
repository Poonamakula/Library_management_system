// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Admin from "./Components/AdminPg";
import ManageBooks from './Components/ManageBooks';
import Signup from './Signup';
import Login from './Components/LoginPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/Signup" element={<Signup />} />
          <Route path="/" element={<Login/>}/>
          <Route path="/AdminPg" element={< Admin/>}/>
          <Route path="/ManageBooks" element={< ManageBooks/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
