import React from "react";
import { Link } from "react-router-dom";

import { loginUser } from "../../app/auth/auth.slice";
import { withAuthHandlers } from '../../hoc/auth.hoc';

export const LoginComponent = ({ handleFormSubmit, handleOnChange }) => {

    return (
        <div className="auth login">
            <h2>Welcome back to TMDB <br /> Login to your account</h2>
            <form className="auth-form" onSubmit={handleFormSubmit}>
                <div className="form-group"><label htmlFor="" className="form-label">Username</label><input type="email" className="form-control" placeholder="Your email id" name="email" onChange={handleOnChange} /></div>
                <div className="form-group"><label htmlFor="" className="form-label">Password</label><input type="password" className="form-control" placeholder="Set secure password" name="password" onChange={handleOnChange} /></div>
                <div className="form-group">
                    <button type="submit" className="button">Login</button>
                </div>
                <div className="form-group">
                    <p>Dont' have an account? Create one here <Link to={'/register'} className='button'>Register</Link></p>
                </div>
            </form>
        </div>
    )
}

export const Login = withAuthHandlers(LoginComponent, { email: '', password: '' }, loginUser);