import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import routes from './routes';
import Header from './components/Header';
import ComingView from './views/widget/ComingView';
import RecentView from './views/widget/RecentView';
import TodayView from './views/widget/TodayView';

function App() {
  return (
    <>
      <Header />

      <Suspense fallback={null}>
        <Switch>
          <Route path={routes.recent} component={RecentView} />
          <Route path={routes.today} component={TodayView} />
          <Route path={routes.coming} component={ComingView} />

          <Redirect to={routes.today} />
        </Switch>
      </Suspense>
    </>
  );
}

export default App;
