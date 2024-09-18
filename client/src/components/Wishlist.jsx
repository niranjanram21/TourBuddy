import React from 'react';
import { useWishlist } from '../context/WishlistContext';
import { FaRegClock, FaArrowRight } from "react-icons/fa";
import { IoPeopleSharp } from "react-icons/io5";
import { MdLocationOn } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import { CiCircleRemove } from "react-icons/ci";

const Wishlist = () => {
    const { wishlist, removeFromWishlist } = useWishlist();
    const navigate = useNavigate();

    if (wishlist.length === 0) {
        return <div className="container mx-auto py-16 text-center">Your wishlist is empty.</div>;
    }

    const handlePackageClick = (id) => {
        const user = JSON.parse(localStorage.getItem('currentUser'));

        if (!user) {
            navigate('/login', { state: { from: `/package/${id}` } });
        } else {
            navigate(`/package/${id}`);
        }
    };

    return (
        <div className="container mx-auto py-16 lg:py-32 ">
            <Header />
                <h2 className="text-2xl font-bold mb-8 text-center">Your Wishlist</h2>
            <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-6 px-2 md:px-8 lg:px-16">
                {wishlist.map(product => (
                    <div key={product.id} className="p-4 bg-white md:w-1/2 lg:w-1/3 sm:mb-0 mb-6 flex flex-col shadow-lg shadow-gray-300 rounded-lg">
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
                                    <span
                                        onClick={() => removeFromWishlist(product.id)}
                                        className="ml-auto inline-flex gap-2 items-center mt-3 hover:cursor-pointer hover:scale-105"
                                    >
                                        <span>Remove</span>
                                        <CiCircleRemove className='text-red-500 font-bold' />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Wishlist;
