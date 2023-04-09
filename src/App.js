import './App.css';
import MainContainer from './component/Main';
import {Routes,Route} from 'react-router-dom';
import Projet from './component/Projet';
import CustomCursor from 'custom-cursor-react';
import 'custom-cursor-react/dist/index.css';
function App() {
  return (
    <div className="App">
      <CustomCursor
      targets={['.hoverable']}
      customClass='custom-cursor'
      dimensions={30}
      fill='#ffdf00'
      smoothness={{
        movement: 0.2,
        scale: 0.1,
        opacity: 0.2,
      }}
      targetOpacity={0.8}
    />

      <Routes>
        <Route path='/' Component={MainContainer}/>
        <Route path='/projets' Component={Projet}/>
      </Routes>
      
    </div>
    
  );
}

export default App;
