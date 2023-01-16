import { useParams } from "react-router-dom";
import { Container } from "../../../common/Container/styled";
import Header from "../../../common/Header";
import Section from "../../../common/Section";

function TaskPage() {
  const params = useParams();

  return (
    <Container>
      <Header
        title="Szczegóły zadania"
      />
      <Section
        title={params.id}
        body={<>details</>}
      />
    </Container>
  );
};

export default TaskPage;