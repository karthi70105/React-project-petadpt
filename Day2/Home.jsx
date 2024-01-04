// src/components/Home.js
import React from 'react';
import Footer from './footer';

const Home = () => (
  <div className="home-container">
    <h1>Welcome to Pet Haven</h1>
    <p>Find your new furry friend and give them a loving home!</p>        
    <img src="https://placekitten.com/400/300" alt="Adorable kitten" height={400} width={600}/>
    <div>
      <Footer />
    </div>
  </div>
);

export default Home;