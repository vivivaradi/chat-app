import React, {useState} from 'react';
import * as Data from '../API/data';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import { FormControl } from 'react-bootstrap';

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
            <InputGroup size="sm" onSubmit={handleSend}>
                <FormControl placeholder="Type your message here" type="text" value={message} onChange={handleChange} />
                <InputGroup.Append>
                    <Button type="submit" value="Send">Send</Button>
                </InputGroup.Append>
            </InputGroup>
            
        </div>
    )
}

export default WriteMessage;