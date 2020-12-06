import React from 'react'
import { Button } from 'react-bootstrap'
import {Link} from 'react-router-dom'

function Login() {

    return(
        <div className="login">
            <p>Who are you?</p>
            <Button>
                <Link to='/1'>Alice</Link>
            </Button>
            <Button>
                <Link to='/2'>Bob</Link>
            </Button>
        </div>
    )
}

export default Login