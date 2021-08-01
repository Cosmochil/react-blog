import { React, useState } from "react";
import styled from "styled-components";
import BlogLists from './BlogLists'

function Body() {
  const [articles, setArticles] = useState([
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
  

  return (
    <Body>
      <BlogLists blogs={articles} />
    </Body>
  );
}

export default Body;
