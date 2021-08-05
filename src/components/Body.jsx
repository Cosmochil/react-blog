import { React, useState, useEffect } from "react";
import styled from "styled-components";
import BlogLists from './BlogLists'

function Body() {
  const [articles, setArticles] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const Body = styled.div``;

  const deleteBlog = (id) => {
    const newArticles = articles.filter((article) => article.id !== id);
    setArticles(newArticles);
  }

  useEffect(() => {
    fetch("http://localhost:8000/blogs")
      .then(res => {
        return res.json()
      })
      .then(data => {
        setArticles(data)
        setIsLoading(false)
      })
  }, [])
  

  return (
    <Body>
      {isLoading && <div>Loading...</div>}
      {articles && <BlogLists blogs={articles} deleteBlog={ deleteBlog }/>}
    </Body>
  );
}

export default Body;
