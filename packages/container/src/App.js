import React from "react";
import { BrowserRouter } from "react-router-dom";
import { StylesProvider, createGenerateClassName } from "@material-ui/core";
import MarketingApp from "./components/MarketingApp";
import Header from "./components/Header";

const generatedClassName = createGenerateClassName({
	productionPrefix: 'co',
});

export default () => {
	return (
		<StylesProvider generateClassName={generatedClassName}>
			<BrowserRouter>
				<div>
					<Header />
					<MarketingApp />
				</div>
			</BrowserRouter>
		</StylesProvider>
	);
}