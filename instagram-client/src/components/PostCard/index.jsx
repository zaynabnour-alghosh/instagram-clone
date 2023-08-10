import React from "react";
import "./postcard.css";
import likeIcon from '../../images/like.png';
import unlikeIcon from '../../images/unlike.png';
const PostCard=()=>{
    return(
        <div className="card">
            <div className="container">
                <div className="top">
                    <img src="https://tse1.mm.bing.net/th?id=OIP.vIq_QWTLmuEoct13lW83UwHaHa&pid=Api&P=0&h=180" alt="profile" />
                    username_97
                </div>
                <div className="content">
                    <img src="https://tse4.mm.bing.net/th?id=OIP.Z_FV1UU_1YaB7KcXHDa6_gHaKO&pid=Api&P=0&h=180" alt="post" />
                </div>
                <div className="bottom">
                    <div className="likes">
                    <img src={likeIcon} alt="" />
                    <span>13 &nbsp;</span> likes
                    </div>
                    <div className="info">
                        <span>username_97</span> Living in the past for a bit.
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PostCard;