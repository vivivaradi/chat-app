import React from 'react'

function ChatHeader(props){
    let namestring = ""

    let len = props.names.length

    for (let n of props.names){
        if(len > 1){
            namestring = namestring.concat(n);
            namestring = namestring.concat(", ");
        } else {
            namestring = namestring.concat(n);
        }
        len--;
        console.log(namestring)
    }

    
    return(
        namestring
    )
    
}

export default ChatHeader;