import { Container } from "../../common/Container/styled";
import Header from "../../common/Header";
import Section from "../../common/Section";
import { Details } from "../../common/Section/styled";

const Author = () => (
  <>
    <Container>
      <Header
        title="O autorze"
      />
      <Section
        title="Klaudia Kępka 🤓"
        body={<Details>
          <p><strong>Cześć!</strong> 👆 Tak właśnie się nazywam i <strong>cieszę się, że tu jesteś!</strong>😄 </p>
          <p>Ta aplikacja powstała w ramach kursu w Internetowej Szkole Programowania YouCode👩‍💻.</p>
          <p>Programowanie od zawsze kojarzyło mi się z zajęciem interesującym, ale również pełnym wyzwań🦾.<br />
            Na rok 2023 postawiłam sobie bardzo ambitne zadanie - <strong>zostanę programistką!</strong>🚀</p>
        </Details>}
      />
    </Container>
  </>
);

export default Author;
