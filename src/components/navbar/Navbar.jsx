import React from "react";
import { Link, NavLink } from 'react-router-dom';

import { Search } from '../search/Search';
import TMDBLogo from '../../assets/img/tmdb-logo.png';
import "./Navbar.css";

export const Navbar = () => {
    return (
        <nav className="navbar navbar-main">
            <Link to="/" className="app-logo" data-testid="app-logo">
                <img src={TMDBLogo} alt="Powered by TMDB logo" />
            </Link>
            <menu className="nav nav-main">
                <Search />
                <NavLink to="/register" className="button">Register</NavLink>
            </menu>
        </nav>
    )
}