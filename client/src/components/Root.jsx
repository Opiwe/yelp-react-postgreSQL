import React from 'react';
import { Outlet } from 'react-router-dom';
import Navabar from './Navbar';
import Footer from './Footer';

const Root = () => {
    return (
        <>
            <Navabar/>
                <div className='main'>
                    <Outlet />
                </div>
            <Footer/>
        </>
    )
}

export default Root