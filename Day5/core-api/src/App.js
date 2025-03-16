import logo from './logo.svg';
import './App.css';
import EmployShow from './components/EmployShow/employShow';
import EmploySearch from './components/EmploySearch/employSearch';
import EmployInsert from './components/EmployInsert/employInsert';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Menu from './components/Menu/menu';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Menu/>}/>
        <Route path="/employShow" element={<EmployShow/>}/>
        <Route path="/employSearch" element={<EmploySearch/>}/>
        <Route path="/employInsert" element={<EmployInsert/>}/>
        
      </Routes>
      </BrowserRouter>
      
      
    </div>
  );
}

export default App;
