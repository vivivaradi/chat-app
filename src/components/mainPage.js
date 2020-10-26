import React from 'react'
import UserPreview from './userPreview'
import Chat from './chat'
import FriendList from './friendList'
import WriteMessage from './writeMessage'

function MainPage(props){

    return(
        <div className="mainPage">
            <UserPreview currentUser={props.currentUser}/>
            <FriendList currentUser={props.currentUser}/>
            <Chat currentUser={props.currentUser}/>
        </div>
    )
}

export default MainPage