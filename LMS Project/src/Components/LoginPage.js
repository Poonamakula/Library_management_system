import React from "react";
import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import "./Login.css";
import "./AdminPg";
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
const [gotoAdmin,setgotoAdmin]=useState(false);

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
if (gotoAdmin){
    return <Navigate to ="/AdminPg"/>
}
    return (
        <div className="bg-img">
            <>
            <div className="login-box">
            {Object.keys(fieldErrors).length === 0 && isLoginSubmit ? (
                    <div className="ui-message-success">
                        Logged in successfully
                    </div>
                ) : (
                    console.log("Entered Details", fieldValues)
                )}
          
                <form onSubmit={handleLoginSubmit}>
                <h1>Login Page</h1>
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
                <button className="btn" onClick={()=> {
                    setgotoAdmin(true);
                }}>Login</button>
                </div>
                </form>

            </div>
            </>
        
        </div>
    );


}
export default Login;