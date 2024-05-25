import React from "react";
import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import "./App.css";
import "./Components/LoginPage";
function Signup() {
    const [goToLogin,setGotoLogin]=React.useState(false)
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
    useEffect(() => {
        console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(formValues);
        }
    }, [formErrors, formValues, isSubmit]);
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
        } else if (values.password.length < 4) {
            errors.password = "Password must be more than 4 characters";
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
        return <Navigate to ="/LoginPage"/>
     }

    return (
        <div className="bg-Img">
     <>      
            <div className="container">
                {Object.keys(formErrors).length === 0 && isSubmit ? (
                    <div className="ui message success">
                        Signed in successfully
                    </div>
                ) : (
                    console.log("Entered Details", formValues)
                )}

                <form onSubmit={handleSubmit}>
                    <h1>Sign Up</h1>
                    <div className="ui form">
                        <div className="field">
                            <label>Username</label>
                            <input
                                type="text"
                                name="username"
                                placeholder="Choose a username"
                                value={formValues.username}
                                onChange={handleChange}
                            />
                          
                        </div>
                        <p>{formErrors.username}</p>
                        <div className="field">
                            <label>Email</label>
                            <input
                                type="text"
                                name="email"
                                placeholder="Email"
                                value={formValues.email}
                                onChange={handleChange}
                            />
                       
                        </div>
                        <p>{formErrors.email}</p>
                        <div className="field">
                            <label>Phone</label>
                            <input
                                type="text"
                                name="phone"
                                placeholder="Phone No"
                                value={formValues.phone}
                                onChange={handleChange}
                            />
                        </div>
                        <p>{formErrors.phone}</p>
                        <div className="field">
                            <label>Address</label>
                            <input
                                type="text"
                                name="address"
                                placeholder="Address"
                                value={formValues.address}
                                onChange={handleChange}
                            />
                        </div>
                        <p>{formErrors.address}</p>
                        <div className="field">
                            <label>Password</label>
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                value={formValues.password}
                                onChange={handleChange}
                            />
                        </div>
                        <p>{formErrors.password}</p>
                        <div className="field">
                            <label>Confirm Password</label>
                            <input
                                type="password"
                                name="confirmPassword"
                                placeholder="Confirm password"
                                value={formValues.confirmPassword}
                                onChange={handleChange}
                            />
                        </div>
                        <p>{formErrors.confirmPassword}</p>
                        <button className="fluid ui button blue">Submit</button>
                    </div>
                </form>
                <div className="text">
                    Already have an account? 
                    <button onClick={()=>{
                        setGotoLogin(true);
                    }}>Login</button>
                </div>
            </div>
        </>
        </div>
     
    );
}

export default Signup;