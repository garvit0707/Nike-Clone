import React, { useState } from 'react';
import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from '../constants';

const Nav = () => {
  let [open,setOpen]=useState(false);

  return (
    <header className='shadow-md w-full fixed top-0 left-0 z-20'>
      <nav className='md:flex items-center justify-between bg-white py-5 md:px-10 px-7 max-container'>
        <a href='/'>
          <img
            src={headerLogo}
            alt="Logo"
            width={130}
            height={29}
          />
        </a>
        <div onClick={()=>setOpen(!open)} className=' text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
        <img
            src={hamburger}
            alt='hamburger'
            width={25}
            height={25}
            style={{ cursor: 'pointer' }}
          />
        </div>

      
        <ul className={`md:flex md:items-center md:pb-0 pb-2 absolute md:static bg-white md:z-auto z-12
         left-0 w-full md:w-auto md:pl-0 z-[-1] pl-9 transition-all duration-500 ease-in 
         ${open ? 'top-16 ':'top-[-490px]'}`}>
          {navLinks.map((item) => (
            <li key={item.label} className='md:ml-8 text-xl md:my-0 my-7'>
              <a
                href={item.href}
                className='font-montserrat leading-normal text-lg text-slate-grey hover:text-gray-300 duration-500'
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
