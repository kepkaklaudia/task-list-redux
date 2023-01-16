import { Wrapper, Header, Title, Details } from "./styled";

const Section = ({ title, body, extraHeaderContent }) => (
  <Wrapper>
    <Header>
      <Title>
        {title}
      </Title>
      {extraHeaderContent}
    </Header>
    {body}
    <Details/>
  </Wrapper>
);

export default Section;