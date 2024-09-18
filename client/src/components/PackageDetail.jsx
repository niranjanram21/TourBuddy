import React, { useEffect, useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Header from './Header';
import { MdLocationOn } from "react-icons/md";
import { FaRegClock } from "react-icons/fa";
import PopularPackages from './PopularPackages';
import Footer from './Footer/Footer';
import { AuthContext } from '../context/AuthContext';

const PackageDetail = () => {
    const { id } = useParams();
    const [packageDetail, setPackageDetail] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const { isAuthenticated } = useContext(AuthContext);

    useEffect(() => {
        const fetchPackageDetail = async () => {
            try {
                const response = await axios.get(`http://localhost:3001/api/products/${id}`);
                setPackageDetail(response.data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchPackageDetail();
    }, [id]);

    const handleBookNow = () => {
        console.log('Authenticated:', isAuthenticated); 
        if (isAuthenticated) {
            navigate('/booking', { state: { packageDetail } });
        } else {
            navigate('/login', { state: { from: '/booking', packageDetail } });
        }
    };


    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <>
            <Header />
            <section className="text-gray-600 body-font overflow-hidden bg-white font-hind">
                <div className="container px-5 pt-36 pb-12 mx-auto">
                    <div className="lg:w-4/5 mx-auto flex flex-wrap">
                        <img alt={packageDetail.title} className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src={packageDetail.image} />
                        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                            <div className="grid grid-cols-2 mb-4">
                                <div className='flex flex-row gap-2'>
                                    <MdLocationOn className='relative top-1 text-md' />
                                    <h2 className="text-md title-font text-gray-500 tracking-widest">{packageDetail.location}</h2>
                                </div>
                                <li className='flex flex-row gap-2 border-r-2 pr-2 border-white'>
                                    <FaRegClock className='relative top-1' />
                                    <span>{packageDetail.duration}</span>
                                </li>
                            </div>
                            <h1 className="text-gray-900 font-bold text-3xl title-font mb-1 font-montserrat">{packageDetail.title}</h1>
                            <div className="flex mb-4"></div>
                            <p className="leading-relaxed">{packageDetail.detailedDescription}</p>
                            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5"></div>
                            <div className="flex">
                                <span className="title-font font-bold text-2xl text-red-800 drop-shadow-md">${packageDetail.price}<span className='text-sm font-medium text-gray-600'> /person</span></span>
                                <button
                                    className="flex ml-auto text-gray-800 hover:text-gray-200 outline outline-indigo-400 bg-indigo-200 bg-opacity-80 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
                                    onClick={handleBookNow}
                                >
                                    Book Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <PopularPackages />
            <Footer />
        </>
    );
};

export default PackageDetail;
