import React from "react";
import "./seach.css";
import ElemetSearch from "../ElementSearch";
const SearchList=()=>{
    return(
        <div className="search">
            <div className="search-container">
                <div className="bar">
                <div className="rows">
                    <input type="text" placeholder="Search for users" />
                </div>
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