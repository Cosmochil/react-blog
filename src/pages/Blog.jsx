import React from "react";
import styled from "styled-components";

import Navbar from "../components/Navbar";
import Body from "../components/Body";

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
        <Body />
      </Content>
    </div>
  );
}

export default Blog;
