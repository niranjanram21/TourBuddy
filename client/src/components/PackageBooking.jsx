import React, { useEffect, useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import Header from './Header';
import { MdLocationOn } from "react-icons/md";
import { FaRegClock } from "react-icons/fa";

const PackageBooking = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { isAuthenticated } = useContext(AuthContext);
    const packageDetail = location.state?.packageDetail || location.state?.productDetail;

    useEffect(() => {
        if (!isAuthenticated) {
            console.log("User requires authentication");
            navigate('/login', { state: { from: location.pathname } });
        }
    }, [isAuthenticated, navigate, location.pathname]);

    if (!isAuthenticated) {
        return null;
    }

    return (
        <div>
            <Header />
            {packageDetail ? (
                <div className='py-24  flex flex-col lg:flex-row lg:justify-end font-hind'>
                    <div className='basis-1/3 flex flex-col justify-start items-center  p-4 lg:ml-24'>
                        <h2 className='text-center my-4 text-2xl font-bold'>Order Summary</h2>
                        <img
                            alt={packageDetail.title}
                            className="lg:w-4/5 w-full lg:h-auto h-64 object-cover object-center rounded"
                            src={packageDetail.image}
                        />
                        <div className="grid grid-cols-2 gap-8 mt-2 text-gray-500">
                            <div className='flex flex-row gap-3'>
                                <MdLocationOn className='relative top-1 text-md' />
                                <h2 className="text-md title-font tracking-widest">{packageDetail.location}</h2>
                            </div>
                            <li className='flex flex-row gap-2 border-r-2 pr-2 border-white'>
                                <FaRegClock className='relative top-1' />
                                <h2 className="text-md title-font tracking-widest">{packageDetail.duration}</h2>
                            </li>
                        </div>
                        <h2 className='text-xl md:text-2xl font-bold my-4 text-center font-montserrat'>{packageDetail.title}</h2>
                        <p className='text-md mb-2 text-center'>{packageDetail.description}</p>
                        <p className='text-xl font-semibold text-center'>Price: ${packageDetail.price}</p>
                    </div>

                    <div className='basis-2/3 flex justify-center items-center p-4'>
                        <div className="w-full max-w-md outline outline-gray-300 rounded-none p-4 shadow-xl">
                            <h2 className='text-center my-4 text-xl md:text-2xl font-bold'>Select a payment method</h2>
                            <ul className="flex flex-col gap-4">
                                <li className='flex items-center'>
                                    <input type="radio" id="card" name="payment" className='mx-2' />
                                    <label htmlFor="card" className='text-md md:text-lg'>Credit or Debit card</label>
                                </li>
                                <li className='flex flex-col gap-1'>
                                    <input
                                        type="text"
                                        placeholder="Card Number"
                                        className="w-full px-2 py-1 border rounded"
                                    />
                                    <div className="flex gap-2">
                                        <input
                                            type="text"
                                            placeholder="Expiry Date"
                                            className="w-1/2 px-2 py-1 border rounded"
                                        />
                                        <input
                                            type="text"
                                            placeholder="CVV"
                                            className="w-1/2 px-2 py-1 border rounded"
                                        />
                                    </div>
                                </li>
                                <li className='flex items-center'>
                                    <input type="radio" id="net-banking" name="payment" className='mx-2' />
                                    <label htmlFor="net-banking" className='text-md md:text-lg'>Net banking</label>
                                </li>
                                <li className='flex flex-col gap-2'>
                                    <select name="bank" id="bank" className='px-2 py-1 border rounded'>
                                        <option value="HDFC">HDFC</option>
                                        <option value="Canara">Canara</option>
                                        <option value="ICICI">ICICI</option>
                                    </select>
                                </li>
                                <li className='flex items-center'>
                                    <input type="radio" id="upi" name="payment" className='mx-2' />
                                    <label htmlFor="upi" className='text-md md:text-lg'>Other UPI apps</label>
                                </li>
                                <li>
                                    <input type="text" placeholder='Enter your UPI ID' className='w-full px-2 py-1 border rounded' />
                                </li>
                                <li className='flex items-center'>
                                    <input type="radio" id="cod" name="payment" className='mx-2' />
                                    <label htmlFor="cod" className='text-md md:text-lg'>Cash on Delivery</label>
                                </li>
                                <li>
                                    <input type="text" placeholder='Enter your Address' className='w-full px-2 py-1 border rounded' />
                                </li>
                            </ul>
                            <div className='flex flex-col items-end gap-2'>
                                <h2 className='mt-4 text-xl font-bold'>Total amount: ${packageDetail.price}</h2>
                                <button className='flex flex-end mt-2 font-semibold py-2 px-4 bg-yellow-400 bg-opacity-75 hover:cursor-pointer hover:bg-yellow-500 hover:bg-opacity-90'>proceed to payment</button>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <p>No package details available.</p>
            )}
        </div>
    );
};

export default PackageBooking;
