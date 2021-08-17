import React from 'react'
import { Link } from 'react-router-dom'


function NotFound() {
    return (
        <div>
            <h2>Sorry!</h2>
            <p>What you're looking for is not here or no longer available.</p>
            <Link to="/blogs">Go back</Link>
        </div>
    )
}

export default NotFound
