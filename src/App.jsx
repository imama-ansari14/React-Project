import React from "react";
import { ThemeProvider } from "../src/context/ThemeContext";
import NavigationBar from "./components/navbar";
import Hero from "./components/Hero";
import PortfolioGrid from "./components/PortfolioGrid";
import BottomCTA from "./components/BottomCTA";
import Footer from "./components/Footer";
import "./assets/style.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <NavigationBar />
        <Hero />
        <PortfolioGrid />
        <BottomCTA />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
