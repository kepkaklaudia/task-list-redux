import { createSlice } from "@reduxjs/toolkit";
import { getTasksFromLocalStorage } from "./tasksLocalStorage";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: getTasksFromLocalStorage(),
    hideDone: false,
    status: ""
  },
  reducers: {
    addTask: ({ tasks }, { payload: task }) => {
      tasks.push(task);
    },
    toggleHideDone: state => {
      state.hideDone = !state.hideDone;
    },
    toggleTaskDone: ({ tasks }, { payload: taskId }) => {
      const index = tasks.findIndex(({ id }) => id === taskId);
      tasks[index].done = !tasks[index].done;
    },
    removeTask: ({ tasks }, { payload: taskId }) => {
      const index = tasks.findIndex(({ id }) => id === taskId);
      tasks.splice([index], 1);
    },
    setAllDone: ({ tasks }) => {
      for (const task of tasks) {
        task.done = true;
      };
    },
    fetchExampleTasks: () => {
    },
    setTasks: (state, { payload: tasks }) => {
      state.tasks = tasks;
    },
    setStatus: (state, { payload: status }) => {
      state.status = status;
    },
  },
});

export const { addTask, toggleHideDone, toggleTaskDone, removeTask, setAllDone, fetchExampleTasks, setTasks, setStatus } = tasksSlice.actions;

export const selectTasksState = state => state.tasks;

export const selectTasks = state => selectTasksState(state).tasks;
export const selectHideDone = state => selectTasksState(state).hideDone;
export const selectAreTasksEmpty = state => selectTasks(state).length;
export const selectIsEveryTaskDone = state => selectTasks(state).every(({ done }) => done);
export const selectStatus = state => selectTasksState(state).status;

export const getTaskById = (state, taskId) => selectTasks(state).find(({ id }) => id === taskId);
export const selectTasksByQuery = (state, query) => selectTasks(state).filter(({content}) => content.includes(query.trim()));

export default tasksSlice.reducer;
