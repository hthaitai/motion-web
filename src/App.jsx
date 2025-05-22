import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import Footer from "./components/Footer";
import './i18n';
function App() {
  return (
    <>
      <Navbar />
      <div className="md:pt-[70px]">
        <Homepage />
      </div>
      <Footer />
    </>
  );
}

export default App;
