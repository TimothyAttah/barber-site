import React from 'react';
import Hero from '../hero/Hero';
import About from '../about/About';
import { Teams } from '../teams/Teams';
import { Price } from '../price/Price';
import Footer from '../footer/Footer';

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Teams />
      <Price />
      <Footer />
    </div>
  );
};

export default Home;
