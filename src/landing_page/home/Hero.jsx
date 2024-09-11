import React from 'react';
import "./Hero.css";

export default function Hero() {
    return (
        <div className="container">
            <div className="row text-center ">
                <img src='./media/images/homeHero.png' alt='Home Hero image' className='Hero-img mb-4'></img>
                <h1>Invest in everything</h1>
                <p className='mb-5'>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                <button className='Hero p-2  fs-5'>Signup for free</button>
            </div>
        </div>
    )
}