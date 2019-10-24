import * as React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavBarContainer = styled.div`
  display: flex;
  border-bottom: 1px solid #5c31a3;
`;

const NavButton = styled(Link)`
  font-size: 15px;
  color: #5c31a3;
  padding: 10px 20px;
  margin: 10px 20px;
  text-decoration: none;
  cursor: pointer;
`;

export default () => {
  const navItems = [
    { text: "Home", link: "/" },
    { text: "Favorites", link: "/favorites" }
  ];

  return (
    <nav>
      <NavBarContainer>
        {navItems.map((navItem, index) => (
          <NavButton key={index} to={navItem.link}>
            {navItem.text}
          </NavButton>
        ))}
      </NavBarContainer>
    </nav>
  );
};
