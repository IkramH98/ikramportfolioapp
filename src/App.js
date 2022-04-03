import React from "react";
import Particles from "react-particles-js";
import About from "./components/About/About"
import Home from "./components/Home/home";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import Projects from "./components/Projects/Projects";
const App = () => {
  return (
    <div className="min-h-screen w-full bg-pr">

      <Header />
      <Home/>
      <About/>
      <Projects/>
      <Footer/>

      
    </div>
  );
};

export default App;
