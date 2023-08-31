import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Logo from '../../assets/haven-logo.svg'
import { NavUrls } from '../Content'
import { AiOutlineSearch } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi'

const NavBar = () => {
    const [active, setActive] = useState(false);

    const handleToggle = () => {
        setActive(!active);
    }
    // fixed top-0 left-0
    return (
        <header className="w-full h-auto bg-transparent z-10 font-krub font-bold text-white fixed top-0 left-0">
            <nav className="w-full flex justify-between items-center font-large xl:px-40 lg:px-20 md:px-10 px-5 py-5 gap-5">
                <Link to="/" className="flex items-center">
                    <img src={Logo} alt="logo" className="sm:w-[160px] sm:h-[40px] w-[160px] h-[40px] object-contain max-w-none" />
                </Link>
                <ul className="list-none lg:flex hidden flex-row justify-center items-center gap-4 whitespace-nowrap">
                    {NavUrls.map((menu, index) => (
                        <li key={index}>
                            <NavLink to={menu.url}>{menu.label}</NavLink>
                        </li>
                    ))}
                </ul>
                <div className="flex flex-row gap-2 whitespace-nowrap">
                    <button className="bg-white rounded-full text-[#00BCE7] px-4 py-2">Contact Us</button>
                    <button className="text-2xl"><AiOutlineSearch /></button>

                    <div className="lg:hidden flex cursor-pointer" onClick={handleToggle}>
                        <button className="text-2xl"><GiHamburgerMenu /></button>
                    </div>
                </div>
            </nav>

            {/* Mobile menu */}
            <nav className={`w-full lg:hidden h-screen bg-gray-900/80 flex justify-end font-large gap-10 fixed ${active ? "right-0" : "-right-[110vw]"}`}>
                <div className={`w-full h-screen md:w-[50%] flex bg-sky-800/90 relative ${active ? "right-0" : "-right-[110vw]"} transition-all duration-500 ease-out pt-10`}>
                    <ul className="list-none flex flex-col pl-5 gap-3">
                        {/* <li key="-1"><NavLink to="/" onClick={handleToggle}>Home</NavLink></li> */}
                        {NavUrls.map((menu, index) => (
                            <li key={index}>
                                <NavLink to={menu.url} onClick={handleToggle}>{menu.label}</NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default NavBar