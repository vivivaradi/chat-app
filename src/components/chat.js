import React, {useState, useEffect} from 'react'
import WriteMessage from './writeMessage'
import Message from './message';
import ChatHeader from './chatHeader'
import axios from 'axios'
import useInterval from './polling'

function Chat(props){
    const [listOfMessages, setListOfMessages] = useState([]);
    let names = []

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get('https://localhost:44395/api/messages/1', {
                "headers" : {"Access-Control-Allow-Origin": "http://localhost:3000"}
              });


            setListOfMessages(result.data);
            
        };

        fetchData();
    }, [])

    useInterval(() => {
        const pollBackend = async () => {
            const result = await axios.get('https://localhost:44395/api/messages/1', {
                "headers" : {"Access-Control-Allow-Origin": "http://localhost:3000"}
              });
              setListOfMessages(result.data);
        }

        pollBackend();
    }, 3000

    );

    function getUser(item){
        const url = `https://localhost:44395/api/users/${item}`
        const fetchUser = async () => {
            const result = await axios.get(url, {
                "headers" : {"Access-Control-Allow-Origin": "http://localhost:3000"}
            });
            if (result.data.userId !== props.currentUser.userId)
                names.push(result.data.name)
            console.log(names)
        }
        fetchUser();
    }


    return(
        <div className="chat">
            <div className="chat-header">
                <ChatHeader names={names}/>
            </div>
            <div className="messageList">
                    {listOfMessages.map(message =>
                        <Message key={message.messageId} message={message} currentUser={props.currentUser}/>
                    )}
            </div>
            <div className="sendForm">
                <WriteMessage chatId={props.currentChat.chatId} currentUser={props.currentUser}/>
            </div>
        </div>
    )
}

export default Chat