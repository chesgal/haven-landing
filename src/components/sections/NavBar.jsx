import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Logo from '../../assets/haven-logo.svg'
import { NavUrls } from '../Content'
import { AiOutlineSearch } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi'

const NavBar = () => {
    const [active, setActive] = useState(false);
    const [navBarColor, setNavBarColor] = useState("transparent")

    const handleToggle = () => {
        setActive(!active);
    }

    const listenScrollEvent = () => {
        window.scrollY > 20 ? setNavBarColor("bg-sky-700/90") : setNavBarColor("bg-transparent");
    };

    useEffect(() => {
        window.addEventListener("scroll", listenScrollEvent);
        return () => {
            window.removeEventListener("scroll", listenScrollEvent);
        };
    }, []);

    return (
        <header className={`w-full h-auto ${navBarColor} z-10 font-krub font-bold text-white fixed top-0 left-0`}>
            <nav className="w-full flex justify-between items-center md:text-lg xl:px-40 lg:px-20 md:px-10 px-3 md:py-5 py-3 md:gap-5 gap-3">
                <Link to="/" className="flex items-center" onClick={() => setActive(false)}>
                    <img src={Logo} alt="logo" className="xl:w-[160px] w-[110px] object-contain max-w-none" />
                </Link>
                <ul className="list-none lg:flex hidden flex-row justify-center text-base items-center gap-3 whitespace-nowrap">
                    {NavUrls.map((menu, index) => (
                        <li key={index}>
                            <NavLink to={menu.url}>{menu.label}</NavLink>
                        </li>
                    ))}
                </ul>
                <div className="flex flex-row gap-2 whitespace-nowrap">
                    <a href="#contactUs" className="bg-white rounded-full text-[#00BCE7] text-base md:px-4 px-2 md:py-2 py-1">Contact Us</a>
                    <button className="text-2xl"><AiOutlineSearch /></button>

                    <div className="lg:hidden flex cursor-pointer" onClick={handleToggle}>
                        <button className="text-2xl"><GiHamburgerMenu /></button>
                    </div>
                </div>
            </nav>

            {/* Mobile menu */}
            <nav className={`w-full lg:hidden h-screen bg-gray-900/80 flex justify-end text-lg gap-10 fixed ${active ? "right-0" : "-right-[110vw]"}`}>
                <div className={`w-full h-screen md:w-[50%] flex bg-sky-800/90 relative ${active ? "right-0" : "-right-[110vw]"} transition-all duration-500 ease-out pt-10`}>
                    <ul className="list-none flex flex-col pl-5 gap-3">
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