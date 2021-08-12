import React from "react";
import styled from "styled-components";

import Navbar from "../components/Navbar"

function Create() {
  const Content = styled.div`
    max-width: 600px;
    margin: 40px auto;
    padding: 20px;
  `;
  const ContentHeader = styled.h2`
    font-size: 2rem;
    color: #60dbfb;
  `;
  return (
    <div className="Blog">
      <Navbar />
      <Content className="content">
        <ContentHeader>Ceate Blog</ContentHeader>
      </Content>
    </div>
  );
}

export default Create;
