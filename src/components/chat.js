import React, {useState, useEffect} from 'react'
import WriteMessage from './writeMessage'
import * as Data from '../API/data'
import Message from './message';
import ChatHeader from './chatHeader'

function Chat(props){
    const [listOfMessages, setListOfMessages] = useState([]);
    const [chatId, setChatId] = useState("");
    const [participants, setParticipants] = useState([])

    useEffect(() => {
        const chat = Data.getChat()
        setListOfMessages(chat.messages)
        setChatId(chat.chatId)
        setParticipants(chat.getParticipants)
    }, [listOfMessages])

    let names = ["Bob"]
/*
    function putName(item, index){
        names.push(item.name)
    }

    participants.forEach(putName)
*/
    return(
        <div className="chat">
            <div className="chat-header">
                <ChatHeader names={names}/>
            </div>
            <div className="messageList">
                    {listOfMessages.map(message =>
                            <Message message={message} currentUser={props.currentUser}/>
                    )}
            </div>
            <div className="sendForm">
                <WriteMessage chatid={chatId} />
            </div>
        </div>
    )
}

export default Chat