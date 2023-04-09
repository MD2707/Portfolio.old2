import '../App.css';
import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import Fade from 'react-reveal/Fade';

const SecondMain = React.forwardRef((props, secondRef) => ( 
    <div className='second-container' ref={secondRef}> 
        <Fade left>  
            <div className='second-container-div'>
            <TypeAnimation
              // Same String at the start will only be typed once, initially
              sequence={[
              ' ',
              1000,
              'Developpement',
              1000
              ]}
              speed={40} // Custom Speed from 1-99 - Default Speed: 40
              style={{  color: "#ffdf00",
                fontSize:" 4rem",
                fontWeight: "bold",
                margin: "-1rem" }}
              wrapper="span" // Animation will be rendered as a <span>
              repeat={Infinity} // Repeat this Animation Sequence infinitely
            />
                <p>Je suis un étudiant en BUT informatique à Bordeaux. Passioné  par le monde du web. j'ai su développer 
                    un fort intérêt pour le développement Web full-stack
                    J'ai pour ambition de rejoindre une petite équipe composée de profils différents et complémentaires en tant que développeur Web.
                </p>
            </div>
        </Fade>  
        <Fade right>  
            <div className='second-container-div'>
            <TypeAnimation
              // Same String at the start will only be typed once, initially
              sequence={[
              ' ',
              1700,
              'Loisirs',
              1000
              ]}
              speed={40} // Custom Speed from 1-99 - Default Speed: 40
              style={{  color: "#ffdf00",
                fontSize:" 4rem",
                fontWeight: "bold",
                margin: "-1rem" }}
              wrapper="span" // Animation will be rendered as a <span>
              repeat={Infinity} // Repeat this Animation Sequence infinitely
            />
                
                <p>Lors de mon temps libre, je travail sur des projets personnels orienté sur des langages WEB afin de perfectionner mes compétences.
                    J'aime également passer du temps dans la nature, chasser et pêcher, seul ou aves mes amis.</p>
            </div>
        </Fade>
    </div>

    ));

export default SecondMain;
