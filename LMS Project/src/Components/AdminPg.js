import React from "react";
import {useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Admin.css";
import { FaBook } from "react-icons/fa";
import { FaRecycle } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { GiBookPile } from "react-icons/gi"; 
import openbook from "../Components/read.png";

function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
}
   
	return (
		<div className="bg">
		<header>
            	<img src={openbook} alt="" className="logo"/>
			<nav ref={navRef}>
			<div className="quote">
					<h4 style={{marginRight:"300px",padding:"0px",fontFamily:"Cursive",fontSize:"21px",fontWeight:"bold"}}>A Room without Books is like a Body without a Soul</h4>
				</div>
				<a href="/#" style={{fontSize:"30px",fontFamily:"Baskerville Old Face",marginTop:"9px",marginLeft:"0px"}}>Home</a>
				<a href="/#" style={{fontSize:"30px", fontFamily:"Baskerville Old Face",marginTop:"9px"}}>Books</a>
				<a href="/#" style={{fontSize:"30px", fontFamily:"Baskerville Old Face",marginTop:"9px"}}>Patrons</a>
				<button className="log-out">LOG OUT</button>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
		<h2 className="heading">WELCOME TO ADMIN DASHBOARD</h2>
		<div className="card-arrange">
     <div className="card">
	 <FaBook  className="books-icon"/>
	 <h4>Total Books</h4>
	 <p>169</p>  
	 </div>
	 <div className="card">
	 <FaRecycle className="books-icon"/>
	 <h4>Books Returned</h4>
	 <p>25</p>  
	 </div>
	 <div className="card">
	 <FaUsers className="books-icon"/>
	 <h4>Registered Users</h4>
	 <p>90</p>  
	 </div>
	 </div>
	 <div>
	 <div className="card">
	 <GiBookPile className="books-icon"/>
	 <h4>Books Borrowed</h4>
	 <p>60</p>  
	 </div>
		</div>

		</div>
	);
};

export default Navbar;