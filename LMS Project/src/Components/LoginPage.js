import React from "react";
import { useState, useEffect } from "react";
import "./Login.css";
function Login(){
   const loginFields={
    Username:"",
    Password:""
   };
   const [fieldValues, setFieldValues] = useState(loginFields);
   const [fieldErrors, setFieldErrors] = useState({});
   const [isLoginSubmit, setIsLoginSubmit] = useState(false);

   const handleValueChange = (e) => {
    const { name, value } = e.target;
    setFieldValues({ ...fieldValues, [name]: value });
};
const handleLoginSubmit = (e) => {
            e.preventDefault();
            setFieldErrors(LoginValidate(fieldValues));
            setIsLoginSubmit(true);
        };
useEffect(() => {
    console.log(fieldErrors);
    if (Object.keys(fieldErrors).length === 0 && isLoginSubmit) {
        console.log(fieldValues);
    }
}, [fieldErrors, fieldValues, isLoginSubmit]);

const LoginValidate = (values) =>{
  const errors = {};
  if (!values.Username) {
    errors.Username = "Username is required!";
}
if (!values.Password) {
    errors.Password = "Password is required!";
}
console.log(errors);
return errors;
};
    return (
        <div >
            <div className="login-box">
            <h1>Login Page</h1>
            {Object.keys(fieldErrors).length === 0 && isLoginSubmit ? (
                    <div className="ui-message-success">
                        Logged in successfully
                    </div>
                ) : (
                    console.log("Entered Details", fieldValues)
                )}
                <form onSubmit={handleLoginSubmit}>
                    <div>
                <label>Username</label>
                <input type="text" name="Username" placeholder="Username" value={fieldValues.Username} onChange={handleValueChange}/><br/><br/>
                </div>
                <p>{fieldErrors.Username}</p>
                <div>
                <label>Password</label>
                <input type="password" name="Password" placeholder="Password" value={fieldValues.Password} onChange={handleValueChange}/>
                </div>
                <p>{fieldErrors.Password}</p>
                <div>
                <button className="btn">Login</button>
                </div>
                </form>

            </div>
        
        </div>
    );


}
export default Login;