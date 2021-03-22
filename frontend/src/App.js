import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Auth from './pages/Auth/Auth';
import Main from './pages/Main/Main';

const App = () => {

  const routes = (
    <Switch>
      <Route path="/auth" render={(props) => <Auth {...props} />}  />
      <Route path="/main" render={(props) => <Main {...props} />}  />
      <Redirect exact from="/" to="/auth" />
    </Switch>
  )

    return (
      <div>
        {routes}
      </div>
    );
}

export default App;