import './App.css';
import MainContainer from './component/Main';
import {Routes,Route} from 'react-router-dom';
import Projet from './component/Projet';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' Component={MainContainer}/>
        <Route path='/projets' Component={Projet}/>
      </Routes>
      
    </div>
    
  );
}

export default App;
