import {useState} from 'react';
import Menu from '../menu/Menu';

const Fifth=()=>{

    const [firstName,setfirstName]= useState("")

    const update=()=>{
        setfirstName("Holi Holiday")
    }

    return(
        <div>
            <Menu/>
            First Name is : {firstName}
            <br />
            <input type="button" value="Change" onClick={update}/>
        </div>
    )

}
export default Fifth;