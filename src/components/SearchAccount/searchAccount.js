import { useEffect, useState } from "react"
import axios from "axios";
import Menu from "../Menu/menu";


const SearchAccount = () => {

    const[accountResult, SetAccountResult] = useState({})
    const[accountNo,SetAccountNo] = useState(0) 

    const handleChange = event => {
        SetAccountNo(event.target.value)
        // alert(empno);
    }

    const show = () => {
        // alert(userId)
        let aid = parseInt(accountNo);
        axios.get("http://localhost:5134/api/Accounts/"+aid).then(
            (response) => {
                SetAccountResult(response.data)
            }  
          )
      
    }
    return(
        <div>
            <br/><br/><Menu/><br/><br/>

            <label>
                Account Number : </label>
            <input type="number" name="accountNo" 
                value={accountNo} onChange={handleChange} /> <br/>
            <input type="button" value="Show" onClick={show} />
            <hr/>
            Account Number : <b>{accountResult.accountNo}</b> <br/>
            First Number : <b>{accountResult.firstName}</b> <br/>
            Last Name : <b>{accountResult.lastName}</b> <br/>
            City : <b>{accountResult.city}</b> <br/> 
            State : <b>{accountResult.state}</b> <br/>
            Amount : <b>{accountResult.amount}</b> <br/>
            cheqFacil : <b>{accountResult.cheqFacil}</b> <br/>
            Account Type : <b>{accountResult.accountType}</b> <br/> <br/>

           
        </div>
    )

}

export default SearchAccount;