import React from "react";
import { Link } from "react-router-dom";

import { registerUser } from "../../app/auth/auth.slice";
import { withAuthHandlers } from "../../hoc/auth.hoc";

export const RegisterComponent = ({ handleFormSubmit, handleOnChange }) => {
    return (
        <div className="auth register">
            <h2>Welcome to TMDB <br /> Get started with an account</h2>
            <form className="auth-form" onSubmit={handleFormSubmit}>
                <div className="form-group"><label htmlFor="" className="form-label">Name</label><input type="text" className="form-control" placeholder="Your full name" name="name" onChange={handleOnChange} /></div>
                <div className="form-group"><label htmlFor="" className="form-label">Username</label><input type="email" className="form-control" placeholder="Your email id" name="email" onChange={handleOnChange} /></div>
                <div className="form-group"><label htmlFor="" className="form-label">Password</label><input type="password" className="form-control" placeholder="Set secure password" name="password" onChange={handleOnChange} /></div>
                <div className="form-group">
                    <button type="submit" className="button">Register</button>
                </div>
                <div className="form-group">
                    <p>Already reigstered? <Link to={'/login'} className='button'>Login</Link></p>
                </div>
            </form>
        </div>
    )
}

export const Register = withAuthHandlers(RegisterComponent, { email: '', password: '', name: ''}, registerUser);