import React from 'react'
import {Link} from 'react-router-dom'

function Login() {

    return(
        <div className="login">
            <p>Who are you?</p>
                <ul>
                    <li>
                    <Link to='/users/1'>Alice</Link>
                    </li>
                    <li>
                    <Link to='/users/2'>Bob</Link>
                    </li>
                </ul>
                
                
        </div>
    )
}

export default Login