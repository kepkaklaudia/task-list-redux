import { Button, Container } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import { selectTasks, toggleHideDone } from "../tasksSlice";

const Buttons = ({ setAllDone }) => {
  const { tasks, hideDone } = useSelector(selectTasks);
  const dispatch = useDispatch();
  return (
    <Container>
      {tasks.length > 0 && (
        <>
          <Button
            onClick={() => dispatch(toggleHideDone())}
          >
            {hideDone ? "Pokaż " : "Ukryj "} ukończone
          </Button>
          <Button
            onClick={setAllDone}
            disabled={tasks.every(({ done }) => done)}
          >
            Ukończ wszystkie
          </Button>
        </>
      )}
    </Container>
  )
};

export default Buttons;