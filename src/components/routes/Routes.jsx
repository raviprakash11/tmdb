import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from '../home/Home';
import { Register } from '../register/Register';
import { Login } from '../login/Login';
import { Dashboard } from '../user/dashboard/Dashboard';

export const Router = () => {
    return (
        <Routes>
            <Route path='/' exact element={<Home />} />
            <Route path='/register' exact element={<Register />} />
            <Route path='/login' exact element={<Login />} />
            <Route path='/dashboard' exact element={<Dashboard />} />
        </Routes>
    )
}