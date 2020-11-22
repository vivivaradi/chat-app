import React, { useState } from 'react'
import { Link } from 'react-router-dom';


function User(props) {

    const [ name, setName] = useState(props.currentUser.name);
    const [ profilePic, setProfilePic] = useState(props.currentUser.pic);
    
    return(
        <div className="userPreview">
            <div className="profilePic">
                {profilePic}
            </div>
            <div className="userName">
                {name}
            </div>
            <div className="navigation">
                
                <Link to='/profile'>View Profile</Link>
            </div>
        </div>
    );
}

export default User;