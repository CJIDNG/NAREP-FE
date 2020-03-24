import React from 'react';
import Header from '../../components/shared/header/unathenticated-header.component';
import HomeBanner from '../../components/home-banner/home-banner.component';
import HomePageSector from '../../components/homepage-sectors/homepage-sectors.component';

const Home = () => (
  <>
    <Header />
    <HomeBanner />
    <HomePageSector />
  </>

);

export default Home;
