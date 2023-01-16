import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Navigation = styled.nav`
  background-color: ${({theme}) => theme.color.teal};
`;

export const UnorderedList = styled.ul`
  list-style-type: none;
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: ${({theme}) => theme.color.white};

  &.active {
    font-weight: bold;
  }
`;