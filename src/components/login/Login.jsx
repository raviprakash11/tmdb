import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { login } from "../../services/auth.service";
import { authActions } from "../../app/auth/auth.slice";

export const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [user, setUser] = React.useState({ email: '', password: ''});

    const handleOnChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const data = await login(user);
            localStorage.setItem('accessToken', data.accessToken);
            dispatch(authActions.setAuthData(data));
            navigate('/dashboard');
        } catch (error) {
            console.error(`[Login::handleLogin::login] Error:: `, error);
        }
    }

    return (
        <div className="auth login">
            <h2>Welcome back TMDB <br /> Login to your account</h2>
            <form className="auth-form" onSubmit={handleLogin}>
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