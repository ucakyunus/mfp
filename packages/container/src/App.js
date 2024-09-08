import React, { lazy, Suspense, useState, useEffect } from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { StylesProvider, createGenerateClassName } from "@material-ui/core";
import { createBrowserHistory } from "history";

import Header from "./components/Header";
import Progress from "./components/Progress";

const MarketingApp = lazy(() => import("./layouts/MarketingApp"));
const AuthApp = lazy(() => import("./layouts/AuthApp"));
const DashboardApp = lazy(() => import("./layouts/DashboardApp"));

const generatedClassName = createGenerateClassName({
	productionPrefix: 'co',
});

const history = createBrowserHistory();

export default () => {
	const [isSignedIn, setIsSignedIn] = useState(false);
	
	useEffect(() => {
		if (isSignedIn) {
			history.push("/dashboard");
		}
	}, [isSignedIn]);
	
	return (
		<StylesProvider generateClassName={generatedClassName}>
			<Router history={history}>
				<div>
					<Header isSignedIn={isSignedIn} onSignOut={() => setIsSignedIn(false)}/>
					
					<Suspense fallback={<Progress/>}>
						<Switch>
							<Route path="/auth">
								<AuthApp setIsSignedIn={() => setIsSignedIn(true)} />
							</Route>
							
							<Route path="/dashboard">
								{!isSignedIn && <Redirect to="/" />}
								<DashboardApp />
							</Route>
							
							<Route path="/" component={MarketingApp} />
						</Switch>
					</Suspense>
				</div>
			</Router>
		</StylesProvider>
	);
}