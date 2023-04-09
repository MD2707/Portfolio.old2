import '../App.css';
import Header from '../component/Header';
import ButtonContainer from '../component/buttonContainer';
import React, { useRef } from 'react';
import FirstMain from '../component/FirstMain';
import ThirdMain from '../component/ThirdMain';
import SecondMain from '../component/SecondMain';

function Main() {
  
  document.body.classList.add("overflow-hidden")
  const firstRef = useRef(null);
  const secondRef = useRef(null);
  const thirdRef = useRef(null); 
  const scrollToFirst= () => {
    setTimeout(() =>{firstRef.current.scrollIntoView({ behavior: 'smooth' })}, 300);
  };

  const scrollToSecond= () => {
    setTimeout(() =>{secondRef.current.scrollIntoView({ behavior: 'smooth' })}, 300);
  };

  const scrollToThird = () => {
    setTimeout(() =>{thirdRef.current.scrollIntoView({ behavior: 'smooth' })}, 300);
  };

  return (
    <div className="Main">
      <Header first={scrollToFirst} second={scrollToSecond} third={scrollToThird} />
      <ButtonContainer first={scrollToFirst} second={scrollToSecond} third={scrollToThird}/>
      <FirstMain ref={firstRef}/>
      <SecondMain ref={secondRef}/>
      <ThirdMain ref={thirdRef}/>

    </div>
  );
}

export default Main;
