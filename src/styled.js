import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Navigation = styled.nav`
  background-color: ${({ theme }) => theme.color.teal};
  width: 100%;
  height: 50px;
`;

export const UnorderedList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
`;

export const StyledNavLink = styled(NavLink)`
  color: ${({ theme }) => theme.color.white};
  text-decoration: none;
  display: block;
  padding: 15px 10px; 
  transition: 0.3s ;

  &:hover {
    transform: scale(1.05);
  }

  &:focus {
    font-weight: bold;
  }
`;