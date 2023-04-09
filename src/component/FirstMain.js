import '../App.css';
import React, { useRef } from 'react';
import { TypeAnimation } from 'react-type-animation';
import FadeIn from 'react-fade-in';
import {Link} from "react-router-dom";
import img_me from '../Image/portrait.jpg'
import img_arrow from '../Image/arrow.png'
const FirstMain = React.forwardRef((props, firstRef) => ( 
    <div className="first-container" ref={firstRef}>
        <div className="middle-content">
          <div className='titleContainer'>
            <FadeIn delay={200} transitionDuration={1500}>
            <TypeAnimation
              // Same String at the start will only be typed once, initially
              sequence={[
              'Mes projets',
              1000,
              'Mes compétences',
              1000,
              'Mes loisirs',
              1000,
              'Mathias Duprat',
              1000,
              ]}
              speed={40} // Custom Speed from 1-99 - Default Speed: 40
              style={{ fontSize: '5rem',color:'white' }}
              wrapper="span" // Animation will be rendered as a <span>
              repeat={Infinity} // Repeat this Animation Sequence infinitely
            />
            <button className='link hoverable' href="">
              <Link to="/projets">Projets</Link>

              <svg strokeWidth="4" stroke="currentColor" viewBox="0 0 24 24" fill="none" className="h-6 w-6" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinejoin="round" strokeLinecap="round"></path>
              </svg>
            </button>
            </FadeIn>
          </div>
          <FadeIn delay={200} transitionDuration={1500}>
            <img src={img_me} alt="portrait" className="main-me-img" /> 
          </FadeIn>
        </div>
        <div className='scroll'>
          <img src={img_arrow}/>
        </div>
          <ul className="circles">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>   
      </div>
    ));

export default FirstMain;
