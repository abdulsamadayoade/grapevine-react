import React from 'react';
import './Footer.scss';
import FacebookIcon from '../assets/icons/facebook.svg';
import WhatsappIcon from '../assets/icons/whatsapp.svg';
import InstagramIcon from '../assets/icons/instagram.svg';
import TelegramIcon from '../assets/icons/telegram.svg';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__row">
                <a href="/" className="footer__logo">GrapeVine</a>

                <div>
                    <h4>Info</h4>
                    <ul>
                        <li>
                            <a href="/">Products</a>
                        </li>

                        <li>
                            <a href="/">About</a>
                        </li>

                        <li>
                            <a href="/">Contact</a>
                        </li>
                    </ul>
                </div>

                <div>
                    <h4>Others</h4>
                    <ul>
                        <li>
                            <a href="/">Terms and Conditions</a>
                        </li>

                        <li>
                            <a href="/">Privacy and policy</a>
                        </li>

                        <li>
                            <a href="/">Shipping</a>
                        </li>
                        <li>
                            <a href="/">Return and refund policy</a>
                        </li>
                    </ul>
                </div>

                <div className="back-to-top">
                    <a href="/">
                        <svg width="65" height="66" viewBox="0 0 65 66" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="32.5" cy="32.8828" r="32" stroke="white"/>
                            <g clipPath="url(#clip0_174_251)">
                            <path fillRule="evenodd" clipRule="evenodd" d="M24 41.1328L32.83 33.2578L42 41.1328L33 25.3828L24 41.1328Z" fill="white"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_174_251">
                            <rect width="15.75" height="18" fill="white" transform="translate(42 25.3828) rotate(90)"/>
                            </clipPath>
                            </defs>
                        </svg>                                       
                    </a>
                </div>
            </div>

            <div className="footer__row">
                <div className="social">
                    <p>Follow us on social media:</p>
                    <ul>
                        <li>
                            <a href="/">
                                <img src={FacebookIcon} alt="facebook icon" />
                            </a>
                        </li>

                        <li>
                            <a href="/">
                                <img src={WhatsappIcon} alt="whatsapp icon" />
                            </a>
                        </li>

                        <li>
                            <a href="/">
                                <img src={InstagramIcon} alt="instagram icon" />
                            </a>
                        </li>

                        <li>
                            <a href="/">
                                <img src={TelegramIcon} alt="telegram icon" />
                            </a>
                        </li>
                    </ul>
                </div>

                <p>Copyright 2021 © Grapevine</p>
            </div>
    </footer>
    )
}

export default Footer
