import React, { useState } from 'react'
import Navbar from "./Navbar";
import Link from 'next/link';

const Layout = ({ children }: any) => {

    return (
        <div>
            <Navbar />
            <div className="drawer bg-gray-100 dark:bg-gray-800 h-screen w-full lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content bg-gray-100 dark:bg-gray-900 w-full flex p-4 flex-col">
                    {/* Page content here */}
                    <div className='max-w-3xl w-full mx-auto'>{children}</div>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 text-base lg:text-lg font-semibold min-h-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-100 dark:hover:text-gray-100">
                        {/* Sidebar content here */}
                        <li><Link href='/' className="btn lg:hidden btn-ghost whitespace-nowrap normal-case text-base mb-6 lg:text-xl"><span className="text-3xl">🇨🇴</span>Learn Colombian Spanish</Link></li>
                        <li><Link href='/flash-cards'>Flash Cards</Link></li>
                        <li><Link href='/quiz'>Quiz</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Layout;