import React from 'react';
import NavigationBar from './components/Navbar';
import Hero from './components/Hero';
import PortfolioGrid from './components/PortfolioGrid';
import BottomCTA from './components/BottomCTA';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Hero />
      <PortfolioGrid />
      <BottomCTA />
      <Footer />
    </div>
  );
}

export default App;