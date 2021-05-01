import React, { useEffect, useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import useAuthContext from "./context/useContext";
import * as actions from "./context/actions";

import Auth from "./pages/Auth/Auth";
import Main from "./pages/Main/Main";
import Recipe from "./pages/Recipe/Recipe";
import Profile from "./pages/Profile/Profile";
import Wrapper from "./components/Wrapper/Wrapper";
import Page404 from "./components/UI/Page404/Page404";
import Spinner from "./components/UI/Spinner/Spinner";
import { getUserByToken } from "./api/auth";

const App = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const { state, dispatch } = useAuthContext();

  useEffect(() => {
    const getUserInfo = async (token) => {
      setLoading(true);
      try {
        const result = await getUserByToken(token);
        console.log(result);
        dispatch(
          actions.successLogIn({
            token: token,
            name: result.data.name,
            surname: result.data.surname,
            email: result.data.email,
          })
        );
      } catch (e) {
        console.log(e);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    if (state.token) {
      getUserInfo(state.token);
    }
  }, []);

  const unAuthRoutes = (
    <Switch>
      <Route path="/auth" render={(props) => <Auth {...props} />} />
      <Route path="/main" render={(props) => <Main {...props} />} />
      <Route exact path="/">
        <Redirect to="/main" />
      </Route>
    </Switch>
  );

  const authRoutes = (
    <Switch>
      <Route path="/recipe" render={(props) => <Recipe {...props} />} />
      <Route path="/main" render={(props) => <Main {...props} />} />
      <Route path="/profile" render={(props) => <Profile {...props} />} />
      <Route exact path="/">
        <Redirect to="/main" />
      </Route>
      <Route component={Page404} />
    </Switch>
  );

  return (
    <>
      {loading && (
        <div
          style={{
            width: "100vw",
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Spinner />
        </div>
      )}
      {error && <></>}
      {!loading && !error && (
        <Wrapper>{state.token ? authRoutes : unAuthRoutes}</Wrapper>
      )}
    </>
  );
};

export default App;
