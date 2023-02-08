import React from "react";
import { Search } from '../search/Search';
import TMDBLogo from '../../assets/img/tmdb-logo.png';
import "./Navbar.css";

export const Navbar = () => {
    return (
        <nav className="navbar navbar-main">
            <a href="/" className="app-logo">
                <img src={TMDBLogo} alt="Powered by TMDB logo" />
            </a>
            <menu className="nav nav-main">
                <Search />
            </menu>
        </nav>
    )
}