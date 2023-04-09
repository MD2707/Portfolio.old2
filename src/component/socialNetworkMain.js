import '../App.css';
import { TypeAnimation } from 'react-type-animation';

import Fade from 'react-reveal/Fade';

function socialNetworkMain(props) {
  return (
    <div className='social-container'>
      <div className={'social-img-div '+props.boxShadowC}>
        <Fade><img src={props.src} alt="social-network"/></Fade>
      </div>
      <div className="social-text-div">
          <Fade top> <p>Rendez-vous sur 
            <TypeAnimation
              // Same String at the start will only be typed once, initially
              sequence={[
              ' ',
              1000,
              ' '+props.txt,
              1000,
              ]}
              speed={40} // Custom Speed from 1-99 - Default Speed: 40
              className={props.color}
              wrapper="span" // Animation will be rendered as a <span>
              repeat={Infinity} // Repeat this Animation Sequence infinitely
            /> !</p></Fade>
          <Fade bottom><a href={props.link} className='hoverable'><img  src={props.srcLogo} className={"logo "+ props.logoHover} alt="logo" /></a></Fade>
      </div>   
    </div>
  );
}

export default socialNetworkMain;
