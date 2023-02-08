import React from "react";
import "./Search.css";

export const Search = () => {
    return (
        <div className="search-field">
            <input type="search" name="search" id="search" placeholder="Search Movie Title..." />
            <ul className="search-suggestion">
                <li>Interstellar</li>
                <li>Inception</li>
            </ul>
        </div>
    )
}