import React from "react";
import "./login.css";
import instaName from '../../images/name.png';
const Login=()=>{
    return (
        <div className="login">
            <div className="container">
            <div className="form">
                <div className="title">
                    <img src={instaName} alt="" />
                </div>
                <div className="content">
                    <div className="row">
                        <input type="email" placeholder="Email" />
                    </div>
                    <div className="row">
                        <input type="password" placeholder="Password" />
                    </div>
                    <div className="row">
                        <button>Login</button>
                    </div>
                    <div className="hr">
                        <div></div>
                        <span className="or" >OR</span>
                        <div></div>
                    </div>
                    <div className="noAccount">
                        Dont have an Account? 
                        <span className="optSignup"><a href="#">Sign up?</a></span>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
}
export default Login;