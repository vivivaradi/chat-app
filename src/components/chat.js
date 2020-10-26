import React, {useState, useEffect} from 'react'
import Message from './message'
import WriteMessage from './writeMessage'
import Data from '../API/data'

function Chat(){
    const [listOfMessages, setListOfMessages] = useState();
    const [chatId, setChatId] = useState();

    const data = new Data()

    useEffect(() => {
        const messageList = data.getMessages()
        setListOfMessages(messageList)
    }, [listOfMessages, data])

    return(
        <div className="chat">
            <div className="messageList">
                <ul>
                    {listOfMessages.map(message =>
                        <li key={message.id}>
                            {message.content}
                        </li>

                    )}
                </ul>
            </div>
            <div className="sendForm">
                <WriteMessage chatid={chatId} />
            </div>
        </div>
    )
}

export default Chat