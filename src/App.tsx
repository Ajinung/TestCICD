import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Home/Header/Header";
import Footer from "./components/Home/Footer/Footer";
import Hero from "./components/Home/Hero/Hero";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Footer />
    </div>
  );
}

export default App;
