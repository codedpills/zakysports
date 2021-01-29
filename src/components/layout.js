import React from 'react';
import Footer from './footer/Footer';
import Header from './header/Header';

const layout = ({children}) => {
    return (
        <>
        <Header />
            {children}
        <Footer />    
        </>
    );
}

export default layout;
