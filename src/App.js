import React from 'react';
import { Route, Switch } from 'react-router-dom';

import SharePage from './components/SharePage';
import AddPage from './components/AddPage';

const App = () => {
  return (
    <Switch>
      <Route path="/" exact component={AddPage} />
      <Route path="/share" exact component={SharePage} />
    </Switch>
  );
};

export default App;
