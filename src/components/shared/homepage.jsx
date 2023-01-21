import React from 'react';
import Hero from 'components/hero/hero.component';
import Layout from './layout';
import FeaturedCollection from 'components/featured-collection/featured-collection';
import MainSection from 'components/main-section/main-section.component';

const HomePage = () => {
    return (
        <>
            <Layout>
                <Hero />
                <MainSection />
                <FeaturedCollection />
            </Layout>
        </>
    )
}

export default HomePage;