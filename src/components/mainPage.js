import React from 'react'
import {useState, useEffect} from 'react'
import User from './userPreview'
import Chat from './chat'
import FriendList from './friendList'
import axios from 'axios'
import { useParams } from 'react-router-dom'

function MainPage(props){

    const {id} = useParams();
    const [ currentChat, setCurrentChat] = useState({});
    const [ currentUser, setCurrentUser] = useState({});

    const userURL = `https://localhost:44395/api/users/${id}`
    console.log(userURL)

    useEffect(() => {
        const fetchUser = async () => {
            const result = await axios.get(userURL, {
              "headers" : {"Access-Control-Allow-Origin": "http://localhost:3000"}
            });

            setCurrentUser(result.data);
        }

        const fetchData = async () => {
            const result = await axios.get('https://localhost:44395/api/chats/1', {
                "headers" : {"Access-Control-Allow-Origin": "http://localhost:3000"}
            });

            setCurrentChat(result.data);
        }

        fetchUser();
        fetchData();
    }, []);

    return(
        <div className="mainPage">
            <div className="infopanel">
                <User currentUser={currentUser}/>
                <FriendList currentUser={currentUser}/>
            </div>
                <Chat currentUser={currentUser} currentChat={currentChat}/>
        </div>
    )
}

export default MainPage