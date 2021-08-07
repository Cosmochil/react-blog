import { React, useState, useEffect } from "react";
import styled from "styled-components";
import BlogLists from "./BlogLists";

function Body() {
  const [articles, setArticles] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const Body = styled.div``;

  const deleteBlog = (id) => {
    const newArticles = articles.filter((article) => article.id !== id);
    setArticles(newArticles);
  };

  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:8000/blogs")
        .then((res) => {
          if (!res.ok) {
            throw Error("Failed to fetch");
          }
          return res.json();
        })
        .then((data) => {
          setArticles(data);
          setIsLoading(false);
          setError(null)
        })
        .catch((err) => {
          setIsLoading(false);
          setError(err.message);
        });
    }, 500);
  }, []);

  return (
    <Body>
      {error && <div>{error}</div>}
      {isLoading && <div>Loading...</div>}
      {articles && <BlogLists blogs={articles} deleteBlog={deleteBlog} />}
    </Body>
  );
}

export default Body;
