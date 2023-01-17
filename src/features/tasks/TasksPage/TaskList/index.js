import { List, Item, Content, DoneButton, RemoveButton } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import { selectTasksState, toggleTaskDone, removeTask, selectHideDone } from "../../tasksSlice";
import { StyledLink } from "./styled";
import { useLocation } from "react-router-dom";

const TaskList = () => {
  const location = useLocation();

  const { tasks } = useSelector(selectTasksState);
  const hideDone = useSelector(selectHideDone);

  const dispatch = useDispatch();

  return (
    <List>
      {tasks.map(task => (
        <Item
          key={task.id}
          hidden={task.done && hideDone}
        >
          <DoneButton
            onClick={() => dispatch(toggleTaskDone(task.id))}
          >
            {task.done ? "✓" : ""}
          </DoneButton>
          <Content
            done={task.done}
          >
            <StyledLink to={`/zadania/${task.id}`}>{task.content}</StyledLink>
          </Content>
          <RemoveButton
            onClick={() => dispatch(removeTask(task.id))}
          >
            🗑
          </RemoveButton>
        </Item>
      ))}
    </List>
  );
};
export default TaskList;