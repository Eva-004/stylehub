import Link from 'next/link';
import React from 'react';
import { BsCart2 } from 'react-icons/bs';
import { IoHomeOutline } from 'react-icons/io5';
import { VscOpenInProduct } from 'react-icons/vsc';
import NavLink from './NavLink';

const Navbar = () => {
    return (
        <div className='bg-base-100  shadow-sm'>
            <div className=" w-11/12 navbar mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><NavLink href={'/'}><IoHomeOutline />Home</NavLink></li>
                            <li>
                               <NavLink href={'/products'}><VscOpenInProduct />Products</NavLink>
                            </li>
                            <li><NavLink href={'/cart'}><BsCart2 />Cart</NavLink></li>
                        </ul>
                    </div>
                    <Link href={'/'}>
                    <div className='text-3xl font-bold'>Style<span className='text-[#244D3F]'>Hub</span></div>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><NavLink href={'/'}><IoHomeOutline />Home</NavLink></li>
                            <li>
                               <NavLink href={'/products'}><VscOpenInProduct />Products</NavLink>
                            </li>
                            <li><NavLink href={'/cart'}><BsCart2 />Cart</NavLink></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <input type="text" placeholder="Search Products" className="input" />
                </div>
            </div>
        </div>
    );
};

export default Navbar;