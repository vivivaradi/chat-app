import React from 'react'
import {useState, useEffect} from 'react'
import User from './userPreview'
import Chat from './chat'
import FriendList from './friendList'
import axios from 'axios'

function MainPage(props){

    const [ currentChat, setCurrentChat] = useState({})

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get('https://localhost:44395/api/chats/1', {
                "headers" : {"Access-Control-Allow-Origin": "http://localhost:3000"}
              });

              setCurrentChat(result.data);
        }

        fetchData();
    }, [currentChat]);

    return(
        <div className="mainPage">
            <div className="infopanel">
                <User currentUser={props.currentUser}/>
                <FriendList currentUser={props.currentUser}/>
            </div>
                <Chat currentUser={props.currentUser} currentChat={currentChat}/>
        </div>
    )
}

export default MainPage