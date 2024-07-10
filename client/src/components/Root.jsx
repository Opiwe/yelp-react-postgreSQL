import React from 'react';
import { Outlet } from 'react-router-dom';
import Navabar from './Navbar';
import Footer from './Footer';

const Root = () => {
    return (
        <>
            <Navabar/>
            <Outlet/>
            <Footer/>
        </>
    )
}

export default Root