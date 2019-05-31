import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import currentMessageReducer from '../features/CurrentMessage/reducer';
import rootSaga from '../shared/sagas';
import createSagaMiddleware from 'redux-saga';
import {takeLatest} from 'redux-saga/effects';
import callApi from '../shared/api';

const logShit = () => {
  console.log('logggin');
  return;
};
const { actionCreators } = currentMessageReducer;
function * mySaga() {
  takeLatest(actionCreators.fetch().type, logShit);
}
// create the saga middleware
// mount it on the Store
const store = (initialState = {}) => {
  //const sagaMiddleware = createSagaMiddleware();
  return {
    ...createStore(currentMessageReducer, initialState, applyMiddleware(logger))
  };
};

export default store;
