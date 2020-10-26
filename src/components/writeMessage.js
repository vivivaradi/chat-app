import React, {useState} from 'react'
import Data from '../API/data'

function WriteMessage(props){

    const [ message, setMessage ] = useState("")

    function handleChange(event){
        setMessage(event.target.value)
    }

    function handleSend(event){
        Data.addMessage(props.chatid, props.currentUser, message)
    }

    return(
        <div className="writeMessage">
            <form onSubmit={handleSend}>
                <input type="text" value={message} onChange={handleChange} />
                <input type="submit" value="Send" />
            </form>
            
        </div>
    )
}

export default WriteMessage;