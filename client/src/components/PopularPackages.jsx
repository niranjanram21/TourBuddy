import React, { useState } from 'react';
import { useProducts } from '../context/ProductContext';
import { useNavigate } from 'react-router-dom';
import { FaRegClock, FaArrowRight, FaHeart } from "react-icons/fa";
import { IoPeopleSharp } from "react-icons/io5";
import { MdLocationOn } from "react-icons/md";
import { useWishlist } from '../context/WishlistContext'; 

const PopularPackages = () => {
    const { data, error, loading } = useProducts();
    const [visibleCount, setVisibleCount] = useState(3);
    const navigate = useNavigate();
    const { addToWishlist } = useWishlist(); 

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    const productsToDisplay = data.slice(0, visibleCount);

    const loadMoreProducts = () => {
        setVisibleCount(prev => prev + 3);
    };

    const handlePackageClick = (id) => {
        const user = JSON.parse(localStorage.getItem('currentUser'));

        if (!user) {
            navigate('/login', { state: { from: `/package/${id}` } });
        } else {
            navigate(`/package/${id}`);
        }
    };

    const handleWishlistClick = (product) => {
        addToWishlist(product); 
    };

    return (
        <section className="text-gray-600 bg-white body-font px-2 md:px-8 lg:px-16 pb-4 mb-4">
            <div className="container pt-16 mx-auto">
                <div className="flex flex-col">
                    <div className="flex items-center gap-12 mb-2 md:mb-6">
                        <h2 className="text-2xl font-montserrat font-bold text-gray-800 lg:text-3xl">Popular Packages</h2>
                    </div>
                </div>
                <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-6">
                    {productsToDisplay.map(product => (
                        <div key={product.id} className="p-4 font-hind md:w-1/2 lg:w-1/3 sm:mb-0 mb-6 flex flex-col shadow-lg shadow-gray-300 rounded-lg">
                            <div className="relative rounded-lg h-full flex flex-col">
                                <div className="flex-shrink-0 relative h-64 overflow-hidden rounded-lg">
                                    <img
                                        alt={product.title}
                                        className="object-cover object-center h-full w-full"
                                        src={product.image}
                                        onError={(e) => e.target.src = 'http://localhost:3001/images/default_image.jpg'}
                                        style={{ cursor: 'pointer' }}
                                    />
                                    <span className="absolute top-0 left-0 bg-red-500 bg-opacity-60 text-white p-2">
                                        ${product.price}/person
                                    </span>
                                </div>
                                <div className="flex flex-col flex-grow py-4 bg-white">
                                    <ul className='flex flex-row gap-2 relative bottom-8 py-3 text-sm bg-sky-500 shadow-lg shadow-red-200 bg-opacity-95 text-white mx-8 justify-center items-center'>
                                        <li className='flex flex-row gap-1 border-r-2 pr-2 border-white'>
                                            <FaRegClock className='relative top-1' />
                                            <span>{product.duration}</span>
                                        </li>
                                        <li className='flex flex-row gap-1 border-r-2 pr-2 border-gray-200'>
                                            <IoPeopleSharp className='relative top-1' />
                                            <span>people:</span>
                                            <span>{product.people}</span>
                                        </li>
                                        <li className='flex flex-row gap-1 pr-2 border-gray-200'>
                                            <MdLocationOn className='relative top-1' />
                                            <span>{product.location}</span>
                                        </li>
                                    </ul>
                                    <h2 className="text-xl font-medium title-font text-gray-900">{product.title}</h2>
                                    <p className="text-base leading-relaxed mt-2 italic">{product.description}</p>
                                    <div className='flex flex-row mt-auto text-gray-900 '>
                                        <span onClick={() => handlePackageClick(product.id)} className=" inline-flex gap-2 items-center mt-3 hover:cursor-pointer hover:scale-105">
                                            <span>Book Now</span>
                                            <FaArrowRight className='text-red-500' />
                                        </span>
                                        <span onClick={() => handleWishlistClick(product)} className="ml-auto inline-flex gap-2 items-center mt-3 hover:cursor-pointer hover:scale-105">
                                            <span>Wishlist</span>
                                            <FaHeart className='text-red-500' />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <button onClick={loadMoreProducts} className='py-2 px-6 mt-8 text-sm lg:text-md flex justify-center items-center bg-red-300 hover:bg-red-400 bg-opacity-95 mx-auto text-gray-800 hover:text-white font-semibold transition duration-150 ease-in-out'>
                Explore More Packages
            </button>
        </section>
    );
};

export default PopularPackages;
