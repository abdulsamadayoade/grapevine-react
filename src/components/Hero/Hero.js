import React from 'react';
import './Hero.scss';

const Hero = () => {
    return (
        <div className="hero">
            <div className="hero__inner">
                <p className="hero__subheading">Evolve your skin with luxury, science-led natural skincare with highest calibre of green science innovation </p>
                <h1 className="hero__heading">
                    <span className="hero__heading--left">Cruelty-free</span>
                    <span className="hero__heading--right">luxury skincare</span>
                </h1>
            </div>
        </div>
    )
}

export default Hero
