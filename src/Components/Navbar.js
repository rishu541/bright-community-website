import React from 'react';
import logo from '../images/logo.png';
export const Navbar = () => {
  return (
    <div className='w-full z-50 h-20 bg-white flex fixed justify-between items-center px-36 drop-shadow-sm'>
      <div className='w-48'>
        <img src={logo} alt='Logo' className='object-fit w-full h-full' />
      </div>
      <div className=''>
        <ul className='flex flex-row '>
          <li className='btn mx-3'>Login</li>
          <li className='btn-alt mx-3'>Sign Up</li>
        </ul>
      </div>
    </div>
  );
};
