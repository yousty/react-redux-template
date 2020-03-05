import todos from './todos'

type IReducersType = {
  todos: typeof todos;
}

const reducers: IReducersType = { todos }

export default reducers;
