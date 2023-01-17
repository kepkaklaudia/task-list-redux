import { Wrapper, Header, Title } from "./styled";

const Section = ({ title, body, extraHeaderContent }) => (
  <Wrapper>
    <Header>
      <Title>
        {title}
      </Title>
      {extraHeaderContent}
    </Header>
    {body}
  </Wrapper>
);

export default Section;