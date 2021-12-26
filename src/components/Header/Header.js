import React from 'react';
import Nav from '../Nav/Nav';
import Hero from '../Hero/Hero';
import { Container } from '../Container/Container';
import './Header.scss';

const Header = () => {
    return (
        <header>
            <Container>
                <Nav />
                <Hero />
            </Container>
        </header>
    )
}

export default Header
