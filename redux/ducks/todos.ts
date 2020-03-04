import {
  createAction,
  createAsyncAction,
  createReducer,
} from 'typesafe-actions';
import { v4 as uuidv4 } from 'uuid';
import {
  call, put, takeLatest,
} from 'redux-saga/effects';
import axios, { AxiosPromise, AxiosError } from 'axios';

type Todo = {
  id: ReturnType<typeof uuidv4>;
  title: string;
}

export const saveTodoAsync = createAsyncAction(
  '@appName/TODOS/SAVE_TODOS_REQUEST',
  '@appName/TODOS/SAVE_TODOS_SUCCESS',
  '@appName/TODOS/SAVE_TODOS_FAILURE',
)<undefined, Todo, AxiosError>();


export const addTodo = createAction(
  '@appName/TODOS/ADD_TODO',
  (title: string) => ({
    id: uuidv4(),
    title,
  }),
)<Todo>();

const todosApi = {
  addTodo: (payload: Todo): AxiosPromise<Todo> => axios.post('someApi.ch/api/v1', payload),
};

// Saga for Async calls
function* addTodoSaga(action: ReturnType<typeof addTodo>): Generator {
  try {
    yield call(todosApi.addTodo, action.payload);
    yield put(saveTodoAsync.success(action.payload));
  } catch (err) {
    yield put(saveTodoAsync.failure(err));
  }
}

export function* watchAddTodoRequest() {
  yield takeLatest(addTodo, addTodoSaga);
}

type TodosState = {
  todos: Todo[];
  error: AxiosError;
  loading: boolean;
}

const initialState: TodosState = {
  todos: [],
  error: undefined,
  loading: false,
};
// Reducer
export default createReducer(initialState).handleAction(
  saveTodoAsync.success,
  (state: TodosState, action: ReturnType<typeof saveTodoAsync.success>) => ({ ...state, todos: [action.payload, ...state.todos] }),
);
