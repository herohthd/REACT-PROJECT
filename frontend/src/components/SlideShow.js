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
    duration: 3000,
    transitionDuration:1000,
    canSwipe: true,
  };
  return (
    <div className="slide-container" duration="2000">
      <Slide {...fadeProperties}>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[0]} alt="Nem"/>
            <div class="text-box">
              <a  href="/">Nem cuon Viet Nam</a>
            </div>
          </div>

        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[1]} alt="Spaghetti"/>
            <div class="text-box">
              <a href="/">Roasted Veggie Grain Platter</a>
            </div>
          </div>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[2]} alt="Tacos"/>
            <div class="text-box">
              <a href="/">Mexico Ground Beef Tacos</a>
            </div>
          </div>
        </div>
      </Slide>
    </div>
  )
}
