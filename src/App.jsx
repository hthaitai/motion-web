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
      <div className="pt-[70px]">
        <Homepage />
      </div>
      <Footer />
    </>
  );
}

export default App;
