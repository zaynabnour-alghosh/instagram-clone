import React from "react";
import "./seach.css";
import ElemetSearch from "../ElementSearch";
const SearchList=()=>{
    return(
        <div className="search">
            <div className="container">
                <div className="bar">

                    <input type="text" placeholder="Search for users" />

                </div>
                <hr />
                <div className="list">
                    <div className="useri">
                    <ElemetSearch />
                    <ElemetSearch />
                    <ElemetSearch />
                    <ElemetSearch />
                    <ElemetSearch />
                    </div>
                   
                </div>
            </div>
        </div>
    );
}
export default SearchList;