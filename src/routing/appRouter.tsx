import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import BoardgameDetails from 'src/views/BoardgameDetails';
import { AboutView } from '../views/AboutView';
import MainView from '../views/MainView';
import APP_ROUTES from './AppRoutes';

const AppRouter = () => {
  return (
    <Switch>
      <Route exact={true} path={APP_ROUTES.HOME} component={MainView} />
      <Route
        path={APP_ROUTES.BOARD_GAME_DETAILS}
        component={BoardgameDetails}
      />
      <Route path={APP_ROUTES.ABOUT} component={AboutView} />
    </Switch>
  );
};

export default AppRouter;
