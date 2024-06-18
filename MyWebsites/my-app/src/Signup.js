import React from "react";
import { useState} from "react";
import { Navigate } from "react-router-dom";
import "./App.css";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import "./Components/LoginPage";
function Signup() {
    const [goToLogin,setGotoLogin]=useState(false)
    const initialValues = { 
        username: "",
        email: "",
        phone:"",
        address:"",
        password: "",
        confirmPassword: "",
    };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showPassword1, setShowPassword1] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
  setFormValues({ ...formValues, [name]: value });
    const regex= /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    const capitalLetterRegex = /[A-Z]/;
    const specialCharacterRegex = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/;
  if (name === 'username') {
    if (!value) {
      setFormErrors({ ...formErrors, username: 'Username is required!' });
    } else {
      setFormErrors({ ...formErrors, username: '' });
    }
  } else if (name === 'email') {
    if (!value) {
      setFormErrors({ ...formErrors, email: 'Email is required!' });
    } else if (!regex.test(value)) {
      setFormErrors({ ...formErrors, email: 'This is not a valid email format!' });
    } else {
      setFormErrors({ ...formErrors, email: '' });
    }
  } else if (name === 'phone') {
    if (!value) {
      setFormErrors({ ...formErrors, phone: 'Phone number is required!' });
    } else if (value.length < 10 || value.length > 10) {
      setFormErrors({ ...formErrors, phone: 'Phone number must contain only 10 digits' });
    } else {
      setFormErrors({ ...formErrors, phone: '' });
    }
  } else if (name === 'address') {
    if (!value) {
      setFormErrors({ ...formErrors, address: 'Address is required!' });
    } else {
      setFormErrors({ ...formErrors, address: '' });
    }
  } else if (name === 'password') {
    if (!value) {
      setFormErrors({ ...formErrors, password: 'Password is required!' });
    } else if (value.length < 6) {
      setFormErrors({ ...formErrors, password: 'Password must be more than 6 characters' });
    } else if (value.length > 10) {
      setFormErrors({ ...formErrors, password: 'Password cannot exceed more than 10 characters' });
    }  else if (!capitalLetterRegex.test(value)) {
      setFormErrors({ ...formErrors,password: 'Password must contain at least one capital letter'}); 
    } else if (!specialCharacterRegex.test(value)) {
      setFormErrors({ ...formErrors,  password: 'Password must contain at least one special character'}); }
    else {
      setFormErrors({ ...formErrors, password: '' });
    }
  } else if (name === 'confirmPassword') {
    if (!value) {
      setFormErrors({ ...formErrors, confirmPassword: 'Confirm password is required!' });
    } else if (value !== formValues.password) {
      setFormErrors({ ...formErrors, confirmPassword: 'Those passwords didn’t match. Try again.' });
    } else {
      setFormErrors({ ...formErrors, confirmPassword: '' });
    }
  }
  console.log(formErrors);
    };
    const handleSubmit = (e) => {
                e.preventDefault();
                setIsSubmit(true);   
                Object.keys(formErrors).length === 0 && isSubmit ? (
                 console.log("Submitted successfully",formValues)
              ) : (
                  console.log("Entered Details", formValues)
              )

    } 
     if (goToLogin){
        return <Navigate to ="/"/>
     } 
     const toggleShowPassword1 = () => {
      setShowPassword(!showPassword);
    };
    const toggleShowPassword2 = () => {
      setShowPassword1(!showPassword1);
    };
     return (
      <div className="bg-Img">
      <div className="container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
          <div className="form-group">
              <label htmlFor="username">Username:</label>
              <input
                  type="text"
                  id="username"
                  name="username"
                  value={formValues.username}
                  onChange={handleChange}
                  required
              />
            <span><p className="error">{formErrors.username}</p> </span> 
          </div>
          <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                  type="email"
                  id="email"
                  name="email"
                  value={formValues.email}
                  onChange={handleChange}
                  required
              />
              <p className="error">{formErrors.email}</p> 
          </div>
          <div className="form-group">
              <label htmlFor="phone">Phone:</label>
              <input
                  type="text"
                  id="phone"
                  name="phone"
                  value={formValues.phone}
                  onChange={handleChange}
                  required
              />
              <p className="error">{formErrors.phone}</p> 
          </div>
          <div className="form-group">
              <label htmlFor="address">Address:</label>
              <input
                  type="text"
                  id="address"
                  name="address"
                  value={formValues.address}
                  onChange={handleChange}
                  required
              />
              <p className="error">{formErrors.address}</p> 
          </div> 
          <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input
                   type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  value={formValues.password}
                  onChange={handleChange}
                  required
              />
                  <span onClick={toggleShowPassword1}>
                          {showPassword ? <FaEye className="eye-icon"/> : <FaEyeSlash  className="eye-icon"/>}
                            </span>
              <p className="error">{formErrors.password}</p> 
          </div>
          <div className="form-group">
              <label htmlFor="confirm password">Confirm Password:</label>
              <input
                 type={showPassword1 ? "text" : "password"}   
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formValues.confirmPassword}
                  onChange={handleChange}
                  required
              />
               <span onClick={toggleShowPassword2}>
                         {showPassword1 ? <FaEye className="eye-icon" /> : <FaEyeSlash  className="eye-icon"/>}
                        </span>
              <p className="error">{formErrors.confirmPassword}</p> 
          </div>
          <div className="form-group">
              <button type="submit" className="sign-up-button">Sign Up</button>
             <p className="text"> Already have an account ?</p> 
              <button onClick={() => setGotoLogin(true)} className="Login-button">Login</button>
          </div>
      </form>
  </div>
  
  </div>
     );
    
}

export default Signup;



