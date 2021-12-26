import React from 'react';
import { Container } from '../Container/Container';
import './Testimonials.scss'

const Testimonials = () => {
    return (
        <section className="testimonials">
            <Container>
                <div className="testimonials__inner">
                    <div className="testimonials__img">
                        <img src="https://res.cloudinary.com/dljsalifp/image/upload/v1640472046/grapevine/img9_mqapd2.png" alt="woman" />
                    </div>
                    <div className="testimonials__text">
                        <p className="testimonials__message">“Grapevine has managed to produce the best naturally derived products without any harmful ingredients in a sophisticated way”</p>

                        <p className="customer__name">Juliet Annabelle</p>
                        <p className="customer__profession">Beauty model</p>

                        <div className="arrows">
                            <button className="prev-btn" style={{'marginRight': '.9rem'}}>
                                <svg width="35" height="25" viewBox="0 0 35 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.2261 23.9336C11.572 16.3402 6.97541 12.5435 0.43603 12.5435C7.03354 12.5435 11.6302 8.7468 14.2261 1.1534M34.1602 12.5988L0.373237 12.5988L34.1602 12.5988Z" stroke="black" strokeWidth="2"/>
                                </svg>                                
                            </button>
                            <button className="next-btn">
                                <svg width="35" height="24" viewBox="0 0 35 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20.5747 0.449219C23.2287 8.04261 27.8254 11.8393 34.3648 11.8393C27.7672 11.8393 23.1706 15.636 20.5747 23.2294M0.640625 11.784H34.4275H0.640625Z" stroke="black" strokeWidth="2"/>
                                </svg>                                
                            </button>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Testimonials;
