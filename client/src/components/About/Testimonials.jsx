import React from 'react'
import testimonialImg from '../../assets/testimonial.jpeg';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../Footer/styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Testimonials = () => {
    return (

        <div className='py-4'>
            <div className="h-screen flex flex-col items-center justify-center">
                <h2 className="text-xl font-bold text-gray-800 md:text-3xl mt-4 font-montserrat">Testimonials</h2>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div class="bg-white py-6 sm:py-2 lg:py-4 font-hind">
                            <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
                                <div class="flex flex-col items-center gap-4 md:gap-6">
                                    <div class="max-w-md text-center text-gray-600 lg:text-lg">“Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus nesciunt, unde, repudiandae aspernatur sequi autem ab, accusamus eum tempore in temporibus deserunt reiciendis eaque voluptas sed! In perspiciatis odio similique quia maiores omnis consequatur eaque vel possimus. Veniam repellat aspernatur culpa debitis!”</div>

                                    <div class="flex flex-col items-center gap-2 sm:flex-row md:gap-3">
                                        <div class="h-12 w-12 overflow-hidden rounded-full bg-gray-100 shadow-lg md:h-14 md:w-14">
                                            <img src={testimonialImg} loading="lazy" alt="" class="h-full w-full object-cover object-center" />
                                        </div>

                                        <div>
                                            <div class="text-center text-sm font-bold text-indigo-500 sm:text-left md:text-base">John McCulling</div>
                                            <p class="text-center text-sm text-gray-500 sm:text-left md:text-sm">Travel Agent</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div class="bg-white py-6 sm:py-2 lg:py-4">
                            <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
                                <div class="flex flex-col items-center gap-4 md:gap-6">
                                    <div class="max-w-md text-center text-gray-600 lg:text-lg">“Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus nesciunt, unde, repudiandae aspernatur sequi autem ab, accusamus eum tempore in temporibus deserunt reiciendis eaque voluptas sed! In perspiciatis odio similique quia maiores omnis consequatur eaque vel possimus. Veniam repellat aspernatur culpa debitis!”</div>

                                    <div class="flex flex-col items-center gap-2 sm:flex-row md:gap-3">
                                        <div class="h-12 w-12 overflow-hidden rounded-full bg-gray-100 shadow-lg md:h-14 md:w-14">
                                            <img src={testimonialImg} loading="lazy" alt="" class="h-full w-full object-cover object-center" />
                                        </div>

                                        <div>
                                            <div class="text-center text-sm font-bold text-indigo-500 sm:text-left md:text-base">John McCulling</div>
                                            <p class="text-center text-sm text-gray-500 sm:text-left md:text-sm">Travel Agent</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div class="bg-white py-6 sm:py-2 lg:py-4">
                            <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
                                <div class="flex flex-col items-center gap-4 md:gap-6">
                                    <div class="max-w-md text-center text-gray-600 lg:text-lg">“Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus nesciunt, unde, repudiandae aspernatur sequi autem ab, accusamus eum tempore in temporibus deserunt reiciendis eaque voluptas sed! In perspiciatis odio similique quia maiores omnis consequatur eaque vel possimus. Veniam repellat aspernatur culpa debitis!”</div>

                                    <div class="flex flex-col items-center gap-2 sm:flex-row md:gap-3">
                                        <div class="h-12 w-12 overflow-hidden rounded-full bg-gray-100 shadow-lg md:h-14 md:w-14">
                                            <img src={testimonialImg} loading="lazy" alt="" class="h-full w-full object-cover object-center" />
                                        </div>

                                        <div>
                                            <div class="text-center text-sm font-bold text-indigo-500 sm:text-left md:text-base">John McCulling</div>
                                            <p class="text-center text-sm text-gray-500 sm:text-left md:text-sm">Travel Agent</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                </Swiper>
            </div>
        </div>

    )
}

export default Testimonials
