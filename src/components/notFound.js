import React from 'react'
import {Link} from 'react-router-dom'

function NotFound(){
    return(
        <div className="notFound">
            <h1>404 Not Found</h1>
            <h5>The site you're looking for doesn't exist.</h5>
            <Link to='/'>Go back to home page</Link>
        </div>
    )
}

export default NotFound