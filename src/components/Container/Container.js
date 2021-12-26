import React from 'react';
import './Container.scss';

export const Container = ({ children }) => {
    return (
        <div className="container">
            {children}
        </div>
    )
}

export const ContainerSm = ({ children }) => {
    return (
        <div className="container-sm">
            {children}
        </div>
    )
}

export const HeaderContainer = ({ children }) => {
    return (
        <div className="header-container">
            { children }
        </div>
    )
}