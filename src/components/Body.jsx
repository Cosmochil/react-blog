import { React, useState } from "react";
import styled from "styled-components";

function Body() {
  const [blogs, setBlogs] = useState([
    {
      title: "Testing the useState hook",
      body: "The useState is a function to make a reactive value, and also provide us with a way to change that value whenever we want.",
      id: 1,
    },
    {
      title: "How to use it",
      body: "First we need to call it and supply it with initial values. We want to store it in an array destructuring which contain two value, the initial state and the set state (we can name the state whatever we want).",
      id: 2,
    },
    {
      title: "Test Result",
      body: "If all the paragraphs show up, then the useState works properly.",
      id: 3,
    },
  ]);
  const Body = styled.div``;
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
    <Body>
      {blogs.map((blog) => (
        <ContentContainer key={blog.id}>
          <ContentHeader>{blog.title}</ContentHeader>
          <Content>{blog.body}</Content>
        </ContentContainer>
      ))}
    </Body>
  );
}

export default Body;
