import React, { useContext } from 'react';
import logo from "../assets/TB (4).png";
import { BsBookmarkHeart } from "react-icons/bs";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { AuthContext } from '../context/AuthContext'; 

const Header = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { isAuthenticated, logout } = useContext(AuthContext); 

    const handleLogout = () => {
        logout(); 
        navigate('/'); 
    };

    return (
        <header className="text-gray-800 font-hind body-font fixed top-0 left-0 right-0 z-50 bg-white shadow-md px-2 md:px-8 lg:px-16">
            <div className="container mx-auto flex flex-wrap py-1 flex-col md:flex-row items-center">
                <a href="/" className="inline-flex  items-center gap-2 my-2 text-xl font-bold text-gray-800 md:text-2xl" aria-label="logo">
                    <img src={logo} alt="" className="h-16 hidden md:block" />
                    <span className='bg-gradient-to-r from-blue-500 to-black text-transparent bg-clip-text'>TourBuddy</span>
                </a>
                <nav className="md:ml-auto relative lg:top-2 md:mr-auto flex mb-2 items-center text-base justify-center">
                    {location.pathname === '/' ? (
                        <ScrollLink className="mx-4 md:mx-10 hover:text-gray-900 hover:cursor-pointer" to="home" smooth={true} duration={2500}>Home</ScrollLink>
                    ) : (
                        <Link to='/' className="mx-4 md:mx-10 hover:text-gray-900 hover:cursor-pointer">Home</Link>
                    )}
                    <ScrollLink className="mx-4 md:mx-10 hover:text-gray-900 hover:cursor-pointer" to="packages" smooth={true} duration={2500}>Tour</ScrollLink>
                    <ScrollLink className="mx-4 md:mx-10 hover:text-gray-900 hover:cursor-pointer" to="about" smooth={true} duration={2500}>About</ScrollLink>
                    <ScrollLink className="mx-4 md:mx-10 hover:text-gray-900 hover:cursor-pointer" to="contact" smooth={true} duration={2500}>Contact</ScrollLink>
                    {/* <div className="inline-flex md:hidden gap-12 lg:gap-4 sm:mb-1 mr-2 items-center border-0 focus:outline-none text-xl opacity-90">
                        {isAuthenticated ? (
                            <button onClick={handleLogout} className='cursor-pointer'>Sign out</button>
                        ) : (
                            <Link to='/login' className='cursor-pointer'><button>Login</button></Link>
                        )}
                    </div> */}
                </nav>
                <div className="flex flex-row gap-12 lg:gap-4 sm:mb-1 mr-2 items-center border-0 focus:outline-none text-xl opacity-90">
                    <Link to='/wishlist'><BsBookmarkHeart className='mx-4 text-2xl lg:mt-2' /></Link>
                    {isAuthenticated ? (
                        <button onClick={handleLogout} className='text-sm hover:shadow-lg lg:mt-2 font-semibold py-2 px-6 text-black bg-gradient-to-r from-red-400 to-blue-400 border-2 bg-opacity-80 rounded-full hover:cursor-pointer hover:scale-105 transition duration-150'>Sign out</button>
                    ) : (
                        <Link to='/login' className='cursor-pointer text-sm'><button className='hover:shadow-lg lg:mt-2 font-semibold py-2 px-6 text-black bg-gradient-to-r from-red-400 to-blue-400 border-2 bg-opacity-80 rounded-full hover:cursor-pointer hover:scale-105 transition duration-150'>Login</button></Link>
                    )}
                </div>
            </div>
        </header>
    );
}

export default Header;
