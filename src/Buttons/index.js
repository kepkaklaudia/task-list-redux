import { Button, Container } from "./styled";

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) => (
  <Container>
    {tasks.length > 0 && (
      <>
        <Button 
        onClick={toggleHideDone} 
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
);

export default Buttons;