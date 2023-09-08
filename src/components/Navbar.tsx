import Link from "next/link";
import DarkModeToggle from "./DarkModeToggle";

const Navbar = () => {
    return (
        <div className="navbar w-full z-20 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-100">
            <div className="navbar-start">
                <label htmlFor="my-drawer-2" className="drawer-button">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700 lg:hidden cursor-pointer mx-1 dark:text-gray-100" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <Link href='/' className="btn btn-ghost text-gray-700 dark:text-gray-100 normal-case text-base lg:text-xl"><span className="text-xl lg:text-3xl">🇨🇴</span><p className="">Learn Colombian Spanish</p></Link>
            </div>
            <div className="navbar-end lg:px-12">
                <DarkModeToggle />
            </div>
        </div>
    )
}

export default Navbar;