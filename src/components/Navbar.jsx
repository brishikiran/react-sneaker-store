import React, { useState, useEffect } from 'react';
import { AiOutlineSearch, AiOutlineHeart } from 'react-icons/ai';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import logo from '../assets/logo.png';

const Navbar = () => {
    const [navState, setNavState] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setNavState(window.scrollY > 30);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header
            className={`${
                !navState
                    ? 'absolute top-7 left-0 right-0 opacity-100 z-50'
                    : 'fixed top-0 left-0 right-0 h-16 flex items-center justify-center opacity-100 z-50 bg-white shadow-lg'
            }`}
        >
            <nav className="w-full max-w-screen-lg mx-auto px-4 flex items-center justify-between">
                <div className="flex items-center">
                    <img src={logo} alt="Logo" className={`w-16 h-auto ${navState && 'filter brightness-0'}`} />
                </div>
                <ul className="flex items-center justify-center gap-6">
                    <li className="grid items-center">
                        <AiOutlineSearch className={`icon-style ${navState && 'text-gray-900 transition-all duration-300'}`} />
                    </li>
                    <li className="grid items-center">
                        <AiOutlineHeart className={`icon-style ${navState && 'text-gray-900 transition-all duration-300'}`} />
                    </li>
                    <li className="relative">
                        <button type="button" className="">
                            <HiOutlineShoppingBag className={`icon-style ${navState && 'text-gray-900 transition-all duration-300'}`} />
                            <div className={`absolute top-0 right-0 transform translate-x-2 -translate-y-2 bg-red-500 text-white w-5 h-5 rounded-full flex items-center justify-center font-semibold text-xs ${navState ? 'bg-gray-900 text-white shadow-md' : 'bg-white text-red-500 shadow'}`}>0</div>
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;
