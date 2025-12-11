import React from 'react';
import Header from './Header';
import Footer from './Footer';
import StickyCTA from './StickyCTA';

const Layout = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen font-sans text-charcoal">
            <Header />
            <main className="flex-grow">
                {children}
            </main>
            <Footer />
            {/* <StickyCTA /> */}
        </div>
    );
};

export default Layout;
