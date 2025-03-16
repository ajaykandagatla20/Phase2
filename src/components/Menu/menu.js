import {Link} from 'react-router-dom';
const Menu=()=>{

    return(
        <div>
            <Link to="/createAccount">Create Account</Link>
            <Link to="/showAccounts">Show Account</Link>
            <Link to="/searchAccount">Search Account</Link>
            <Link to="/depositAccount">Deposit Account</Link>
            <Link to="/withdrawAccount">Withdraw Account</Link>
        </div>
    )
}
export default Menu;