import React from "react";
import styled from "styled-components";
import "../pages/styles/Blog.css";

import Navbar from "../components/Navbar";
import Body from "../components/Body";
import Create from '../components/Create'
import BlogDetails from "../components/BlogDetails";
import { Route, Switch } from "react-router-dom";

function Blog() {
  const Content = styled.div`
    max-width: 600px;
    margin: 40px auto;
    padding: 20px;
  `;
  return (
    <div className="Blog">
      <Navbar />
      <Content className="content">
        <Switch>
          <Route exact path="/blogs">
            <Body />
          </Route>
          <Route exact path="/create">
            <Create />
          </Route>
          <Route exact path="/blogs/:id">
            <BlogDetails />
          </Route>
        </Switch>
      </Content>
    </div>
  );
}

export default Blog;
