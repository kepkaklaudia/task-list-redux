import Form from "./Form";
import TaskList from "./TaskList";
import Buttons from "./Buttons";
import Section from "../../../common/Section";
import Header from "../../../common/Header";
import { Container } from "../../../common/Container/styled";
import { Button } from "./Buttons/styled";
import { useDispatch, useSelector } from "react-redux";
import { fetchExampleTasks, selectStatus } from "../tasksSlice";
import { useLocation } from "react-router-dom";

function TasksPage() {
  const dispatch = useDispatch();
  const status = useSelector(selectStatus);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  searchParams.get("szukaj");
  
  return (
    <Container>
      <Header
        title="Lista zadań"
      />
      <Section
        title="Dodaj nowe zadanie"
        extraHeaderContent={
          <Button
            onClick={() => dispatch(fetchExampleTasks())}
            disabled={status === "loading"}
          >
            {status === "loading" ? "Ładowanie..." : "Pobierz przykładowe zadania"}
          </Button>
        }
        body={<Form />}
      />
      <Section
        title="Lista zadań"
        body={<TaskList />}
        extraHeaderContent={<Buttons />}
      />
    </Container>
  );
}

export default TasksPage;
