import React, {useState} from 'react'
import User from './userPreview'

function Message(props) {
    const [content, setContent] = useState('Hello')
    const [sender, setSender] = useState(props.name)
    const [time, setTime] = useState(new Date)

    if (sender.id === currentUser.id)
        classname = "my-message"
    else    
        classname = "other-message"

    return(
        <div className={classname}>
            {formatMessage(sender, time, content)}
        </div>
    )
}

function formatMessage(sender, time, content){
    return `${sender} (${time}): ${content}`
}

export default Message;