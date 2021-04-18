import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import useContext from "./context/useContext";

import Auth from "./pages/Auth/Auth";
import Main from "./pages/Main/Main";
import Recipe from "./pages/Recipe/Recipe";
import Wrapper from "./components/Wrapper/Wrapper";
import Page404 from "./components/UI/Page404/Page404";

const App = () => {
	const { state } = useContext();
	console.log(state);

	const unAuthRoutes = (
		<Switch>
			<Route path="/auth" render={props => <Auth {...props} />} />
			<Route path="/"> {<Redirect to="/auth" />} </Route>
			<Redirect to="/auth" />
		</Switch>
	);

	const authRoutes = (
		<Switch>
			<Route path="/recipe" render={props => <Recipe {...props} />} />
			<Route path="/main" render={props => <Main {...props} />} />
			<Route path="/"> {<Redirect to="/main" />} </Route>
			<Route component={Page404} />
		</Switch>
	);

	return <>{state.token ? <Wrapper>{authRoutes}</Wrapper> : unAuthRoutes}</>;
};

export default App;
