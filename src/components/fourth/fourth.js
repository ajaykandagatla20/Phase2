import {useState} from 'react';

const Fourth=()=>{
    const [firstName] =useState("Prasanna")
    const [lastName] =useState("sir")

    return(
        <div>
            <p>
                First name : {firstName}<br/>
                Last name : {lastName}<br/>
            </p>
        </div>
    )
}
export default Fourth;