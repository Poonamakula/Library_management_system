import './App.css';
import React from 'react';
import {Route, Routes, BrowserRouter as Router} from "react-router-dom";
import Signup from './Signup' ;
import Login from './Components/LoginPage';
import Admin from "./Components/AdminPg";
function App(){
  return (
    <div>
    <Router>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/Signup" element={<Signup/>}/>
        <Route path="/AdminPg" element={<Admin/>}/>
      </Routes>
    </Router>
    </div>
  );
}








export default App