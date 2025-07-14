import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import Footer from './components/Footer';
import './i18n';
import { BrowserRouter, Route, Routes } from 'react-router';
import ProductDetail from './components/ProductDetail';
import AboutUs from './components/AboutUs';
import Policy from './components/Policy';
import Contact from './components/Contact';
import DownloadApp from './components/DownloadApp';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="md:pt-[70px]">
          <Routes>
            <Route path="" element={<Homepage />} />
            <Route path="product" element={<ProductDetail />} />
            <Route path="about" element={<AboutUs />} />
            <Route path="refundpolicy" element={<Policy />} />
            <Route path="contact" element={<Contact />} />
            <Route path="download" element={<DownloadApp />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
