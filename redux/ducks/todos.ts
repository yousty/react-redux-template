import {
  createAction,
  createAsyncAction,
  createReducer,
  Reducer,
  ActionType,
} from 'typesafe-actions'
import { v4 as uuidv4 } from 'uuid'
import {
  call, put, takeEvery,
} from 'redux-saga/effects'
import axios, { AxiosPromise, AxiosError } from 'axios'

export type Todo = {
  id: ReturnType<typeof uuidv4>;
  title: string;
}

export const todoActions = {
  addTodo: createAction(
    '@appName/TODOS/ADD_TODO',
    (title: string) => ({
      id: uuidv4(),
      title,
    }),
  )<Todo>(),

  saveTodoAsync: createAsyncAction(
    '@appName/TODOS/SAVE_TODOS_REQUEST',
    '@appName/TODOS/SAVE_TODOS_SUCCESS',
    '@appName/TODOS/SAVE_TODOS_FAILURE',
  )<null, Todo, AxiosError>(),
}

const todosApi = {
  addTodo: (payload: Todo): AxiosPromise<Todo> => axios.post('someApi.ch/api/v1', payload),
}

// Saga for Async calls
function* addTodoSaga(action: ReturnType<typeof todoActions.addTodo>): Generator {
  try {
    yield put(todoActions.saveTodoAsync.request(null, null))
    yield call(todosApi.addTodo, action.payload)
    yield put(todoActions.saveTodoAsync.success(action.payload))
  } catch (err) {
    yield put(todoActions.saveTodoAsync.failure(err))
  }
}

export function* watchAddTodoRequest() {
  yield takeEvery(todoActions.addTodo, addTodoSaga)
}

export type TodosState = {
  todos: Todo[];
  error: AxiosError;
  loading: boolean;
}

const initialState: TodosState = {
  todos: [{ id: '1', title: 'quack' }],
  error: undefined,
  loading: false,
}

// Reducer
const reducer: Reducer<TodosState, ActionType<typeof todoActions>> = createReducer(initialState)
  .handleAction(
    todoActions.saveTodoAsync.request,
    (state: TodosState): TodosState => ({
      ...state,
      loading: true,
    }),
  )
  .handleAction(
    todoActions.saveTodoAsync.success,
    (
      state: TodosState,
      action: ReturnType<typeof todoActions.saveTodoAsync.success>,
    ): TodosState => ({
      ...state,
      loading: false,
      todos: [action.payload, ...state.todos],
    }),
  )
  .handleAction(
    todoActions.saveTodoAsync.failure,
    (
      state: TodosState,
      action: ReturnType<typeof todoActions.saveTodoAsync.failure>,
    ): TodosState => ({
      ...state,
      loading: false,
      error: action.payload,
    }),
  )

export default reducer;
