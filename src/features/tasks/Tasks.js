import Form from "./Form";
import TaskList from "./TaskList";
import Buttons from "./Buttons";
import Section from "../../common/Section";
import Header from "../../common/Header";
import { Container } from "../../common/Container/styled";
import { Button } from "./Buttons/styled";
import { useDispatch } from "react-redux";
import { fetchExampleTasks } from "./tasksSlice";
import { setTasks } from "./tasksSlice";

function Tasks() {
  const dispatch = useDispatch();

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
            disabled={setTasks.status === "loading"}
          >
           {setTasks.status === "loading" ? "Ładowanie..." : "Pobierz przykładowe zadania"}
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

export default Tasks;
