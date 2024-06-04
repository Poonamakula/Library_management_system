import React from "react";
import { useState} from "react";
import { Navigate } from "react-router-dom";
import "./App.css";
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

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };
    const handleSubmit = (e) => {
                e.preventDefault();
                setFormErrors(validate(formValues));
                setIsSubmit(true);
            };   
    const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.username) {
            errors.username = "Username is required!";
        }
        if (!values.email) {
            errors.email = "Email is required!";
        } else if (!regex.test(values.email)) {
            errors.email = "This is not a valid email format!";
        }
        if (!values.phone) {
            errors.phone = "Phone number is required!";
        } else if (values.phone.length < 10 || values.phone.length > 10){
            errors.phone ="Phone number must contain only 10 digits";
        }
        if (!values.address) {
            errors.address = "Address is required!";
        }
        if (!values.password) {
            errors.password = "Password is required!";
        } else if (values.password.length < 6) {
            errors.password = "Password must be more than 6 characters";
        } else if (values.password.length > 10) {
            errors.password = "Password cannot exceed more than 10 characters";
        }
        if (values.password !== values.confirmPassword) {
            errors.confirmPassword = "Those passwords didn’t match. Try again.";
        }
        console.log(errors);
        return errors;
    };
     if (goToLogin){
        return <Navigate to ="/"/>
     } 

    return (
        <div className="bg-Img">
     <>      
        
                {Object.keys(formErrors).length === 0 && isSubmit ? (
                    console.log("Signed in successfully")
                ) : (
                    console.log("Entered Details", formValues)
                )}
               
                   <div className="container">
                  
                <form onSubmit={handleSubmit}>
               <h1>Sign up</h1>
                            <div>
                            <label for="username">Username </label> 
                            <input id="username"
                            className="fix"
                                type="text"
                                name="username"
                                placeholder="Choose a username"
                                value={formValues.username}
                                onChange={handleChange} 
                            />
                        </div>
                        <p className="align">{formErrors.username}</p>
                        <div >
                            <label for="email">Email </label>
                            <input id="email"
                                type="text"
                                name="email"
                                placeholder="Email"
                                value={formValues.email}
                                onChange={handleChange} style={{marginLeft:"110px"}} 
                            />
                        </div>
                        <p style={{marginLeft:"100px"}}>{formErrors.email}</p>
                        <div >
                            <label for="phone">Phone </label>
                            <input id="phone"
                                type="text"
                                name="phone"
                                placeholder="Phone No"
                                value={formValues.phone}
                                onChange={handleChange} style={{marginLeft:"95px"}}
                            />
                        </div>
                        <p  style={{marginLeft:"170px"}}>{formErrors.phone}</p>
                        <div>
                            <label for="Address">Address </label>
                            <input
                                id="Address"
                                type="text"
                                name="address"
                                placeholder="Address"
                                value={formValues.address}
                                onChange={handleChange} style={{marginLeft:"88px"}}
                            />
                     </div>
                        <p style={{marginLeft:"120px"}}>{formErrors.address}</p>
                        <div>
                            <label for="password">Password </label>
                            <input
                             id="password"
                                type="password"
                                name="password"
                                placeholder="Password"
                                value={formValues.password}
                                onChange={handleChange} style={{marginLeft:"80px"}}
                            />
                        </div>
                        <p className="align">{formErrors.password}</p>
                        <div>
                            <label  className="fix2">Confirm Password</label>
                            <input className="cp"
                                type="password"
                                name="confirmPassword"
                                placeholder="Confirm password"
                                value={formValues.confirmPassword}
                                onChange={handleChange} style={{marginRight:"50px"}}
                            />
                        </div>
                        <p className="align">{formErrors.confirmPassword}</p>
                        <button className="button">Submit</button>
                    
                </form>
                <div className="text">
                   Already have an account? 
                    <button onClick={()=>{
                        setGotoLogin(true);
                    }} style={{marginTop:"10px"}} className="login-button">Login</button>
                </div>
            </div>
        </>
        </div>
     
    );
}

export default Signup;