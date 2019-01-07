import { HashRouter as Router, Route ,Redirect,Switch } from "react-router-dom";

import React from "react";
import App from "../App";
import Home from "../components/Home" ;
import HomeDetail from "../components/HomeDetail" ;
const router = (
	<Router>
		<App>
			<Switch>
				<Route path="/home" component ={Home}/>
				<Route path="/detail" component ={HomeDetail}/>

				<Redirect from="/" to="/home"/>
			</Switch>
		</App>
	</Router>
	)

export default router;