import React from "react";
import { useState} from "react";
import { Navigate } from "react-router-dom";
import "./Login.css";
import  "../Signup";
import "./AdminPg";
function Login(){
   const loginFields={
    Username:"",
    Password:""
   };
   const [fieldValues, setFieldValues] = useState(loginFields);
   const [fieldErrors, setFieldErrors] = useState({});
   const [isLoginSubmit, setIsLoginSubmit] = useState(false);
   const [gotoSignup,setgotoSignup]=useState(false);
   const [gotoAdmin,setgotoAdmin]=useState(false);

   const handleValueChange = (e) => {
    const { name, value } = e.target;
    setFieldValues({ ...fieldValues, [name]: value });
};
const handleLoginSubmit = (e) => {
            e.preventDefault();
            setFieldErrors(LoginValidate(fieldValues));
            setIsLoginSubmit(true);
        };

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
if (gotoSignup){
    return <Navigate to ="/Signup"/>
}    
if (gotoAdmin) {
    return <Navigate to ="/AdminPg"/>
} 
    return (
        <div className="bg-img">
            <>
            <div className="login-box">
            {Object.keys(fieldErrors).length === 0 && isLoginSubmit ? (
                   setgotoAdmin(true)
                ) : (
                    console.log("Entered Details", fieldValues)
                )}
          
                <form onSubmit={handleLoginSubmit}>
                <h1>Login Page</h1>
                    <div>
                <label>Username</label>
                <input type="text" name="Username" placeholder="Username" value={fieldValues.Username} onChange={handleValueChange}/><br/><br/>
                </div>
                <p style={{marginTop:"-20px",marginLeft:"76px"}}>{fieldErrors.Username}</p>
                <div>
                <label>Password</label>
                <input type="password" name="Password" placeholder="Password" value={fieldValues.Password} onChange={handleValueChange}/>
                </div>
                <p style={{marginLeft:"70px"}}>{fieldErrors.Password}</p>
                <div>
                <button className="btn" style={{ marginRight:"60px", width:"200px"}}>Login</button> <br/>
               A New User? <button className="btn" onClick={()=> {
                    setgotoSignup(true);
                }} style={{marginLeft:"5px",height:"40px"}}>Signup</button>
                </div>
                </form>

            </div>
            </>
        
        </div>
    );


}
export default Login;