import '../App.css';
import Fade from 'react-fade-in';

function projetTemplate(props) {
  return (
    <Fade> 
    <div className="projet-img-container"
     alt=""> 
     <img className="projet-img" src={require("../Image/projet/"+`${props.image}`)} alt="projet"/>
      <div className='hidden-projet-img'>
        <div className='projet-data'>
            <h1>{props.titre}</h1>
            <p>{props.technos}</p>
            <p>{props.description}</p>
            {props.link !== undefined? 
            <div> <a className='hoverable' href={props.link}  rel="noreferrer" target='_blank'>Découvrir</a></div>
            : null }
            
        </div>
      </div>
    </div>
  </Fade>
    
  );
}

export default projetTemplate;
