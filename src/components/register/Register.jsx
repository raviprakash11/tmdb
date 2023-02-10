import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { register } from '../../services/auth.service';
import { authActions } from '../../app/auth/auth.slice';

export const Register = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [user, setUser] = React.useState({ email: '', password: '', name: ''});

    const handleOnChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value });
    }

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const data = await register(user);
            localStorage.setItem('accessToken', data.accessToken);
            dispatch(authActions.setAuthData(data));
            navigate('/dashboard');
        } catch (error) {
            console.error(`[Register::handleRegister::register] Error`, error)
        }
    }

    return (
        <div className="auth register">
            <h2>Welcome to TMDB <br /> Get started with an account</h2>
            <form className="auth-form" onSubmit={handleRegister}>
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