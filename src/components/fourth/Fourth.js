import {useState} from 'react';
import Menu from '../menu/Menu';

const Fourth=()=>{
    const [firstName] =useState("Prasanna")
    const [lastName] =useState("sir")

    return(
        <div>
            <Menu/>
            <p>
                First name : {firstName}<br/>
                Last name : {lastName}<br/>
            </p>
        </div>
    )
}
export default Fourth;