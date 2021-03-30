import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Auth from "./pages/Auth/Auth";
import Main from "./pages/Main/Main";
import Wrapper from "./components/Wrapper/Wrapper";

const App = () => {

  const unAuthRoutes = (
    <Switch>
      <Route path="/auth" render={(props) => <Auth {...props} />} />
      <Redirect to="/auth" />
    </Switch>
  );

  const authRoutes = (
    <Switch>
      <Route path="/main" render={(props) => <Main {...props} />} />
    </Switch>
  );

  return <>{true ? <Wrapper>{authRoutes}</Wrapper> : { unAuthRoutes }}</>;
};

export default App;
