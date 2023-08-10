import React from "react";
import "./signup.css";
import instaName from '../../images/name.png';
const Signup=()=>{
    return (
        <div className="signup">
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
                        <input type="text" placeholder="Full Name" />
                    </div>
                    <div className="row">
                        <input type="text" placeholder="Username" />
                    </div>
                    <div className="row">
                        <input type="password" placeholder="Password" />
                    </div>
                    <div className="row">
                        <button>Sign up</button>
                    </div>
                </div>
            </div>
            </div>
        </div>        
    );
}
export default Signup;