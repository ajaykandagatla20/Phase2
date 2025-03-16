import React from 'react'
import {useState} from 'react'
import Menu from '../menu/menu'

const Second = () => {
    const [message,setMessage]=useState("welcome")

    const handleChange=event=>{
        setMessage(event.target.value)
    }

  return (
    <div>
      <br/><br/>
            <Menu/>
          <br/><br/>
      <p>The message is : </p>
      <input type="text" name="message" value={message} onChange={handleChange}/>
    </div>
  )
}

export default Second
