import React, { Suspense, lazy, useEffect } from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import { Link as ScrollLink, Element } from 'react-scroll';
import Footer from '../components/Footer/Footer';

import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = lazy(() => import('../components/Contact'));
const Hero = lazy(() => import('../components/Hero'));
const PopularDestinations = lazy(() => import('../components/PopularDestinations'));
const PopularPackages = lazy(() => import('../components/PopularPackages'));
const About = lazy(() => import('../components/About/About'));
const Intro = lazy(() => import('../components/About/Intro'));
const Gallery = lazy(() => import('../components/About/Gallery'));
const Clients = lazy(() => import('../components/About/Clients'));
const Testimonials = lazy(() => import('../components/About/Testimonials'));

const Home = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
            mirror: false,
        });
    }, []);
    return (
        <div className='bg-white'>
            <ParallaxProvider>
                <div className="header flex space-x-4 py-4">
                    <ScrollLink to="home" smooth={true} duration={2000} className="cursor-pointer text-blue-500 hover:underline">Home</ScrollLink>
                    <ScrollLink to="packages" smooth={true} duration={2000} className="cursor-pointer text-blue-500 hover:underline">Packages</ScrollLink>
                    <ScrollLink to="about" smooth={true} duration={3000} className="cursor-pointer text-blue-500 hover:underline">About</ScrollLink>
                    <ScrollLink to="contact" smooth={true} duration={3000} className="cursor-pointer text-blue-500 hover:underline">Contact</ScrollLink>
                </div>

                <Element name="home">
                    <Hero />
                    <Suspense fallback={<div>Loading Popular Destinations...</div>}>
                        <section data-aos="fade-up" data-aos-delay="200" data-aos-duration="800" data-aos-offset="100">
                            <PopularDestinations />
                        </section>
                    </Suspense>
                </Element>

                <Element name="packages">
                    <Suspense fallback={<div>Loading Popular Packages...</div>}>
                        <PopularPackages />
                    </Suspense>
                </Element>

                <Element name="about">
                    <Suspense fallback={<div>Loading About...</div>}>
                        <About />
                    </Suspense>
                </Element>

                <Element name="intro">
                    <Suspense fallback={<div>Loading Intro...</div>}>
                        <section data-aos="zoom-in-up" data-aos-delay="200" data-aos-duration="800" data-aos-offset="100">
                            <Intro />
                        </section>
                    </Suspense>
                </Element>

                <Element name="gallery">
                    <Suspense fallback={<div>Loading Intro...</div>}>
                        <Gallery />
                    </Suspense>
                </Element>

                <Element name="clients">
                    <Suspense fallback={<div>Loading Intro...</div>}>
                        <Clients />
                    </Suspense>
                </Element>

                <Element name="contact">
                    <Suspense fallback={<div>Loading Contact...</div>}>
                        <Contact />
                    </Suspense>
                </Element>

                <Element name="testimonials">
                    <Suspense fallback={<div>Loading Intro...</div>}>
                        <Testimonials />
                    </Suspense>
                </Element>

                <Footer />
            </ParallaxProvider>
        </div>
    );
};

export default Home;
