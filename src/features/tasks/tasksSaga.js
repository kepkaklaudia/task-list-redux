import { takeEvery, takeLatest, call, put, delay, select } from "redux-saga/effects";
import { fetchExampleTasks, setTasks, setStatus, selectTasks } from "./tasksSlice";
import { getExampleTasks } from "./getExampleTasks"
import { saveTasksInLocalStorage } from "./tasksLocalStorage";

function* fetchExampleTasksHandler() {
  try {
    const exampleTasks = yield call(getExampleTasks);
    yield put(setStatus("loading"));
    yield delay (3000);
    yield put(setTasks(exampleTasks));
    yield put(setStatus("success"));
  } catch (error) {
    yield call(alert, "Coś poszło nie tak!");
  }
}

function* saveTasksInLocalStorageHandler() {
  const tasks = yield select(selectTasks);
  yield call (saveTasksInLocalStorage, tasks);
}

export function* watchFetchExampleTasks() {
  yield takeLatest(fetchExampleTasks.type, fetchExampleTasksHandler);
  yield takeEvery("*", saveTasksInLocalStorageHandler);
}