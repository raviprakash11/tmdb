import { createSlice } from "@reduxjs/toolkit";

import { register, login } from '../../services/auth.service';

const initialState = {
    accessToken: null,
    user: null,
    error: null,
    isLoading: false
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        authStart: (state) => {
            state.isLoading = true;
            state.error = null;
        },
        setAuthData: (state, action) => {
            state.accessToken = action.payload.accessToken;
            state.user = action.payload.user;
            state.isLoading = false;
            state.error = null;
        },
        resetAuthData: (state) => {
            state.accessToken = null;
            state.user = null;
        },
        authFailure: (state, action) => {
            state.error = action.payload.error;
            state.isLoading = false;
        }
    }
});

export const authReducer = authSlice.reducer;
export const authActions = authSlice.actions;

export const registerUser = (user, navigate) => {
    return async (dispatch) => {
        try {
            dispatch(authActions.authStart());
            const data = await register(user);
            localStorage.setItem('accessToken', data.accessToken);
            dispatch(authActions.setAuthData(data));
            navigate('/dashboard');
        } catch (error) {
            dispatch(authActions.authFailure({ error }));
        }
    }
}

export const loginUser = (user, navigate) => {
    return async (dispatch) => {
        try {
            dispatch(authActions.authStart());
            const data = await login(user);
            localStorage.setItem('accessToken', data.accessToken);
            dispatch(authActions.setAuthData(data));
            navigate('/dashboard');
        } catch (error) {
            dispatch(authActions.authFailure({ error }));
        }
    }
}