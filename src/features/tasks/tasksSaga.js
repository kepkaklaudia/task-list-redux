import { takeEvery, call, put, delay } from "redux-saga/effects";
import { fetchExampleTasks, setTasks, setStatus } from "./tasksSlice";
import { getExampleTasks } from "./getExampleTasks"

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

export function* watchFetchExampleTasks() {
  yield takeEvery(fetchExampleTasks.type, fetchExampleTasksHandler);
}