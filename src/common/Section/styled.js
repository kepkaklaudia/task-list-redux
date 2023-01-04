import styled from "styled-components";

export const Wrapper = styled.section`
  background-color: ${({theme}) => theme.color.white};
  min-height: 120px;
  box-shadow: 0 0 5px ${({theme}) => theme.color.gallery};
`;

export const Header = styled.header`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  border-bottom: solid 1px ${({theme}) => theme.color.gallery};

  @media screen and (max-width: ${({theme}) => theme.breakpoint.mobileMax}px) {
    grid-template-columns: 1fr;
    padding: 10px;
  }
`;

export const Title = styled.h2`
  font-size: 20px;
  padding: 20px;
  margin: 0;
`;