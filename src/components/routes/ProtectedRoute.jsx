import React from "react";
import { Route } from "react-router-dom";

export const ProtectedRoute = (props) => {
    return <Route {...props} />
}