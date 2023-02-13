import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from '../home/Home';

const Register = React.lazy(() => import('../register'));
const Login = React.lazy(() => import('../login'));
const Dashboard = React.lazy(() => import('../user/dashboard'));

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