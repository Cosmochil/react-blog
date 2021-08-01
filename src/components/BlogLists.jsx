import React from 'react';
import styled from 'styled-components'
import Button from './Button'

function BlogLists(props) {
    const articles = props.blogs;
    const ContentContainer = styled.div`
      padding: 10px 16px;
      margin: 20px 0;
      &: hover {
        box-shadow: 1px 3px 9px rgba(255, 229, 217, 0.1);
      }
    `;
    const ContentHeader = styled.h2`
      font-size: 2rem;
      color: #f1356d;
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
          </ContentContainer>
        ))}
        <Button buttonType='primary'>I am a primary button</Button>
        <Button>I am ordinary button</Button>
      </div>
    );
}

export default BlogLists
