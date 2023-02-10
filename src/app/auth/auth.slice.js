import { createSlice } from "@reduxjs/toolkit";

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
        setAuthData: (state, action) => {
            state.accessToken = action.payload.accessToken;
            state.user = action.payload.user;
        },
        resetAuthData: (state) => {
            state.accessToken = null;
            state.user = null;
        }
    }
});

export const authReducer = authSlice.reducer;
export const authActions = authSlice.actions;