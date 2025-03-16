import {Link} from 'react-router-dom';

const Menu=()=>{
    return(
        <div>
           
            <b>This is the Menu page</b><br/>
            

            <Link to="/First">First</Link>
            &nbsp;&nbsp;&nbsp;
           <Link to ="/Second">Second</Link>
            &nbsp;&nbsp;&nbsp;
            <Link to ="/Third">Third</Link>
            &nbsp;&nbsp;&nbsp;
            <Link to ="/Fourth">Fourth</Link>
            &nbsp;&nbsp;&nbsp;
            <Link to ="/Fifth">Fifth</Link>
            &nbsp;&nbsp;&nbsp;
            <Link to ="/ButtonEx">ButtonExample</Link>
            &nbsp;&nbsp;&nbsp;
            <Link to ="/Counter">Counter</Link>
        </div>
    );
}
export default Menu;