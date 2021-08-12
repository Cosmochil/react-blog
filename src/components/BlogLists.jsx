import React from 'react';
import { Link, useRouteMatch, Route, Switch } from "react-router-dom";

import styled from 'styled-components'
import Button from './Button'

function BlogLists({blogs, deleteBlog}) {
    const articles = blogs;
    let { path, url } = useRouteMatch();
    const ContentContainer = styled.div`
      padding: 10px 16px;
      margin: 20px 0;
      border-radius: 20px;
      &: hover {
        box-shadow: 0px 0px 12px rgba(96, 219, 251, .3);
      }
    `;
    const ContentHeader = styled.h2`
      font-size: 2rem;
      color: #60dbfb;
    `;
    const Content = styled.p`
      font-size: 1.2rem;
    `;
    return (
      <div>
        {articles.map((article) => (
          <ContentContainer key={article.id}>
            <ContentHeader>{article.title}</ContentHeader>
            <Content>{article.body}</Content>
            <div>
              <Button
                buttonType="primary"
                onClick={() => deleteBlog(article.id)}
              >
                Delete Blog
              </Button>

              <Button onClick={() => <Link to={`${url}/${article.id}`} />}>
                Read More
              </Button>
              <Switch>
                <Route exact path={path}>
                </Route>
                <Route path={`${path}/:${article.id}`}>
                </Route>
              </Switch>
            </div>
          </ContentContainer>
        ))}
      </div>
    );
}

export default BlogLists
