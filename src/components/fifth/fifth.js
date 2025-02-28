import {useState} from 'react';

const Fifth=()=>{

    const [firstName,setfirstName]=useState("")

    const update=()=>{
        setfirstName("Holi Holiday")
    }

    return(
        <div>
            First Name is : {firstName}
            <br />
            <input type="button" value="Change" onClick={update}/>
        </div>
    )

}
export default Fifth;