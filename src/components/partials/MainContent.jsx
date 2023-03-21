import React from "react";
import { Toolbar } from "@material-ui/core";
import { SampleParagraphs } from "../common/SampleParagraphs";
import { Switch, Route } from "react-router-loading";
import { HomePage } from "../pages/HomePage";
import { ProductPage } from "../pages/ProductPage";

export const MainContent = ({ className }) => {
	return (
		<main className={className}>
			{
				// trong MainContent phải có toolbar để tạo margin top ứng với height của tool bar
				// nếu không thì nội dung sẽ bị toolbar che mất
			}
			<Toolbar />
			<Switch>
				<Route
					path="/product"
					exact
					render={() => (
						<ProductPage image="https://next.material-ui.com/static/images/cards/paella.jpg" />
					)}
					loading
				/>
				<Route
					path="/category"
					exact
					render={() => (
						<ProductPage image="https://next.material-ui.com/static/images/cards/contemplative-reptile.jpg" />
					)}
					loading
				/>
				<Route
					path="/customer"
					exact
					render={() => (
						<ProductPage image="https://next.material-ui.com/static/images/cards/paella.jpg" />
					)}
					loading
				/>
				<Route
					path="/settings"
					exact
					render={() => (
						<ProductPage image="https://next.material-ui.com/static/images/cards/contemplative-reptile.jpg" />
					)}
					loading
				/>
				<Route path="/" exact component={HomePage} loading />
			</Switch>
		</main>
	);
};
