import React from 'react';
import { Container } from '../Container/Container';
import './Collection.scss';

const Collection = () => {
    return (
        <section className="collection">
            <Container>
                <div className="collection__inner">
                    <div className="collection__text">
                        <h2>Our skin <span>reset</span> <br />collection</h2>
                        <div className="product--img">
                            <img src="https://res.cloudinary.com/dljsalifp/image/upload/v1640472040/grapevine/img1_rroyxb.png" alt="skin care products" />
                        </div>
                        <div className="product--desc">
                            <div>
                                <p>This premium set of minis is the perfect introduction to our range combating hyperpigmentation and restoring a radiant glow all.</p>
        
                                <a href="/">Shop Now</a>
                            </div>
                        </div>
                    </div>
                    <div className="collection__img">
                        <img src="https://res.cloudinary.com/dljsalifp/image/upload/v1640472047/grapevine/img2_fjv3g8.png" alt="a lady" />
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Collection
