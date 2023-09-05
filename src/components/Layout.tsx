import React, { useState } from 'react'
import Navbar from "./Navbar";
import Link from 'next/link';

const Layout = ({ children }: any) => {

    return (
        <div>
            <Navbar />
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content h-screen mx-auto max-w-3xl w-full flex flex-col items-center justify-center">
                    {/* Page content here */}
                    {children}
                    {/* <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label> */}

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 text-medium lg:text-lg font-semibold min-h-full bg-base-200 text-base-content">
                        {/* Sidebar content here */}
                        <li><Link href='/flash-cards'>Flash Cards</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Layout;