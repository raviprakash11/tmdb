import React from "react";

import { Router as Routes } from '../routes/Routes';
import { Navbar } from "../navbar/Navbar";

export const Layout = () => {
    return (
        <div className='boxed'>
            <Navbar />
            <Routes />
        </div>
    )
}