import React, {useState} from 'react'
import User from './userPreview'

function Message(props) {
    const [content, setContent] = useState('Hello')
    const [sender, setSender] = useState(props.name)
    const [time, setTime] = useState(new Date())
    const classname = ""

    if (sender.id === props.currentUser.id)
        classname = "my-message"
    else    
        classname = "other-message"

    return(
        <div className={classname}>
            <div className="message-infos">
                `${sender} (${time})`
            </div>
            <div className="message-content">
                {content}
            </div>
        </div>
    )
}


export default Message;