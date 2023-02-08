import React from "react";

export const Search = () => {
    return (
        <div className="search-field">
            <input type="search" name="search" id="search" placeholder="Search Movie Title..." />
            <div className="search-suggestion"></div>
        </div>
    )
}