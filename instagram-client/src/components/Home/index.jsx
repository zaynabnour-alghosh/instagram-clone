import React from "react";
import "./home.css";
import PostCard from "../PostCard";
const Home=()=>{
return(

    <div className="allPosts">
        <div className="post">
            <PostCard/>
            <PostCard/>
            <PostCard/>
            <PostCard/>
            <PostCard/>
        </div>
    </div>
);

}
export default Home;