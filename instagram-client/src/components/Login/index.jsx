import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./login.css";
import instaName from '../../images/name.png';
import axios from "axios";
const Login=()=>{
    const navigate = useNavigate();
    const [credentials,setCredentials]=useState({
        email:"Email",
        password:"Password"
    })
    const handleDataChange=(e)=>{
        setCredentials({...credentials,[e.target.name]:e.target.value});
        }
    const handleLogin=async()=>{
        try{
            const response=await axios.post("http://127.0.0.1:8000/api/guest/login",credentials)
            if(response){
                const result=response.data;
                console.log(result.data)
                const userData=result.data
                const token=userData.token
                localStorage.setItem("token",token);
                navigate('/');
            }
           
            
        }catch(e){console.log(e)}
    }
    return (
        <div className="login">
            <div className="login-container">
            <div className="form">
                <div className="title">
                    <img src={instaName} alt="" />
                </div>
                <div className="content">
                    <div className="row">
                        <input type="email" placeholder="Email" name="email" onChange={handleDataChange} />
                    </div>
                    <div className="row">
                        <input type="password" placeholder="Password" name="password" onChange={handleDataChange} />
                    </div>
                    <div className="row">
                        <button onClick={handleLogin}>Login</button>
                    </div>
                    <div className="hr">
                        <div></div>
                        <span className="or" >OR</span>
                        <div></div>
                    </div>
                    <div className="noAccount">
                        Dont have an Account? 
                        <span className="optSignup"><Link to ="/signup" >Sign up?</Link></span>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
}
export default Login;