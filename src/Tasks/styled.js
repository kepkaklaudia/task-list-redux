import styled, { css } from "styled-components";

export const List = styled.ul`
  padding: 15px;
  list-style-type: none;
`;

export const Item = styled.li`
  display: grid;
  grid-template-columns: auto 1fr auto;
  margin: 10px;
  border-bottom: solid 1px ${({theme}) => theme.color.gallery};
  align-items: center;

  ${({hidden}) => hidden && css`
    display: none;
  `}
`;

export const Content = styled.span`
  margin: 10px;

  ${({done}) => done && css`
    text-decoration: line-through;
  `}
`;

export const Button = styled.button`
  color: ${({theme}) => theme.color.white};
  background-color: ${({theme}) => theme.color.crimson};
  width: 30px;
  height: 30px;
  padding: 2px;
  border: none;
  margin: 0;
  transition: 0.5s;
`;

export const DoneButton = styled(Button)`
  background-color: ${({theme}) => theme.color.green};

  &:hover{
    background-color: ${({theme}) => theme.color.forest};
    cursor: pointer;
  }

  &:active{
    background-color: ${({theme}) => theme.color.grass};
  }
`;

export const RemoveButton = styled(Button)`
  &:hover{
    background-color: ${({theme}) => theme.color.amaranth};
    cursor: pointer;
  }

  &:active{
    background-color: ${({theme}) => theme.color.mulberry};
  }
`;