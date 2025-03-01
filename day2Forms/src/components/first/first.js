import {useState} from 'react';
import Menu from '../menu/menu';

const First=()=>{
    const [name,setName]= useState("")

    const ajay =()=>{
        setName("Hi i am ajay")
    }
    const kumar=()=>{
        setName("Hi i am kumar")
    }
    const kandagatla=()=>{
        setName("Hi i am kandagatla")
    }

    return(
        <div>
            <br/><br/>
            <Menu/>
            <br/><br/>
            <p>The student name is : {name}</p>
            <input type="button" value="ajay" onClick={ajay} />
            &nbsp;&nbsp;&nbsp;&nbsp;
            <input type="button" value="kumar" onClick={kumar} />
            &nbsp;&nbsp;&nbsp;&nbsp;
            <input type="button" value="kandagatla" onClick={kandagatla}/>
        </div>
    )
}
export default First;