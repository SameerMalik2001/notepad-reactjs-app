import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <div className='text-white w-full h-20 text-3xl bg-black flex items-center justify-evenly gap-14'>
            <NavLink to='/' className='hover:text-gray-700 ml-7'>LOGO</NavLink>
            <div className='flex items-center justify-center gap-14'>
                <NavLink to='/home' className='hover:text-gray-300'>HOME</NavLink>
                <NavLink to='/add' className='hover:text-gray-300'>ADD</NavLink>
            </div>
        </div>
    );
}

export default Header;
