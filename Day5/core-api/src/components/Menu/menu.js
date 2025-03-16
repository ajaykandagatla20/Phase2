import {Link} from 'react-router-dom'

const Menu=()=>{

    return(
        <div>
        <h1>This is Menu page</h1> <br/><br/><br/>

        <Link to="/employShow">Show Employs</Link>
        &nbsp;&nbsp;&nbsp;
        <Link to="/employSearch">Search Employ</Link>
        &nbsp;&nbsp;&nbsp;
        <Link to="/employInsert">Insert Employ</Link>
       
            
        </div>
    )
}
export default Menu;