import React from "react";
import "./sidebar.css";
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
                    <img src={homeIcon} alt="" />Home
                </div>
                <div className="icon">
                    <img src={searchIcon} alt="" />Search
                </div>
                <div className="icon">
                    <img src={postIcon} ></img>Create
                </div>
                <div className="icon">
                    <img src={profileIcon} alt="" /> Profile
                </div>
            </div>
           </div>
        </div>
    );
}
export default SideBar;