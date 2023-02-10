import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { logout } from '../../../services/auth.service';
import { authActions } from '../../../app/auth/auth.slice';

export const Dashboard = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(authActions.resetAuthData());
        logout();
        navigate('/');
    }

    return (
        <div className="dashboard">
            <aside className="side-nav">
                <menu>
                    <li><NavLink to='profile'>Profile</NavLink></li>
                    <li><NavLink to={'Liked'}>Liked Movies</NavLink></li>
                    <li><button className='button' onClick={handleLogout}>Logout</button></li>
                </menu>
            </aside>
            <main>
                Dashboard
            </main>
        </div>
    )
}