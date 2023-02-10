import React from 'react';
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export const withAuthHandlers = (Component, userObj, authAction) => {
    return () => {
        const [user, setUser] = React.useState(userObj)
        const dispatch = useDispatch();
        const navigate = useNavigate();

        const handleOnChange = (e) => {
            setUser({ ...user, [e.target.name]: e.target.value });
        }

        const handleFormSubmit = async (e) => {
            e.preventDefault();
            dispatch(authAction(user, navigate));
        }

        return (<Component handleOnChange={handleOnChange} handleFormSubmit={handleFormSubmit} />)
    }
}