import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const LS = {};

function Navbar() {
  const Navbar = styled.nav`
    padding: 10px;
    display: flex;
    align-items: center;
    max-width: 80vw;
    margin: 0 auto;
    border-bottom: 1px solid #fff;
  `;
  const NavHeader = styled.h1`
    color: #60dbfb;
    font-size: 2em;
  `;
  const NavLinkContainer = styled.div`
    margin-left: auto;
  `;
  LS.NavFixedItem_LINK = styled(Link)`
    margin-left: 16px;
    text-decoration: none;
    font-size: 1.2rem;
    padding: 6px;
    color: #60dbfb;
    &: hover {
      text-shadow: 0px 0px 10px #60dbfb;
    }
  `;

  return (
    <div>
      <Navbar className="navbar">
        <NavHeader>React Blog</NavHeader>

        <NavLinkContainer className="navlinks">
          <LS.NavFixedItem_LINK to="/blogs">Home</LS.NavFixedItem_LINK>
          <LS.NavFixedItem_LINK to="/create">New Blog</LS.NavFixedItem_LINK>
        </NavLinkContainer>
      </Navbar>
    </div>
  );
}

export default Navbar;
