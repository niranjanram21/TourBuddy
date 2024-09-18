import React from 'react';
import galleryImg1 from '../../assets/TourGallery/gallery1.jpg';
import galleryImg2 from '../../assets/TourGallery/gallery2.jpg';
import galleryImg3 from '../../assets/TourGallery/gallery3.jpg';
import galleryImg4 from '../../assets/TourGallery/gallery4.jpg';
import galleryImg5 from '../../assets/TourGallery/gallery5.jpg';
import galleryImg6 from '../../assets/TourGallery/gallery6.jpg';
import galleryImg7 from '../../assets/TourGallery/gallery7.jpg';

const Gallery = () => {
    return (
        <div className='px-2 md:px-16 lg:px-40 mt-8 md:my-24'>
            <div className="flex gap-2 mb-2 h-40 md:h-60 lg:h-80">
                <div className="flex-none w-1/3 h-full">
                    <img src={galleryImg1} alt="Client 1" className="object-cover h-full w-full" />
                </div>
                <div className="flex-auto w-1/4 h-full hidden md:block">
                    <img src={galleryImg2} alt="Client 1" className="object-cover h-full w-full" />
                </div>
                <div className="flex-auto w-1/2 h-full py-4 lg:px-4">
                    <h4 className='text-md lg:text-lg text-red-600 font-bold font-hind'>OUR TOUR GALLERY</h4>
                    <h1 className='text-xl lg:text-4xl text-left text-gray-900 font-extrabold lg:my-2 drop-shadow-xl font-montserrat'>BEST PHOTOS SHARED BY TRAVELLERS</h1>
                    <p className='text-gray-600 text-left hidden md:block md:py-2 font-hind'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias assumenda obcaecati expedita, ex voluptatum perferendis accusamus Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, architecto?</p>
                </div>
            </div>

            <div className="flex gap-2 mb-2 h-36 md:h-60 lg:h-80">
                <div className="flex-none w-1/4 h-full">
                    <img src={galleryImg3} alt="Client 1" className="object-cover h-full w-full" />
                </div>
                <div className="flex-auto w-1/2 h-full">
                    <img src={galleryImg7} alt="Client 1" className="object-cover h-full w-full" />
                </div>
                <div className="flex-auto w-1/4 h-full">
                    <img src={galleryImg5} alt="Client 1" className="object-cover h-full w-full" />
                </div>
            </div>

            <div className="flex gap-2 mb-2 h-36 md:h-60 lg:h-80 md:hidden">
                <div className="flex-none w-1/2 h-full">
                    <img src={galleryImg6} alt="Client 1" className="object-cover h-full w-full" />
                </div>
                <div className="flex-auto w-1/2 h-full">
                    <img src={galleryImg4} alt="Client 1" className="object-cover h-full w-full" />
                </div>

            </div>
        </div>
    );
};

export default Gallery;
