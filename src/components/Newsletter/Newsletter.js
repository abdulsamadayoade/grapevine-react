import React from 'react';
import './Newsletter.scss';

const Newsletter = () => {
    return (
        <section className="newsletter">
            <div className="newsletter__inner">
                <span className="p-subheading">NEWSLETTER</span>
                <h2 className="p-heading">Join our mailing list to get the latest updates</h2>
                <div className="input-box">
                    <input type="text" placeholder="Sign me up" />
                    <button>
                        <svg width="35" height="24" viewBox="0 0 35 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.1743 0.640625C22.8283 8.23402 27.425 12.0307 33.9644 12.0307C27.3668 12.0307 22.7702 15.8274 20.1743 23.4208M0.240234 11.9754H34.0272H0.240234Z" stroke="white" strokeWidth="2"/>
                        </svg>                        
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Newsletter
