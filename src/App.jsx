import React from "react";
import Hero from "./components/Hero";
import PortfolioGrid from "./components/PortfolioGrid";
import BottomCTA from "./components/BottomCTA";
import Footer from "./components/Footer";
import "./assets/style.css";

function App() {
  return (
    <div className="App">
      <Hero />
      <PortfolioGrid />
      <BottomCTA />
      <Footer />
    </div>
  );
}

export default App;
