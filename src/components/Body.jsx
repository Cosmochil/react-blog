import { React, useState } from "react";
import styled from "styled-components";
import BlogLists from "./BlogLists";
import useFetch from '../hooks/useFetch'

function Body() {
  const { data, setData, isLoading, error } = useFetch("http://localhost:8000/blogs");
  
  const Body = styled.div``;

  const deleteBlog = (id) => {
    const newArticles = data.filter((blog) => blog.id !== id);
    setData(newArticles);
  };

  return (
    <Body>
      {error && <div>{error}</div>}
      {isLoading && <div>Loading...</div>}
      {data && <BlogLists blogs={data} deleteBlog={deleteBlog}/>}
    </Body>
  );
}

export default Body;
