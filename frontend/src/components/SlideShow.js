import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import img1 from '../img/slide_5.png'
import img2 from '../img/slide_6.png'
import img3 from '../img/slide_7.png'
import "../styles/style.scss"
export default function SlideShow(){
  const fadeImages = [
    img1,
    img2,
    img3
  ];
  const fadeProperties = {
    duration: 1000000,
    transitionDuration:1000,
    canSwipe: true,
  };
  return (
    <div className="slide-container" duration="2000">
      <Slide {...fadeProperties}>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[0]} alt="HAMBURGER"/>
            <div class="text-box">

              <h1>Nem cuon Viet Nam</h1>
            </div>
          </div>

        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[1]} alt="THITKHOTAU"/>
            <div class="text-box">
              <h1>Spaghetti</h1>
            </div>
          </div>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[2]} alt="TACOS"/>
            <div class="text-box">
              <h1>Mexico Tacos</h1>
            </div>
          </div>
        </div>
      </Slide>
    </div>
  )
}
