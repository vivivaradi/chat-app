import React from 'react'
import User from './userPreview'
import Chat from './chat'
import FriendList from './friendList'

function MainPage(props){

    return(
        <div className="mainPage">
            <div className="infopanel">
                <User currentUser={props.currentUser}/>
                <FriendList currentUser={props.currentUser}/>
            </div>
                <Chat currentUser={props.currentUser}/>
        </div>
    )
}

export default MainPage