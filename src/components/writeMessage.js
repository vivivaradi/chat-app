import React, {useState} from 'react';
import * as Data from '../API/data';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import { FormControl } from 'react-bootstrap';
import axios from 'axios';

function WriteMessage(props){

    const [ content, setContent ] = useState("");
    const [ senderId, setSenderId ] = useState(props.currentUser.userId)
    const [ chatId, setChatId ] = useState(props.chatId)

    function handleChange(event){
        setContent(event.target.value)
        console.log(content)
    }

    function handleSend(event){
        const res = axios.post('https://localhost:44395/api/Messages/', 
        {
            "senderId": senderId,
            "chatId": chatId,
            "content": content
        },
        {
            "headers" : {"Access-Control-Allow-Origin": "http://localhost:3000"}
        })
        console.log(res);
        console.log("userid: " + props.currentUser.userId)
        console.log("chatid: " + props.chatId)
    }

    return(
        <div className="writeMessage">
            <InputGroup size="sm">
                <FormControl placeholder="Type your message here" type="text" value={content} onChange={handleChange} onSubmit={handleSend}/>
                <InputGroup.Append>
                    <Button type="submit" value="Send" onClick={handleSend}>Send</Button>
                </InputGroup.Append>
            </InputGroup>
            
        </div>
    )
}

export default WriteMessage;