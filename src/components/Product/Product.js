import React from 'react';
import { HeaderContainer } from '../Container/Container';
import './Product.scss';

const Product = () => {
    return (
        <section className="products">
            <div className="products__inner">
                <HeaderContainer>
                    <span className="p-subheading">OUR PRODUCTS</span>
                    <h2 className="p-heading">Grapevine’s products are of unwavering standards</h2>
                </HeaderContainer>
                <div className="products__content">
                    <img className="products__img" src="https://res.cloudinary.com/dljsalifp/image/upload/v1640472042/grapevine/img3_ah34je.png" alt="skin care products" />
                    <p className="products__body">All of our products are manufactured of high-quality materials. Our products treat your skin(s) with the proper vitamins for every season. So we offer a selection of skincare essentals so it's healthy year-round</p>
                </div>
            </div>
        </section>
    )
}

export default Product
