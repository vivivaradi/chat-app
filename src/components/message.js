import React, {useState, useEffect} from 'react'
import User from './userPreview'
import Card from 'react-bootstrap/Card'
import Badge from 'react-bootstrap/Badge';

function Message(props) {
    const [content, setContent] = useState(props.message.content);
    const [sender, setSender] = useState(props.message.sender);
    const [time, setTime] = useState(props.message.time);
    let classname = ""
    let contentclass = ""

    if (sender.userid===props.currentUser.userid){
        classname = "my-message"
        contentclass = "my-content"
    } 
    else{
        classname = "other-message"
        contentclass = "other-content"
    }

    function renderInfos(){
        if (sender.userid != props.currentUser.userid){
            return(<div className="message-infos">
                {sender.name} ({time})
            </div>)
        }
    }
        

    return(
            <div className={classname}>
                {renderInfos()}
                <div className={contentclass}>
                    {content}
                </div>
            </div>
        
    )
}


export default Message;