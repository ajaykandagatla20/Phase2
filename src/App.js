import logo from './logo.svg';
import './App.css';
import CreateAccount from './components/CreateAccount/createAccount';
import ShowAccounts from './components/ShowAccounts/showAccounts';
import DepositAccount from './components/DepositAccount/depositAccount';
import SearchAccount from './components/SearchAccount/searchAccount';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Menu from './components/Menu/menu';
import WithdrawAccount from './components/WithdrawAccount/withdrawAccout';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Menu/>}/>
        <Route path="/createAccount" element={<CreateAccount/>}/>
        <Route path="/searchAccount" element={<SearchAccount/>}/>
        <Route path="/showAccounts" element={<ShowAccounts/>}/>
        <Route path="/depositAccount" element={<DepositAccount/>}/>
        <Route path="/withdrawAccount" element={<WithdrawAccount/>}/>
      </Routes>
      </BrowserRouter>
     
     
    </div>
  );
}

export default App;
