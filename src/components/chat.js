import React, {useState} from 'react'
import Message from './message'

function Chat(){
    const [listOfMessages, setListOfMessages] = useState()

    return(
        <div className="chat">
            <ul>
                {listOfMessages.map(message =>
                    <li key={message.id}>
                        {message.content}
                    </li>

                )}
            </ul>
        </div>
    )
}