import './App.css';
import React from 'react';
import {Route, Routes, BrowserRouter as Router} from "react-router-dom";
import Signup from './Signup' ;
import Login from './Components/LoginPage';
function App(){
  return (
    <div>
    <Router>
      <Routes>
        <Route path="/" element={<Signup/>}/>
        <Route path="/LoginPage" element={<Login/>}/>
      </Routes>
    </Router>
    </div>
  );
}








export default App