import React from 'react'
import UserPreview from './userPreview'
import Chat from './chat'
import FriendList from './friendList'

function MainPage(props){

    return(
        <div className="mainPage">
            <div className="infopanel">
                <UserPreview currentUser={props.currentUser}/>
                <FriendList currentUser={props.currentUser}/>
            </div>
                <Chat currentUser={props.currentUser}/>
        </div>
    )
}

export default MainPage