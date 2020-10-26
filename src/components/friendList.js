import React, {useState, useEffect} from 'react'
import FriendPreview from './friendPreview'
import Data from '../API/data'

function FriendList(){
    const [listOfFriends, setListOfFriends] = useState();

    useEffect(() => {
        const friendList = Data.getFriends();
        setListOfFriends(friendList);
    }, []);

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