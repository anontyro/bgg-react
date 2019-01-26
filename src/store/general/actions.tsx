import * as constants from './consts';

export interface SetUsername {
  username: string;
  type: constants.SET_USERNAME;
}

export type GeneralAction = SetUsername;

export function setUsername(username: string): SetUsername {
  return {
    type: constants.SET_USERNAME,
    username,
  };
}
