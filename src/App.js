import React, { useState, useEffect } from 'react';
import './App.css';
import NavBar from "./components/navbar";
import PurchaseComponent from "./components/purchaseComponent";
import MotionArt from "./components/MotionArt";
import Reviews from "./components/Reviews";
import gsap from 'gsap';
import HeroSection from './components/heroSection';
import Page from './components/page';
import Browsers from './components/browsers';


const App = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPos({ x: event.clientX-40, y: event.clientY-40 });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    gsap.to(".cursor", {
      x: pos.x,
      y: pos.y,
      duration: 0.5,
    });
  }, [pos]);

  return (
    <div className="App">
      <div id='cursor' className='cursor'/>
      <NavBar/>
      <PurchaseComponent/>
      <MotionArt/>
      <Reviews/>
      <HeroSection/>
      <Page/>
      <Browsers/>

      <div className='content'>
          <p>
            An All-Round Plugin With Powerful <br/> Features
          </p>

          <p className='gray'>Whether you're a seasoned web designer or just starting out, Motion Art for<br/> Elementor seamlessly integrates with the Elementor platform, providing you <br/>with a seamless and intuitive experience.</p>
      </div>


      <div className='cards-container'>
        <div className='card'>
          <img src='./Assets/motionarteffect-img9.png' alt=''/>
          <div className='content'>
            <p className='lite'>Light Weight</p>
            <p className='gray'>Motion Art for Elementor is designed to be lightweight.</p>
          </div>
        </div>
        <div className='card'>
          <img src='./Assets/motionarteffect-img6.png' alt=''/>
          <div className='content'>
            <p className='lite'>100% Responsive</p>
            <p className='gray'>Create a consistent visual experience across all devices.</p>
          </div>
        </div>
        <div className='card'>
          <img src='./Assets/motionarteffect-img7.png' alt=''/>
          <div className='content'>
            <p className='lite'>User Friendly Interface</p>
            <p className='gray'>Ensure a smooth experience for both applicants and administrators.</p>
          </div>
        </div>
      </div>

      <div className='footer'>
          <p>© 2023 Copywrite. All rights reserved by QodeMatrix</p>
          <div className='links'>
            <a href='https://qodematrix.com/docs/motion-art-for-elementor/' >Documentaton</a>
            <a href='https://support.qodematrix.com/login'>Support</a>
          </div>
      </div>
    </div>
  );
};

export default App;
