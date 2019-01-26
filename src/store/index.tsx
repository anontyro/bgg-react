import {applyMiddleware, combineReducers, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {general, generalInitalState, GeneralState} from './general/reducers';

export interface MyAppState {
  general: GeneralState;
}

export const initialState = {
  general: generalInitalState,
};

export const rootReducer = combineReducers({
  general,
});

const composeEnhancers = composeWithDevTools({
  // Specify name here, actionsBlacklist, actionsCreators and other options if needed
});

export const myStore = createStore(
  rootReducer,
  initialState,
  composeEnhancers(applyMiddleware())
);
