import React from 'react';
import { Container } from '../Container/Container';
import Button from '../Button/Button';
import { HeaderContainer } from '../Container/Container';
import './Picks.scss';

const Picks = () => {
    return (
        <section className="picks">
            <Container>
                <HeaderContainer>
                    <span className="p-subheading">TOP PICKS</span>
                    <h2 className="p-heading">Our bestsellers</h2>
                </HeaderContainer>

                <div className="picks__grid">
                    <div className="product">
                        <div className="product__img">
                            <img src="https://res.cloudinary.com/dljsalifp/image/upload/v1640472039/grapevine/img5_n40mez.png" alt="product" />
                        </div>

                        <div className="product__details">
                            <h3 className="product__name">Hand and Cuticle<br /> Oil collection</h3>
                            <h5 className="product__price">$ 50</h5>
                        </div>
                    </div>

                    <div className="product">
                        <div className="product__img">
                            <img src="https://res.cloudinary.com/dljsalifp/image/upload/v1640472039/grapevine/img6_pwqblz.png" alt="product" />
                        </div>

                        <div className="product__details">
                            <h3 className="product__name">Hand and Cuticle<br /> Oil collection</h3>
                            <h5 className="product__price">$ 26</h5>
                        </div>
                    </div>

                    <div className="product">
                        <div className="product__img">
                            <img src="https://res.cloudinary.com/dljsalifp/image/upload/v1640472039/grapevine/img7_dqilcw.png" alt="product" />
                        </div>

                        <div className="product__details">
                            <h3 className="product__name">Hand and Cuticle<br /> Oil collection</h3>
                            <h5 className="product__price">$ 38</h5>
                        </div>
                    </div>
                </div>

                <div style={{textAlign: 'center'}}>
                    <Button>SHOP NOW</Button>
                </div>
            </Container>
        </section>
    )
}

export default Picks
