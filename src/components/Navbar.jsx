import React from 'react'
import styled from 'styled-components'

function Navbar() {
    const Navbar = styled.nav`
        padding: 20px;
        display: flex;
        align-items: center;
        max-width: 80vw;
        margin: 0 auto;
        border-bottom: 1px solid #f2f2f2;
    `;
    const NavHeader = styled.h1`
      color: #f1356d;
    `;
    const NavLinkContainer = styled.div`
      margin-left: auto;
    `;
    const NavLinks = styled.a`
      margin-left: 16px;
      text-decoration: none;
      padding: 6px;
      &: hover {
        color: #f1356d;
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

export default Navbar
