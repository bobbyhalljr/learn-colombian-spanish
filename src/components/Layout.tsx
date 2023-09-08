import React, { useState } from 'react'
import Navbar from "./Navbar";
import Link from 'next/link';
import SearchBar from './SearchBar';

const Layout = ({ children }: any) => {

    return (
        <div className='h-auto'>
            <Navbar />
            <div className="drawer bg-white dark:bg-gray-900 h-screen w-screen lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                
                <div className="drawer-content bg-white dark:bg-gray-900 mx-auto ">
                    {/* Page content here */}
                    <div className='drawer max-w-3xl mx-auto w-full'>{children}</div>
                </div>

                <div className="drawer-side z-20">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full text-lg lg:text-xl font-semibold bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-100">
                        {/* Sidebar content here */}
                        <li><Link href='/' className="btn dark:hover:bg-gray-400 transition duration-150 ease-out hover:ease-in lg:hidden btn-ghost whitespace-nowrap normal-case text-base mb-6 lg:text-xl"><span className="text-3xl">🇨🇴</span>Learn Colombian Spanish</Link></li>
                        <li className='rounded-lg dark:hover:bg-gray-400 transition duration-150 ease-out hover:ease-in'><Link href='/flash-cards'>Flash Cards</Link></li>
                        <li className='rounded-lg dark:hover:bg-gray-400 transition duration-150 ease-out hover:ease-in'><Link href='/quiz'>Quiz</Link></li>
                        <li className='rounded-lg dark:hover:bg-gray-400 transition duration-150 ease-out hover:ease-in'><Link href='/phrases'>Phrases</Link></li>
                        {/* <li className='rounded-lg dark:hover:bg-gray-400 transition duration-150 ease-out hover:ease-in'><SearchBar onSearch={handleSearch} /></li> */}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Layout;