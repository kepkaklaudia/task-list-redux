import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Container } from "../../../common/Container/styled";
import Header from "../../../common/Header";
import Section from "../../../common/Section";
import { getTaskById } from "../tasksSlice";

function TaskPage() {
  const { id } = useParams();
  const task = useSelector(state => getTaskById(state, id));

  return (
    <Container>
      <Header
        title="Szczegóły zadania"
      />
      <Section
        title={task ? task.content : "😨 Nie znaleziono zadania"}
        body={<>details</>}
      />
    </Container>
  );
};

export default TaskPage;