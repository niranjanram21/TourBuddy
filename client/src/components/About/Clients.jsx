import React from 'react';
import clients from '../../assets/herobg.jpg';
import clients2 from '../../assets/footerImg1.jpg';
import clients3 from '../../assets/footerImg.jpg';


const Clients = () => {
    return (
        <section class="mx-auto max-w-screen-2xl bg-gradient-to-r from-blue-50 to-red-100 py-16 md:py-0 lg:py-4 px-2 md:px-4">
            <div class="mb-2 flex flex-wrap  justify-between md:mb-16">
                <div class="mb-6  flex w-full flex-col justify-center sm:mb-12 lg:mb-0 lg:w-1/4 lg:pb-24 lg:pt-36">
                    <h1 class="mb-4 text-4xl font-extrabold text-black sm:text-5xl md:mb-4 md:text-4xl font-montserrat">Travel & <br /> Remember Us</h1>
                    <div className='grid grid-cols-2  gap-4 py-1 px-4 text-lg bg-gradient-to-r text-gray-800 from-red-200 to-blue-200 shadow-xl'>
                        <span className='flex flex-row gap-2 '>
                            <h4><strong>200+</strong> Team members</h4>
                        </span>
                        <span className='flex flex-row gap-2 '>
                            <h4><strong>100k+</strong>  Satified clients</h4>
                        </span>
                        <span className='flex flex-row gap-2 '>
                            <h4><strong>500+</strong> Top Destinations </h4>
                        </span>
                        <span className='flex flex-row gap-2  '>
                            <h4><strong>100+</strong>  Social Partners</h4>
                        </span>

                    </div>
                </div>

                <div class="mb-4 flex w-full md:mb-16 lg:w-3/4">
                    <div class="relative left-12 top-4 z-10 -ml-12 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:left-20 md:top-4 lg:ml-0">
                        <img src={clients3} loading="lazy" alt="" class="h-full w-full object-cover object-center" />
                    </div>

                    <div class="relative left-12 top-12 z-10 -ml-12 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:left-16 md:top-16 lg:ml-0">
                        <img src={clients2} loading="lazy" alt="" class="h-full w-full object-cover object-center" />
                    </div>

                    <div class="overflow-hidden rounded-lg bg-gray-100 shadow-lg">
                        <img src={clients} loading="lazy" alt="" class="h-full w-full object-cover object-center" />
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Clients;
