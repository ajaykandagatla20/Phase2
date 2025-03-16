import {Link} from 'react-router-dom'

const Menu=()=>{
    return(
        <div>
        <br/><br/>
        <Link to="/first">First</Link>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <Link to="/second">Second</Link>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <Link to="/third">Third</Link>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <Link to="/calc">Calculate</Link>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <Link to="/login">Login</Link>
        </div>
    )
}
export default Menu;