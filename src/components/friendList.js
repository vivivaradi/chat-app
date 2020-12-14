import React, {useState, useEffect} from 'react'
import FriendPreview from './friendPreview'

function FriendList(){
    const [listOfFriends, setListOfFriends] = useState([]);


    return(
        <div className="friendList">
            <ul>
                {listOfFriends.map(friend =>(
                    <li key={friend.id}>
                        <FriendPreview id={friend.id}/>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default FriendList