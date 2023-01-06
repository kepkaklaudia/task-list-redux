import { Button, Container } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import { toggleHideDone, setAllDone, selectHideDone, selectAreTasksEmpty, selectIsEveryTaskDone } from "../tasksSlice";

const Buttons = () => {
  const areTasksEmpty = useSelector(selectAreTasksEmpty);
  const hideDone = useSelector(selectHideDone);
  const isDone = useSelector(selectIsEveryTaskDone);
  const dispatch = useDispatch();

  return (
    <Container>
      {areTasksEmpty > 0 && (
        <>
          <Button
            onClick={() => dispatch(toggleHideDone())}
          >
            {hideDone ? "Pokaż " : "Ukryj "} ukończone
          </Button>
          <Button
            onClick={() => dispatch(setAllDone())}
            disabled={isDone}
          >
            Ukończ wszystkie
          </Button>
        </>
      )}
    </Container>
  )
};

export default Buttons;