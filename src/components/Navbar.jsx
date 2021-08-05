import React from "react";
import styled from "styled-components";

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
  const NavLinks = styled.a`
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
          <NavLinks href="/blog">HOME</NavLinks>
          <NavLinks href="/create">NEW BLOG</NavLinks>
        </NavLinkContainer>
      </Navbar>
    </div>
  );
}

export default Navbar;
