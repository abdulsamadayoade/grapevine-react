import React from 'react';
import './Gallery.scss';
import { Container } from '../Container/Container';
import { HeaderContainer } from '../Container/Container';

const Gallery = () => {
    return (
        <section className="gallery">
            <Container>
                <HeaderContainer>
                    <span className="p-subheading">INSTAGRAM</span>
                    <h2 className="p-heading">@grapevine</h2>
                    <p>Here we first show new products and models, play out discounts</p>
                </HeaderContainer>
                <div className="imgBox imgBox--1">
                    <img src="https://res.cloudinary.com/dljsalifp/image/upload/v1640472039/grapevine/img10_eelwxu.png" alt="" />
                </div>
                <div className="imgBox imgBox--2">
                    <img src="https://res.cloudinary.com/dljsalifp/image/upload/v1640472039/grapevine/img12_bcljeo.png" alt="" />
                </div>
                <div className="imgBox imgBox--3">
                    <img src="https://res.cloudinary.com/dljsalifp/image/upload/v1640472044/grapevine/img13_zj4cjj.png" alt="" />
                </div>
                <div className="imgBox imgBox--4">
                    <img src="https://res.cloudinary.com/dljsalifp/image/upload/v1640472041/grapevine/img11_vep1pm.png" alt="" />
                </div>
            </Container>
        </section>
    )
}

export default Gallery
