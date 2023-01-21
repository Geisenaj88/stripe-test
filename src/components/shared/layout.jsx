import React from 'react'
import Header from 'components/header/header.component';
import Footer from 'components/footer/footer.component';

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <main>
                {
                    children
                }
            </main>
            <Footer />
        </>
    );
}

export default Layout;