import React, { lazy, Suspense, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { StylesProvider, createGenerateClassName } from "@material-ui/core";

import Header from "./components/Header";
import Progress from "./components/Progress";

const MarketingApp = lazy(() => import("./layouts/MarketingApp"));
const AuthApp = lazy(() => import("./layouts/AuthApp"));

const generatedClassName = createGenerateClassName({
	productionPrefix: 'co',
});

export default () => {
	const [isSignedIn, setIsSignedIn] = useState(false);
	
	return (
		<StylesProvider generateClassName={generatedClassName}>
			<BrowserRouter>
				<div>
					<Header isSignedIn={isSignedIn} onSignOut={() => setIsSignedIn(false)}/>
					
					<Suspense fallback={<Progress/>}>
						<Switch>
							<Route path="/auth">
								<AuthApp setIsSignedIn={() => setIsSignedIn(true)} />
							</Route>
							<Route path="/" component={MarketingApp} />
						</Switch>
					</Suspense>
				</div>
			</BrowserRouter>
		</StylesProvider>
	);
}