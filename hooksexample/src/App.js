import logo from './logo.svg';
import './App.css';
//import UseStateExample from './components/useStateExample';
//import UseEffectExample from './components/useEffectExample';
import RefEx1 from './components/UseRefEx1/useRefEx1';
import RefEx2 from './components/UseRefEx2/useRefEx2';
import UseMem1 from './components/UseMemo1/useMemo1';
import UseMemo2 from './components/UseMemo2/useMemo2';
import UseMemo3 from './components/UseMemo3/useMemo3';
import ContextEx1 from './components/UseContext1/useContext1';
import ContextEx2 from './components/UseContext2/useContext2';
import ThemeContextEx1 from './components/ThemeContextEx1/themeContextEx1';
import UserShow from './components/UserShow/userShow';


function App() {
  return (
    <div className="App">
      <RefEx1/>
      <br/><br/>
      <RefEx2/>
      <br/><br/>
      <UseMem1/>
      <br/><br/>
      <UseMemo2/>
      <br/><br/>
      <UseMemo3/>
      <br/><br/>
      <ContextEx1/>
      <br/><br/>
      <ContextEx2/>
      <br/><br/>
      <ThemeContextEx1/>
      <br/><br/>
      <UserShow/>
      

      

    </div>
  );
}

export default App;
