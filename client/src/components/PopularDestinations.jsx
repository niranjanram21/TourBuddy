import React from 'react'
import img1 from '../assets/popular/popular1.jpg'
import img2 from '../assets/popular/popular2.jpg'
import img3 from '../assets/popular/popular3.jpg'
import img4 from '../assets/popular/popular4.jpg'

const PopularDestinations = () => {
    return (
        <div className="bg-white pt-8 lg:py-4">
            <div className="mx-auto max-w-screen-2xl px-4 md:px-8 lg:px-16">
                <div className="mb-4 flex items-center justify-between gap-8 sm:mb-8 md:mb-12">
                    <div className="flex items-center gap-12">
                        <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl font-montserrat">Popular Countries</h2>
                        <p className="hidden font-hind max-w-screen-sm text-gray-500 md:block">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text.</p>
                    </div>
                    <span className="inline-block rounded-lg border bg-white px-4 py-2 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:px-8 md:py-3 md:text-base">More</span>
                </div>

                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8 font-hind">
                    <span className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
                        <img src={img2} loading="lazy" alt="" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
                        <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">London-[England]</span>
                    </span>

                    <span className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80">
                        <img src={img1} loading="lazy" alt="" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
                        <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">California-[USA]</span>
                    </span>

                    <span className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80">
                        <img src={img3} loading="lazy" alt="" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
                        <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Amritsar-[India]</span>
                    </span>

                    <span className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
                        <img src={img4} loading="lazy" alt="" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
                        <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Tokyo-[Japan]</span>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default PopularDestinations
