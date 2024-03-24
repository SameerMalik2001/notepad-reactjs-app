import React from 'react';
import { Outlet } from 'react-router';
import Header from './components/Header';

function Root () {
    return (
        <div className='h-screen w-screen flex flex-col items-center'>
            <Header />
            <Outlet />
        </div>
    );
}

export default Root;
