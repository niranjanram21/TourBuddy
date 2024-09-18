import React from 'react';
import herobg from '../assets/herobg.jpg';
import Header from './Header';

const Hero = () => {
    return (
        <div>
            <div className="bg-white ">
                <div className="max-w-screen-2xl mx-auto">
                    <Header />
                    <section className="relative flex flex-col items-center justify-center overflow-hidden bg-gray-100 py-32 shadow-lg md:py-36 xl:py-44">
                        <img src={herobg} loading="lazy" alt="herobg" className="absolute inset-0 h-full w-full object-cover object-center" />
                        <div className="absolute inset-0 bg-gray-400 mix-blend-multiply"></div>
                        <div className="relative flex flex-col items-center p-4 sm:max-w-2xl">
                            <h1 className="mb-4 mt-4 font-montserrat text-center text-4xl font-bold text-white sm:text-5xl md:mb-12 md:text-6xl lg:text-6xl">Travelling around the world</h1>
                            <div className="flex gap-2.5 font-hind flex-row sm:justify-center">
                                <span className="inline-block rounded-lg bg-indigo-500 px-8 py-2 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">Start now</span>
                                <span className="inline-block rounded-lg bg-gray-200 px-8 py-2 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base">Take tour</span>
                            </div>
                        </div>
                    </section>

                    <section className="bg-transparent font-hind hidden md:block py-2 sm:py-4 lg:py-4 relative bottom- lg:bottom-20 z-30 bg-opacity-50">
                        <div className="mx-auto max-w-screen-2xl px-4 md:px-8 lg:px-16">
                            <div className="rounded-lg bg-gray-50  p-4 md:p-8 shadow-lg shadow-indigo-300">
                                <div className="grid grid-cols-3 gap-2 lg:gap-4 text-sm md:text-lg sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 justify-center items-center">
                                    <div className='flex flex-col gap-2'>
                                        <label className='ml-2 text-sm md:text-md lg:text-lg'>Destination*</label>
                                        <input type='text' placeholder='Enter Destination' className='text-xs px-2 py-2 bg-gray-100 w-full rounded border border-gray-300 placeholder-gray-400 outline-none ring-indigo-200 transition duration-100 focus:ring' />
                                    </div>
                                    <div className='flex flex-col gap-2'>
                                        <label className='ml-2 text-sm md:text-md lg:text-lg'>HeadCount*</label>
                                        <input type='text' placeholder='Enter Number of people' className='text-xs px-2 py-2 bg-gray-100 w-full rounded border border-gray-300 placeholder-gray-400 outline-none ring-indigo-200 transition duration-100 focus:ring' />
                                    </div>
                                    <div className='flex flex-col gap-2'>
                                        <label className='ml-2 text-sm md:text-md lg:text-lg'>Check-in*</label>
                                        <input type='date' className='text-xs px-2 py-2 bg-gray-100 w-full rounded border border-gray-300 text-gray-500 outline-none ring-indigo-200 transition duration-100 focus:ring' />
                                    </div>
                                    <div className='flex flex-col gap-2'>
                                        <label className='ml-2 text-sm md:text-md lg:text-lg'>Check-out*</label>
                                        <input type='date' className='text-xs px-2 py-2 bg-gray-100 w-full rounded border border-gray-300 text-gray-500 outline-none ring-indigo-200 transition duration-100 focus:ring' />
                                    </div>
                                    <button className='py-2 px-4 md:px-4 mb-2 text-sm lg:text-md relative top-4 items-center bg-indigo-500 mx-auto text-white font-semibold rounded-md'>
                                        Inquire Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default Hero;
