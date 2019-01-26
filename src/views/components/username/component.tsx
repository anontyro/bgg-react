import * as React from 'react';

export interface Props {
  username: string;
  setUsername?: () => void;
  onUsernameChange?: (event: any) => void;
  onUsernameSubmit?: (event: any) => void;
}

function Username({
  username,
  setUsername,
  onUsernameChange,
  onUsernameSubmit,
}: Props) {
  return (
    <React.Fragment>
      <h1>Username: {username}</h1>
      <form onSubmit={onUsernameSubmit}>
        <label>Username</label>
        <input onChange={onUsernameChange} />
        <button type='submit'>Submit</button>
      </form>
    </React.Fragment>
  );
}

export default Username;
