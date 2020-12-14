import React, {useState, useEffect} from 'react'

function Message(props) {
    const [content, setContent] = useState(props.message.content);
    const [senderId, setSenderId] = useState(props.message.senderId);
    const [time, setTime] = useState(props.message.sentAt);
    const [senderName, setSenderName] = useState(props.message.sender.name);
    let classname = ""
    let contentclass = ""

    if (senderId===props.currentUser.userId){
        classname = "my-message"
        contentclass = "my-content"
    } 
    else{
        classname = "other-message"
        contentclass = "other-content"
    }

    function renderInfos(){
        if (senderId !== props.currentUser.userId){
            return(<div className="message-infos">
                {senderName} ({time})
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