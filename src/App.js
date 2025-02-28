import logo from './logo.svg';
import './App.css';
import First from './components/first/first';
import Second from './components/second/second';
import Third from './components/third/third';
import Fourth from './components/fourth/fourth';
import ButtonEx from './components/buttonex/ButtonEx';
import Fifth from './components/fifth/fifth';

function App() {
  return (
    <div className="App">
     Introduction to functional component...<br/><br/>
     <First/>
     <Second/><br/>
     <Third firstName="Ajay Kumar" lastName="Kandagatla" company="Wipro" />
     <Fourth/>
     <ButtonEx />
     
     <Fifth/>

    </div>
  );
}

export default App;
