import '../App.css';
import imgEclair from '../Image/eclair.png';
import Fade from 'react-reveal/Fade';

function Header(props) {
  return (
    <nav className="Header">
      <Fade left>
        <div id="logo">
          <img src={imgEclair} alt="logo" />
          <p>M.D</p>
        </div>
      </Fade>
     
      <Fade right>
        <p  className="effect-three hoverable" onClick={props.first}>Accueil</p>
        <p className="effect-three hoverable" onClick={props.second}>Qui suis-je ?</p>
        <p className="effect-three hoverable" onClick={props.third}>Mes réseaux</p>
      </Fade>
      
    </nav>
  );
}

export default Header;
