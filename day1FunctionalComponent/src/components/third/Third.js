import Menu from "../menu/Menu";

const Third=(props)=>{
    return(
        <div>
            <Menu/>
            First name : {props.firstName} <br />
            Last name : {props.lastName}<br />
            Company : {props.company}
        </div>
    )
}
export default Third;