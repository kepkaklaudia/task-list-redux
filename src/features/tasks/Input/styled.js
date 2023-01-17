import styled from "styled-components";

export const Input = styled.input`
border: solid 2px ${({ theme }) => theme.color.gallery};
padding: 10px;

&:focus{
  border: solid 2px ${({ theme }) => theme.color.white};
  outline: solid 1px ${({ theme }) => theme.color.black};
}

@media screen and (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
  &:focus{
    border: solid 2px ${({ theme }) => theme.color.white};
    outline: solid 1px ${({ theme }) => theme.color.orange};
  }
}
`;