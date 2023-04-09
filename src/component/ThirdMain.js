import '../App.css';
import React, { useRef } from 'react';
import 'react-slideshow-image/dist/styles.css';
import { Slide } from 'react-slideshow-image';
import img_github_logo from '../Image/github.png';
import img_linkedin_logo from '../Image/linkedin.png';
import img_profil_linkedin from '../Image/linkedin-profil.png';
import img_profil_github from '../Image/github-profil.png';
import SocialNetwork from '../component/socialNetworkMain'

const proprietes = {
    duration: 3000,
    transitionDuration: 500,
    infinite: true,
    autoplay: true,
    indicators: true,
    arrows: true,
    easing: "ease",
}


const ThirdMain = React.forwardRef((props, thirdRef) => ( 
    <div className='third-container' ref={thirdRef} >   
        <div className='slideContainer'>
            <Slide {...proprietes} >
            <div className="each-slide">
                <SocialNetwork logoHover={"logoHoverW"} link={"https://github.com/MD2707"} color={"whited"} boxShadowC ={"white-box"} srcLogo={img_github_logo} src={img_profil_github} txt={"Github"}/>
            </div>
            <div className="each-slide">
                <SocialNetwork logoHover={"logoHoverB"} link={"https://www.linkedin.com/in/mathias-duprat-34098224b/"} boxShadowC ={"blue-box"} color={"blued"} srcLogo={img_linkedin_logo} src={img_profil_linkedin} txt={"Linkedin"}/>
            </div>
            </Slide>
        </div>   
    </div>
      
    ));

export default ThirdMain;

