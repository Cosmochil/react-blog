import React from "react";
import styled from "styled-components";

function Navbar() {
  const Navbar = styled.nav`
    padding: 10px;
    display: flex;
    align-items: center;
    max-width: 80vw;
    margin: 0 auto;
    border-bottom: 1px solid #ffcad4;
  `;
  const NavHeader = styled.h1`
    color: #f1356d;
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
    color: #f1356d;
    &: hover {
      color: #ffcad4;
    }
  `;

  return (
    <div>
      <Navbar className="navbar">
        <NavHeader>React Blog</NavHeader>
        <NavLinkContainer className="navlinks">
          <NavLinks href="/blog">Home</NavLinks>
          <NavLinks href="/create">New Blog</NavLinks>
        </NavLinkContainer>
      </Navbar>
    </div>
  );
}

export default Navbar;
