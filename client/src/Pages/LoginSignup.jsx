import React, { useState, useContext } from 'react';
import { RiLockPasswordLine } from "react-icons/ri";
import { AiOutlineMail } from "react-icons/ai";
import img1 from '../assets/loginImg2.jpg';
import img2 from '../assets/loginImg4.jpg';
import { CiUser } from "react-icons/ci";
import { FaUser } from "react-icons/fa";
import logo from "../assets/TB (4).png";
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext'; 

const LoginSignup = () => {
    const [signupState, setSignupState] = useState('login');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const { login } = useContext(AuthContext); 
    const navigate = useNavigate();
    const location = useLocation(); 

    const handleStateChange = () => {
        setSignupState(prevState => (prevState === 'login' ? 'signup' : 'login'));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!email || !password || (signupState === 'signup' && !username)) {
            alert('Please fill in all required fields.');
            return;
        }

        try {
            const url = signupState === 'signup' ? 'http://localhost:3001/auth/register' : 'http://localhost:3001/auth/login';
            const payload = signupState === 'signup' ? { email, password, username } : { email, password };

            const response = await axios.post(url, payload);
            const user = response.data;
            alert(signupState === 'signup' ? 'User registered successfully!' : 'User logged in successfully!');

            login(user);

            const packageDetail = location.state?.packageDetail;
            navigate(location.state?.from || '/', { state: { packageDetail } });
        } catch (error) {
            alert(error.response ? error.response.data.message : error.message);
        }
    };


    return (
        <div className=''>
            <header className="text-gray-700 body-font px-16 bg-white">
                <div className="container mx-auto flex flex-wrap py-1 flex-col md:flex-row items-center">
                    <a href="/" className="inline-flex  items-center gap-2 text-xl font-bold text-gray-800 md:text-2xl" aria-label="logo">
                        <img src={logo} alt="" className="h-16 hidden md:block" />
                        <span className='bg-gradient-to-r from-blue-500 to-black text-transparent bg-clip-text'>TourBuddy</span>
                    </a>
                    <nav className="md:ml-auto md:mr-auto flex mb-2 items-center text-base justify-center">
                        <span className="mx-4 md:mx-10 hover:text-gray-900">Home</span>
                        <span className="mx-4 md:mx-10 hover:text-gray-900">About</span>
                        <span className="mx-4 md:mx-10 hover:text-gray-900">Tour</span>
                        <span className="mx-4 md:mx-10 hover:text-gray-900">Contact</span>
                    </nav>
                    <div className="inline-flex gap-12 lg:gap-4 sm:mb-1 items-center border-0 focus:outline-none text-xl">
                        <FaUser />
                    </div>
                </div>
            </header>

            <div className="py-24 sm:py-16 lg:py-16 h-full">
                <div className="mx-auto max-w-screen-2xl px-4 md:px-8 lg:px-44">
                    <div className="flex flex-col md:flex-row lg:flex-row bg-white bg-opacity-35 rounded-lg overflow-hidden shadow-2xl shadow-sky-200">
                        <div className="flex w-full items-center p-4 sm:w-2/3 sm:p-8 lg:w-1/2 lg:pl-10">
                            <div className="flex w-full flex-col items-center sm:items-center">
                                <form onSubmit={handleSubmit} className="w-full bg-transparent pb-4 px-8 lg:px-16 mb-2 rounded">
                                    <h1 className="mb-1 sm:mb-8 text-xl font-extrabold bg-gradient-to-r from-blue-400 to-red-700 text-transparent bg-clip-text sm:text-2xl lg:text-3xl">
                                        {signupState === 'login' ? 'Log in' : 'Sign up'}
                                    </h1>
                                    <div className="flex flex-col gap-2">
                                        {signupState === 'signup' && (
                                            <div>
                                                <label htmlFor="name" className="leading-7 text-sm text-gray-600">Username</label>
                                                <div className="flex flex-row gap-2 w-full bg-white rounded-full border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                                                    <CiUser className='relative top-2 font-extrabold' />
                                                    <input
                                                        type="text"
                                                        id="name"
                                                        name="name"
                                                        value={username}
                                                        onChange={(e) => setUsername(e.target.value)}
                                                        className='w-full outline-none'
                                                    />
                                                </div>
                                            </div>
                                        )}
                                        <div>
                                            <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                                            <div className="flex flex-row gap-2 w-full bg-white rounded-full border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                                                <AiOutlineMail className='relative top-2 font-extrabold' />
                                                <input
                                                    type="email"
                                                    id="email"
                                                    name="email"
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                    className='w-full outline-none'
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <label htmlFor="password" className="leading-7 text-sm text-gray-600">Password</label>
                                            <div className="flex flex-row gap-2 w-full bg-white rounded-full border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                                                <RiLockPasswordLine className='relative top-2 font-extrabold' />
                                                <input
                                                    type="password"
                                                    id="password"
                                                    name="password"
                                                    value={password}
                                                    onChange={(e) => setPassword(e.target.value)}
                                                    className='w-full outline-none'
                                                />
                                            </div>
                                        </div>
                                        <button
                                            type="submit"
                                            className="text-white bg-gradient-to-r from-red-600 to-blue-600 border-0 py-2 px-6 mt-2 focus:outline-none opacity-90 hover:opacity-100 rounded-full text-lg"
                                        >
                                            {signupState === 'login' ? 'Log in' : 'Sign up'}
                                        </button>
                                    </div>
                                    <p className="text-sm text-gray-500 mt-3">
                                        {signupState === 'login' ? "Don't have an account?" : 'Already have an account?'}{' '}
                                        <span
                                            onClick={handleStateChange}
                                            className="cursor-pointer text-blue-500 transition duration-100 hover:text-blue-400 active:text-blue-700"
                                        >
                                            {signupState === 'login' ? 'Register' : 'Log in'}
                                        </span>
                                    </p>
                                    <p className="text-center mt-2 text-sm text-gray-400 sm:text-left">
                                        By signing up to our newsletter you agree to our <span className="underline transition duration-100 hover:text-blue-500 active:text-blue-600">Terms of Service</span> and <span className="underline transition duration-100 hover:text-blue-500 active:text-blue-600">Privacy Policy</span>.
                                    </p>
                                </form>
                            </div>
                        </div>
                        <div className="relative md:w-1/3 lg:w-1/2 hidden md:block lg:block">
                            <img src={signupState === 'signup' ? img2 : img1} className='object-cover object-center w-full h-full' alt='' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginSignup;
