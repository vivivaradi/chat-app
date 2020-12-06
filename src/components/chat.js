import React, {useState, useEffect} from 'react'
import WriteMessage from './writeMessage'
import * as Data from '../API/data'
import Message from './message';
import ChatHeader from './chatHeader'
import axios from 'axios'

function Chat(props){
    const [listOfMessages, setListOfMessages] = useState([]);
    const [chatId, setChatId] = useState(props.currentChat.chatId);
    const [participants, setParticipants] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get('https://localhost:44395/api/messages/1', {
                "headers" : {"Access-Control-Allow-Origin": "http://localhost:3000"}
              });

            setListOfMessages(result.data);
        };

        fetchData();
    }, [chatId])

    let names = []

    function putName(item, index){
        names.push(item.name)
    }

    participants.forEach(putName)

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
                <WriteMessage chatId={chatId} currentUser={props.currentUser}/>
            </div>
        </div>
    )
}

export default Chat