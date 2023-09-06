import React, { useState } from 'react'
import Navbar from "./Navbar";
import Link from 'next/link';

const Layout = ({ children }: any) => {

    return (
        <div>
            <Navbar />
            <div className="drawer bg-base-100 h-screen w-full lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content bg-base-200 w-full flex p-4 flex-col">
                    {/* Page content here */}
                    <div className='max-w-3xl w-full mx-auto'>{children}</div>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 text-base lg:text-lg font-semibold min-h-full bg-base-300 text-base-content">
                        {/* Sidebar content here */}
                        <li><Link href='/flash-cards'>Flash Cards</Link></li>
                        <li><Link href='/quiz'>Quiz</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Layout;