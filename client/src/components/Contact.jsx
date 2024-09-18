import React from 'react';
import './About/About.css';
import parallaxImg1 from '../assets/parallaxImg.jpg';

const Contact = () => {
  return (
    <div className="about py-4 bg-white">
      <div className="fixed-bg" style={{ backgroundImage: `url(${parallaxImg1})` }}>
        <div className="h-screen flex items-center justify-center">
          <div className="bg-black bg-opacity-40 py-2 sm:py-2 lg:py-4">
            <section class="text-gray-600 body-font relative max-w-xl">
              <div class="container px-5 mx-auto">
                <div class="flex flex-col text-center w-full mb-8">
                  <h1 class="sm:text-3xl font-montserrat text-2xl font-bold title-font my-2 text-gray-200">Contact Us</h1>
                </div>
                <div class="lg:w-2/3 mx-auto font-hind">
                  <div class="flex flex-wrap -m-1">
                    <div class="p-2 w-full">
                      <div class="relative">
                        {/* <label for="name" class="leading-7 text-sm text-gray-600">Name</label> */}
                        <input type="text" placeholder='Enter your name' id="name" name="name" class="w-full bg-transparent bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-black focus:bg-opacity-50 focus:ring-2 focus:ring-indigo-100 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                      </div>
                    </div>
                    <div class="p-2 w-full">
                      <div class="relative">
                        {/* <label for="email" class="leading-7 text-sm text-gray-600">Email</label> */}
                        <input type="email" placeholder='Enter your email' id="email" name="email" class="w-full bg-transparent bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-black focus:bg-opacity-50 focus:ring-2 focus:ring-indigo-100 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                      </div>
                    </div>
                    <div class="p-2 w-full">
                      <div class="relative">
                        {/* <label for="message" class="leading-7 text-sm text-gray-600">Message</label> */}
                        <textarea id="message" placeholder='Enter your query' name="message" class="w-full bg-transparent bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-black focus:bg-opacity-50 focus:ring-2 focus:ring-indigo-100 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                      </div>
                    </div>
                    <div class="p-2 w-full">
                      <button class="flex mx-auto text-white bg-red-300 bg-opacity-40  border-0 py-1 px-6 focus:outline-none hover:bg-red-500 hover:scale-105 transition duration-200 ease-in-out rounded text-md">Submit</button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Contact;
