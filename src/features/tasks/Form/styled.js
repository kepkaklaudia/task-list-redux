import styled from "styled-components";

export const StyledForm = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-gap: 20px;
  padding: 15px;

  @media screen and (max-width: ${({theme}) => theme.breakpoint.mobileMax}px) {
    grid-template-columns: auto;
    grid-gap: 15px;
  }
`;

export const Input = styled.input`
  border: solid 2px ${({theme}) => theme.color.gallery};
  padding: 10px;

  &:focus{
    border: solid 2px ${({theme}) => theme.color.white};
    outline: solid 1px ${({theme}) => theme.color.black};
  }

  @media screen and (max-width: ${({theme}) => theme.breakpoint.mobileMax}px) {
    &:focus{
      border: solid 2px ${({theme}) => theme.color.white};
      outline: solid 1px ${({theme}) => theme.color.orange};
    }
  }
`;

export const Button = styled.button`
  color: ${({theme}) => theme.color.white};
  background-color: ${({theme}) => theme.color.teal};
  border: none;
  padding: 10px;
  font-weight: 300;
  transition: 0.5s;

  &:hover{
    background-color: ${({theme}) => theme.color.persian};
    transform: scale(1.1);
    cursor: pointer;
  }

  &:active{
    background-color: ${({theme}) => theme.color.bondi};
  }

  @media screen and (max-width: ${({theme}) => theme.breakpoint.mobileMax}px) {
    &:hover{
      transform: scale(1.05);
    }
  }
`;