import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from "@material-ui/core/styles";

import Dashboard from "./components/Dashboard";

const generatedClassName = createGenerateClassName({
	productionPrefix: 'da',
});

export default ({ history, onSignIn }) => {
	return (
		<StylesProvider generateClassName={generatedClassName}>
			{/* memory history */}
			<Router history={history}>
				<Switch>
					<Route path="/" component={Dashboard} />
				</Switch>
			</Router>
		</StylesProvider>
	);
}