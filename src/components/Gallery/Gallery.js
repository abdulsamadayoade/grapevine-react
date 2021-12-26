import React, { useEffect } from 'react';
import './Gallery.scss';
import { Container } from '../Container/Container';
import { HeaderContainer } from '../Container/Container';
import hoverEffect from 'hover-effect';

const Gallery = () => {
    var imgs = [
        'https://res.cloudinary.com/dljsalifp/image/upload/v1640472039/grapevine/img10_eelwxu.png',
        'https://res.cloudinary.com/dljsalifp/image/upload/v1640472041/grapevine/img11_vep1pm.png',
        'https://res.cloudinary.com/dljsalifp/image/upload/v1640472039/grapevine/img12_bcljeo.png',
        'https://res.cloudinary.com/dljsalifp/image/upload/v1640472044/grapevine/img13_zj4cjj.png',

    ]
    useEffect(() => {
        new hoverEffect({
          parent: document.querySelector('.imgBox--1'),
          intensity: .2,
          angle: 180,
          image1: imgs[0],
          image2: imgs[0],
          displacementImage: imgs[0]
        });

        new hoverEffect({
            parent: document.querySelector('.imgBox--2'),
            intensity: .2,
            angle: 180,
            image1: imgs[2],
            image2: imgs[2],
            displacementImage: imgs[2]
        });

        new hoverEffect({
            parent: document.querySelector('.imgBox--4'),
            intensity: .2,
            angle: 180,
            image1: imgs[1],
            image2: imgs[1],
            displacementImage: imgs[1]
        });

        new hoverEffect({
            parent: document.querySelector('.imgBox--3'),
            intensity: .2,
            angle: 180,
            image1: imgs[3],
            image2: imgs[3],
            displacementImage: imgs[3]
        });
    });

    return (
        <section className="gallery">
            <Container>
                <HeaderContainer>
                    <span className="p-subheading">INSTAGRAM</span>
                    <h2 className="p-heading">@grapevine</h2>
                    <p>Here we first show new products and models, play out discounts</p>
                </HeaderContainer>
                <div className="imgBox imgBox--1"></div>
                <div className="imgBox imgBox--2"></div>
                <div className="imgBox imgBox--3"></div>
                <div className="imgBox imgBox--4"></div>
            </Container>
        </section>
    )
}

export default Gallery
