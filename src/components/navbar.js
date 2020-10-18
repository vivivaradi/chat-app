import React from 'react'
import UserPanel from './userPanel'
import Message from './message'
import { Link } from 'react-router-dom'

function Navbar(){
    return(
        <div>
            <Link to='/'>Home</Link>
            <Link to='/users'>Users</Link>
            <Link to='/messages'>Messages</Link>
        </div>
    )
}

export default Navbar;