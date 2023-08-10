import React from "react";
import "./sidebar.css";

import { Link } from "react-router-dom";
import instaName from '../../images/name.png';
import homeIcon from '../../images/home.png';
import searchIcon from '../../images/search.png';
import postIcon from '../../images/create.png';
import profileIcon from '../../images/pro.png';
const SideBar=()=>{
    
    return (
        <div className="sidebar">
           <div className="sidebar-container">
            <div className="header">
            <img src={instaName} alt="" />
            </div>
            <div className="nav">
                <div className="icon">
                    <img src={homeIcon} alt="home" />
                    <Link to="/home">
                    Home
                    </Link>
                </div>
                <div className="icon">
                    <img src={searchIcon} alt="search" />
                    <Link to="/search">
                    Search
                    </Link>
                    
                </div>
                <div className="icon">
                    <img src={postIcon} alt="post"></img>
                    <Link to="/createPost">
                    Create
                    </Link>                    
                </div>
                <div className="icon">
                    <img src={profileIcon} alt="profile" />
                    <Link to="/profile">
                     Profile
                    </Link>
                    
                </div>
                <div className="icon">
                    <Link to="/login">
                     Logout
                    </Link>
                    
                </div>
            </div>
           </div>
        </div>
    );
}
export default SideBar;