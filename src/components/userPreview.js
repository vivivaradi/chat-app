import React, { useState } from 'react'


function User(props) {

    const [ name, setName] = useState(props.name);
    const [ profilePic, setProfilePic] = useState('itt lesz a kep');
    
    return(
        <div className="userPreview">
            {profilePic}
            {name}
        </div>
    );
}

export default User;