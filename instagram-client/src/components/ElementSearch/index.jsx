import React from "react";
import "./element.css";
import likeIcon from '../../images/like.png';
import unlikeIcon from '../../images/unlike.png';
const ElemetSearch=()=>{
    return(
        <div className="element">
            <div className="row">
                <img src="https://tse1.mm.bing.net/th?id=OIP.vIq_QWTLmuEoct13lW83UwHaHa&pid=Api&P=0&h=180" alt="profile" />
                <div className="info">
                    <span className="uName"> username_97</span>
                   
                    <span className="details">Full Name Goes here</span>
                </div>
            </div>
        </div>

    );
}
export default ElemetSearch;