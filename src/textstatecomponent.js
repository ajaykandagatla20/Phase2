import React from 'react'
class TextStateComponent extends React.Component
{

    state = {

        uname  : " Niti"
    };
    handleChange = (e) => {const tvalue =  e.target.value; 

      this.setState({uname:tvalue});
    };
    render()
    {
        let {uname} =this.state;

        return(
            <div>
    
       <input type ="text" onChange={this.handleChange} placeholder="Enter your user name">
       </input>

       <div> Hello , {uname}</div>
    
    </div>
        )
    }
}

export default TextStateComponent