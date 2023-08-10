import React from "react";
import "./account.css";
// import Profile from "../Profile";


const Account=()=>{
    return(
        <div className="acc">
            <div className="acc-container">
                <div className="pro-content">
                    {/* <Profile /> */}
                </div>
               <div className="pContent">
                <div className="pleft"></div>
                <div className="p">POSTS</div>
                <div className="pright"></div>
              </div>
              <div className="posts">
              <img src="https://tse4.mm.bing.net/th?id=OIP.Z_FV1UU_1YaB7KcXHDa6_gHaKO&pid=Api&P=0&h=180" alt="post" />
              <img src="https://tse4.mm.bing.net/th?id=OIP.Z_FV1UU_1YaB7KcXHDa6_gHaKO&pid=Api&P=0&h=180" alt="post" />
              <img src="https://tse4.mm.bing.net/th?id=OIP.Z_FV1UU_1YaB7KcXHDa6_gHaKO&pid=Api&P=0&h=180" alt="post" />

              </div>
            </div>
        </div>
    );
}
export default Account;