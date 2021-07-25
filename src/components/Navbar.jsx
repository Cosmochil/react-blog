import React from 'react'

function Navbar() {
    return (
        <div>
            <nav className="navbar">
                <h1>React Blog</h1>
                <div className="navlinks">
                    <a href="/blog">Home</a>
                    <a href="/create">New Blog</a>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
