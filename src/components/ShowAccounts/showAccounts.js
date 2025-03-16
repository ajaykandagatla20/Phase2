import axios from "axios";
import { useEffect, useState } from "react";
import Menu from "../Menu/menu";


const ShowAccounts = () => {
    const[data,setData] = useState([])  


useEffect(() => {
    const fetchData = async () => {
        const response = await axios.get("http://localhost:5134/api/Accounts");
        setData(response.data)
    };
    fetchData()
},[])

return(
    <div>
        <br/><br/><Menu/><br/><br/>

         <table border="3" align="center">
      <tr>

        <th>First Name</th>
        <th>Last Name</th>
        <th>City</th>
        <th>State</th>
        <th>Amount</th>
        <th>Cheq Facil</th>
        <th>Account Type</th>
      </tr>
      {data.map((item) => 
        <tr>
          <td>{item.firstName}</td>
          <td>{item.lastName}</td>
          <td>{item.city}</td>
          <td>{item.state}</td>
          <td>{item.amount}</td>
          <td>{item.cheqFacil}</td>
          <td>{item.accountType}</td>
        </tr>
      )}
    </table>
    </div>
)
}
export default ShowAccounts;