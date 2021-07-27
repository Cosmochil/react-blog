import React from 'react'
import Navbar from '../components/Navbar'
import Body from '../components/Body'

function Blog() {
    return (
        <div className="Blog">
            <Navbar />
            <div className="content">
                <Body />
            </div>
        </div>
    )
}

export default Blog
