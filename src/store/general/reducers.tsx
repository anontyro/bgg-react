import {GeneralAction} from './actions';
import {SET_USERNAME} from './consts';

export interface GeneralState {
  username: string;
}

export const generalInitalState = {
  username: 'player',
};

export function general(
  state: GeneralState = generalInitalState,
  action: GeneralAction
): GeneralState {
  switch (action.type) {
    case SET_USERNAME:
      console.log(state);
      console.log(action);
      console.log(`Set username: ${action.username}`);
      return {...state, username: action.username};
  }
  return state;
}
