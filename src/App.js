import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
// import { Counter } from "./features/counter/Counter";
// import "./App.css";

import Header from './components/Header';
import ComingView from './views/ComingView';
import RecentView from './views/RecentView';
import TodayView from './views/TodayView';

function App() {
  return (
    <div className="App">
      <Header />

      <Suspense fallback={'loading'}>
        <Switch>
          <Route path="/recent" component={RecentView} />
          <Route path="/today" component={TodayView} />
          <Route path="/coming" component={ComingView} />
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
