import React, { useState } from 'react'


function Friend(props) {

    const [ name, setName] = useState(props.name);
    const [ profilePic, setProfilePic] = useState('itt lesz a kep');
    
    return(
        <div className="friendPreview">
            {profilePic} {name}
        </div>
    );
}

export default Friend;