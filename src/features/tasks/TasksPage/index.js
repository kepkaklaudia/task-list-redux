import Form from "./Form";
import TaskList from "./TaskList";
import Buttons from "./Buttons";
import Search from "./Search";
import Section from "../../../common/Section";
import Header from "../../../common/Header";
import { Container } from "../../../common/Container/styled";
import { Button } from "./Buttons/styled";
import { useDispatch, useSelector } from "react-redux";
import { fetchExampleTasks, selectStatus } from "../tasksSlice";

function TasksPage() {
  const dispatch = useDispatch();
  const status = useSelector(selectStatus);;

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
        title="Wyszukiwarka"
        body={<Search />}
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
