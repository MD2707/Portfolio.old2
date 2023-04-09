import '../App.css';
import { TypeAnimation } from 'react-type-animation';
import ProjetTemplate from './projetTemplate';

//project array
const projets= [
  {titre:"Devlight", image:"DevLight.png", Technos:"HTML CSS JS", Description:"Un site qui regroupe des publications instagram d'un comtpe de vulgarisation informatique" ,link:"https://devlight.mathias-duprat.fr/"},
  {titre:"Création BD", image:"bd.png", Technos:"MCD SQL LDD", Description:"Un projet ayant pour but de créeer une base de donnée complexe selon un cahier des charges précis" ,link:undefined},
  {titre:"Mini Jeu Labyrinthe", image:"labyrinthe.png", Technos:"JAVA(FX) POO / ANDROID STUDIO", Description:"Un mini - jeu de labyrinthe, avec différents niveaux. Disponible en version pc et mobile" ,link:"https://devlight.mathias-duprat.fr/"},
  {titre:"Lowatem", image:"lowatem.png", Technos:"JAVA POO", Description:"Implémentation des règles d'un jeu de plateau puis création d'une pseudo-IA pour s'affronter dans un tournoi." ,link:undefined},
  {titre:"Nerdit", image:"nerdit.png", Technos:"HTML CSS", Description:"Création d'une entreprise fictive (PESTEL / analyse de marché ...) puis réalisation d'un site web associé" ,link:"https://devlight.mathias-duprat.fr/"},
  {titre:"Station Meteo", image:"meteo.png", Technos:"HTML CSS JS", Description:"Projet de terminal STI2D , Initiation au developpement web  et récupération de donnée depuis une carte arduino " ,link:undefined},
  {titre:"Netfloux", image:"netfloux.png", Technos:"HTML CSS JS PHP (Symfony) SQL PL/SQL", Description:"Création d'un site type IMDB qui ressence de nombreux films et séries, avec de nombreuses fonctionnalités" ,link:undefined},
  {titre:"RSA", image:"RSA.png", Technos:"PYTHON", Description:"Apprentissage des bases de la cryptographie et implémentation du chiffrement asymétrique RSA basé sur le problème de la factorisation" ,link:undefined}
];


function Projet(props) {

  document.body.classList.add("overflow-scroll");
  return(
    <div className="Projet"> 
      <div  className='title-container hoverable'>
      <TypeAnimation
              // Same String at the start will only be typed once, initially
              sequence={[
              ' ',
              1000,
              'Mes Projets',
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
      </div>
      
      <select className='hoverable' name="test" aria-invalid="false">
        <option value="1">Tout les projets</option>
        <option value="2">Java</option>
        <option value="3">Python</option>
        <option value="4">JS</option>
        <option value="5">PHP</option>
      </select>

      <div className='projet-container'>
        {
          projets.map((p,i) =>
            <ProjetTemplate key={i} image={p.image} titre={p.titre} description={p.Description} technos={p.Technos} link={p.link}/>
          )
        }
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
  );
  
}
export default Projet;
