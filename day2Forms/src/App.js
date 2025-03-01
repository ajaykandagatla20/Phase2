import logo from './logo.svg';
import './App.css';
import First from './components/first/first';
import Second from './components/second/second';
import Third from './components/third/third';
import Calc from './components/calc/calc';
import Login from './components/login/login';
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom';
import Menu from './components/menu/menu';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Menu />}/>
          <Route path="/first" element={<First/>}/>
          <Route path="/second" element={<Second/>}/>
          <Route path="/third" element={<Third/>}/>
          <Route path="/calc" element={<Calc/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
