import React from "react";
import { useState } from "react";
import "./signup.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import instaName from '../../images/name.png';
const Signup=()=>{
    const navigate = useNavigate();
    const [data,setData]=useState({
        email:"Email",
        name:"Full Name",
        username:"Username",
        password:"Password"
    })
    const handleDataChange=(e)=>{
        setData({...data,[e.target.name]:e.target.value});
        }

    const handleSignup=async()=>{
        try{
            const response=await axios.post("http://127.0.0.1:8000/api/guest/register",data)
            if(response){
                const result=response.data;
                console.log(result)
                navigate('/');
            }
            
            
        }catch(e){console.log(e)}
    }





    return (
        <div className="signup">
            <div className="container">
            <div className="form">
                <div className="title">
                    <img src={instaName} alt="" />
                </div>
                <div className="content">
                    <div className="row">
                        <input type="email" placeholder="Email" name="email"  onChange={handleDataChange}/>
                    </div>
                    <div className="row">
                        <input type="text" placeholder="Full Name" name="name" onChange={handleDataChange}/>
                    </div>
                    <div className="row">
                        <input type="text" placeholder="Username" name="username" onChange={handleDataChange}/>
                    </div>
                    <div className="row">
                        <input type="password" placeholder="Password" name="password" onChange={handleDataChange}/>
                    </div>
                    <div className="row">
                        <button onClick={handleSignup}>Sign up</button>
                    </div>
                </div>
            </div>
            </div>
        </div>        
    );
}
export default Signup;