import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from "./pages/Home";
import Blog from "./pages/Blog"

function Main() {
    return (
        <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/blog" component={Blog}></Route>
        </Switch>
    )
}

export default Main
