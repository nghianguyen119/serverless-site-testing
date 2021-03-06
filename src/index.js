import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { Homepage, Aboutpage, Header } from "./App"; //new

ReactDOM.render(
	<Router>
		<Header />
		<Switch>
			<Route exact path="/" component={Homepage} />
			<Route exact path="/about" component={Aboutpage} />
		</Switch>
	</Router>,
	document.getElementById("root")
);
