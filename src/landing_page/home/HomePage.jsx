import React from 'react';
import NavBar from './Navbar';
import Hero from './Hero';
import Awards from './Awards';
import Pricing from './Pricing';
import Stats from './Stats';
import Education from './Education';
import Footer from '../Footer';
import OpenAccount from '../OpenAccount';

export default function HomePage() {
    return (
        <>
            <NavBar />
            <Hero />
            <Stats />
            <Education />
            <Pricing />
            <Awards />
            <OpenAccount />
            {/* <Footer /> */}
        </>
    )
}