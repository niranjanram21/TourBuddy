import React from 'react'
import { FaHandHoldingDollar } from "react-icons/fa6";
import { FaMapLocationDot } from "react-icons/fa6";
import { SiArkecosystem } from "react-icons/si";

const Intro = () => {
    return (
        <div className='px-4 md:px-16 lg:px-40 my-8 md:my-12'>
            <div className="grid grid-row-2 md:grid-cols-2">
                <div className='text-xl md:text-3xl font-montserrat text-left font-extrabold text-zinc-800 drop-shadow-xl'>HELLO, WE HAVE BEEN ONE OF THE MOST TRUSTWORTHY TRAVELLING AGENCY SINCE LAST DECADE !!</div>
                <div className='text-left text-md text-gray-600 my-2 md:px-8 font-hind'>Lorem ipsum dolor sit amet consectetur adipisicing elit. A dolores quisquam nobis, alias beatae adipisci sapiente?<br /> Accusantium aliquam, sequi fugit doloremque blanditiis suscipit pariatur culpa earum quo eius mollitia obcaecati voluptatum distinctio.</div>
            </div>
            <ul className="grid grid-row-3 lg:grid-cols-3 gap-2 md:gap-4 mt-8 md:mt-12 font-montserrat">
                <li className='flex flex-row gap-4'>
                    <span className='bg-sky-600 bg-opacity-75 p-4 '>
                        <FaHandHoldingDollar className='text-5xl relative top-1 text-white' />
                    </span>
                    <span className='text-lg md:text-xl text-semibold text-left'>AFFORDABLE PRICE<br /><span className='text-sm text-gray-600 font-hind'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</span> </span>
                </li>
                <li className='flex flex-row gap-4'>
                    <span className='bg-sky-600 bg-opacity-75 p-4 '>
                        <FaMapLocationDot className='text-5xl relative top-1 text-white' />
                    </span>
                    <span className='text-lg md:text-xl text-semibold text-left'>BEST DESTINATION<br /><span className='text-sm text-gray-600 font-hind'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</span> </span>
                </li>
                <li className='flex flex-row gap-4'>
                    <span className='bg-sky-600 bg-opacity-75 p-4'>
                        <SiArkecosystem className='text-5xl relative top-1 text-white' />
                    </span>
                    <span className='text-lg md:text-xl text-semibold text-left'>BEST SERVICES<br /><span className='text-sm text-gray-600 font-hind'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</span> </span>
                </li>
            </ul>
        </div>
    )
}

export default Intro
