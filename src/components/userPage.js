import React, { useState } from 'react'

function UserPage(props) {
    const [ friendsList, setFriendsList ] = useState([])

    return(
        <div className="userPage">
            
            <div className="friendList">
                <ul>
                    {friendsList.map(user => (
                        <li key={user.id}>
                            {user.name}
                        </li>
                    ))
                    }
                </ul>
            </div>
            
        </div>
    )
}

export default UserPage;