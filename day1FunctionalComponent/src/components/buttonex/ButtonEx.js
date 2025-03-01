import Menu from "../menu/Menu";

const ButtonEx=()=>{

    const ajay=()=>{
        alert("Hi! i am Ajay");
    }
     const kumar=()=>{
        alert("Hi! i am Kumar");
     }


     const kandagatla=()=>{
        alert("Hi! i am Kandagatla");
     }


     return(
        <div>
            <Menu/>
            <input type="button" value="Ajay" onClick={ajay} />
            &nbsp;&nbsp;&nbsp;
            <input type="button" value="Kumar" onClick={kumar} />
            &nbsp;&nbsp;&nbsp;
            <input type="button" value="Kandagatla" onClick={kandagatla} />

            
        </div>
     )
}
export default ButtonEx;