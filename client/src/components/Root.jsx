import React from 'react';
import { Outlet } from 'react-router-dom';
import Navabar from './Navbar';

const Root = () => {
    return (
        <>
            <Navabar/>
                <div className='main'>
                    <Outlet />
                </div>
        </>
    )
}

export default Root