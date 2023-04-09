import '../App.css';
import Button from '../component/button';
import FadeIn from 'react-fade-in';

function ButtonContainer(props) {
  return (
   
      <div id="buttonContainer">
        <FadeIn id="buttonContainer">
          <Button onClick={props.first}/>
          <Button onClick={props.second}/>
          <Button onClick={props.third}/>
        </FadeIn>
        
      </div>
    
  );
}

export default ButtonContainer;
