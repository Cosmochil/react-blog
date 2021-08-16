import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";
import Button from "./Button";
const LS = {};

function BlogLists({ blogs, deleteBlog }) {
  const articles = blogs;
  const ContentContainer = styled.div`
    padding: 10px 16px;
    margin: 20px 0;
    border-radius: 20px;
    &: hover {
      box-shadow: 0px 0px 12px rgba(96, 219, 251, 0.3);
      transition: 0.5s;
    }
  `;
  LS.NavFixedItem_LINK = styled(Link)`
    text-decoration: none;
    color: #282c34;
  `;
  return (
    <div>
      {articles.map((article) => (
        <ContentContainer key={article.id}>
          <h2>{article.title}</h2>
          <div>
            <Button buttonType="primary" onClick={() => deleteBlog(article.id)}>
              Delete Blog
            </Button>
            <Button buttonType="link">
              <LS.NavFixedItem_LINK to={`/blogs/${article.id}`}>
                Read More
              </LS.NavFixedItem_LINK>
            </Button>
          </div>
        </ContentContainer>
      ))}
    </div>
  );
}

export default BlogLists;
