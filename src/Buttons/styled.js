import styled from "styled-components";

export const Container = styled.div`
  padding: 10px;

  @media screen and (max-width: ${({theme}) => theme.breakpoint.mobileMax}px) {
    display: grid;
    grid-gap: 15px;
  }
`;

export const Button = styled.button`
  border: none;
  background-color: ${({theme}) => theme.color.transparent};
  color: ${({theme}) => theme.color.teal};
  transition: 0.5s;

  &:hover{
    color: ${({theme}) => theme.color.persian};
    cursor: pointer;
  }

  &:active{
    color: ${({theme}) => theme.color.bondi};
  }

  &:disabled{
    color: ${({theme}) => theme.color.boulder};
  }
`;