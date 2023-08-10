import React from "react";
import "./profile.css";


const Profile=()=>{
    return(
        <div className="prof">
            <div className="pro-container">
                <div className="picpro">
                    <img src="https://tse1.mm.bing.net/th?id=OIP.vIq_QWTLmuEoct13lW83UwHaHa&pid=Api&P=0&h=180" alt="profile" />
                </div>
                <div className="pro-info">
                    <div className="info-top">
                        <span>username_97</span>
                        <button>Follow</button>
                    </div>
                    <div className="info-center">
                        <div className="nbPosts">
                            4 Posts
                        </div>
                        <div className="nbFollowers">
                            12 followers
                        </div>
                        <div className="nbFollowings">
                            3 following
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Profile;