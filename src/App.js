import './App.css';
import First from './components/first/First';
import Second from './components/second/Second';
import Third from './components/third/Third';
import Fourth from './components/fourth/Fourth';
import ButtonEx from './components/buttonex/ButtonEx';
import Fifth from './components/fifth/Fifth';
import Counter from './components/counter/Counter';

import { BrowserRouter,Routes,Route,Link } from 'react-router-dom';
import Menu from './components/menu/Menu';

function App() {
  return (
    <div className="App">
     <h1>Introduction to functional component... </h1><br/><br/>
     <BrowserRouter>
   
       <Routes>
        <Route path="/" element={<Menu />}/> 
        <Route path="/First" element={<First />}/>
         <Route path="/Second" element={<Second />} />
        <Route path="/Third" element={<Third firstName="Ajay" lastName="Kandagatla" company="Wipro" />}/>
        <Route path="/Fourth" element={<Fourth/>}/>
        
        <Route path="/Fifth" element={<Fifth />}/> 

        <Route path="/ButtonEx" element={<ButtonEx />}/>

        <Route path="/Counter" element={<Counter/>}/>

      </Routes>
      </BrowserRouter> 
      <br/><br/><br/><br/>
    </div>
  );
}

export default App;
