import {useState} from 'react';
import Menu from '../menu/Menu';

const Counter=()=>{

    const [count,setCount]=useState(0)

    return(

        <div>
            <Menu/>
            Count is: <b>{count}</b>
            <br/>
            <input type="button" value="increment" onClick={()=>{setCount(count+1)}} />
            &nbsp;
            <input type="button" value="decrement" onClick={()=>{setCount(count-1)}}/>
        </div>
    )
}
export default Counter;