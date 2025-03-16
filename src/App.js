import logo from './logo.svg';
import './App.css';
import {Routes,Route} from 'react-router-dom';
import Aboutpage from './components/AboutUs';
import Contactus from './components/ContactUs';
import Menus from './components/Menu';
import Home from './components/Home';
import Footer from './components/Footer';
import statecomponent from './statecomponent';


function App() {
  return (
    <>
   <Menus />
   
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/about' element={<Aboutpage></Aboutpage>}></Route>
      <Route path='/contact' element={<Contactus></Contactus>}></Route>
    </Routes>
  
    <Footer />
    

    


    </>
    
  );
}

export default App;
