import React from "react";
import "./home.css";
import PostCard from "../PostCard";
import SideBar from "../SideBar";
import axios from "axios";
import { useEffect } from "react";
const Home=()=>{
    const token=localStorage.getItem("token")
    console.log(token)
    console.log("token:",token)
    // const [posts, setPosts] = useState([]);
    const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      console.log("config:",config)
    const fetchPostsFollowings = async ()=>{
    const response = await axios.post("http://127.0.0.1:8000/api/user/posts" ,{}, config);
    // setPosts(response.data)
    console.log(response)
  }
  useEffect(()=>{
    fetchPostsFollowings()
  }, [])
return(
    <div className="home">        
        <SideBar />        
        <div className="allPosts">
            <div className="post">      
                <PostCard/>
            </div>
        </div>
    </div>
    
);

}
export default Home;