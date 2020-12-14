import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import { Form, FormControl } from 'react-bootstrap';
import axios from 'axios';

function WriteMessage(props){

    const [ content, setContent ] = useState("");

    function handleChange(event){
        setContent(event.target.value)
    }

    function handleSend(event){
        const body = {
            "senderId": props.currentUser.userId,
            "chatId": props.chatId,
            "content": content
        }
        const res = axios.post('https://localhost:44395/api/messages/', body,
            {
                "headers" : {"Access-Control-Allow-Origin": "http://localhost:3000"}
            });

        setContent("");
    }

    return(
        <div className="writeMessage">
                <InputGroup size="sm">
                    <FormControl placeholder="Type your message here" type="text" value={content} onChange={handleChange}/>
                    <InputGroup.Append>
                        <Button type="submit" value="Send" onClick={handleSend}>Send</Button>
                    </InputGroup.Append>
                </InputGroup>
            
            
        </div>
    )
}

export default WriteMessage;