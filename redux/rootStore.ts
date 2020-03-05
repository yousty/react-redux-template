import {
  applyMiddleware, createStore,
} from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootSaga'
import rootReducer from './rootReducer'

// @@TODO: middleware types
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const bindMiddleware = (middleware: any) => {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension');
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

// @@TODO: initialState typed
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
function configureStore(initialState = {}) {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    rootReducer,
    initialState,
    bindMiddleware([sagaMiddleware]),
  );

  store.sagaTask = sagaMiddleware.run(rootSaga);

  return store;
}

export default configureStore;
