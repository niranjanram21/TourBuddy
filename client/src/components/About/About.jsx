import React from 'react';
import './About.css';
import herobg from '../../assets/herobg.jpg';

const About = () => {
    return (
        <div className="about py-4 bg-white">
            <section className="relative max-h-48 my-4 flex flex-col items-center justify-center overflow-hidden bg-gray-100 py-16 shadow-lg md:py-20 xl:py-36 fixed-bg" style={{ backgroundImage: `url(${herobg})` }}>
                <div className="absolute inset-0 bg-gray-400 mix-blend-multiply"></div>
                <div className="relative flex flex-col items-center p-4 sm:max-w-2xl">
                    <h1 className="mb-8 text-center font-montserrat text-4xl font-bold text-white sm:text-5xl md:mb-12 md:text-4xl lg:text-5xl">About Us</h1>
                </div>
            </section>
        </div>
    );
};

export default About;
