import React from 'react'
import parallaxImg1 from '../../assets/herobg.jpg';

const Offer = () => {
    return (

        <div className="fixed-bg" style={{ backgroundImage: `url(${parallaxImg1})` }}>
            <div className="h-screen flex items-center justify-center">
                <div className="bg-black bg-opacity-40 py-2 sm:py-2 lg:py-4">
                    <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                        <div className="flex flex-col items-center justify-between gap-4 rounded-lg bg-transparent p-4 sm:flex-row md:p-8">
                            <div>
                                <p className="text-gray-200">--- Holiday Offer ---</p>
                                <h2 className="text-xl font-bold text-white md:text-2xl">HOLIDAY SPECIAL - 20% OFF</h2>
                            </div>
                            <span className='flex flex-row gap-1'>
                                <input type="text" placeholder='Enter your Email' className='bg-gray-100 bg-opacity-20 py-3 px-4 placeholder:text-gray-200' />
                                <button className='bg-red-600 text-gray-300 hover:text-black bg-opacity-60 px-4 py-2 hover:cursor-pointer hover:bg-red-400 hover:bg-opacity-75 hover:scale-105 transition duration-150 ease-in-out'>Book Now</button>
                            </span>
                        </div>
                        <p className='text-gray-300'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero beatae distinctio magni. Animi, quis. Quod delectus voluptate libero asperiores nihil?</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Offer
