import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

// const sagaMiddleWare = createSagaMiddleware()

const store = createStore()

export default store;