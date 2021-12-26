import React from 'react';
import { ContainerSm } from '../Container/Container';
import Button from '../Button/Button';
import './Showcase.scss';

const Showcase = () => {
    return (
        <section className="showcase">
            <ContainerSm>
                <div>
                    <p>Grapevine trusts in the power of beauty, which is why we aim to set ourself as a global benchmark in beauty; in product - through providing luxurious skincare that ignites your radiance</p>
                    <Button>MORE ABOUT US</Button>
                </div>
            </ContainerSm>
        </section>
    )
}

export default Showcase
