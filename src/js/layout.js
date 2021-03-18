import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Login } from "./views/login";
import { Investments } from "./views/investments";
import { Forecast } from "./views/forecast";
import { Signup } from "./views/signup";
import { Profile } from "./views/profile";
import { Navbar } from "./component/navbar";
import { NavbarLeft } from "./component/navbarleft";
import { Footer } from "./component/footer";
import { AggIndicator } from "./component/aggindicator";
import { MarketNews } from "./component/marketnews";

import injectContext from "./store/appContext";
import { Dashboard } from "./views/dashboard";
import { MostGainer } from "./views/mostgainer";
import { MostLoser } from "./views/mostloser";
import { MostActives } from "./views/mostactives";
import { Analysis } from "./views/analysis";
import { StockLookup } from "./views/stocklookup";
import { Buy } from "./views/buy";
import { MarketSectors } from "./views/marketsectors";
import { GainerComparison } from "./views/gainercomparison";
import { top5Stocks2021 } from "./views/top5stocks2021";
import { Portfolio } from "./views/portfolio";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column h-100">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/login" component={Login} />
						<Route exact path="/signup" component={Signup} />
						<Route exact path="/investments" component={Investments} />
						<Route exact path="/forecast" component={Forecast} />
						<Route exact path="/profile" component={Profile} />
						<Route exact path="/dashboard" component={Dashboard} />
						<Route exact path="/mostgainer" component={MostGainer} />
						<Route exact path="/mostloser" component={MostLoser} />
						<Route exact path="/top5stocks2021" component={top5Stocks2021} />
						<Route exact path="/mostactives" component={MostActives} />
						<Route exact path="/marketsectors" component={MarketSectors} />
						<Route exact path="/gainercomparison" component={GainerComparison} />
						<Route exact path="/portfolio" component={Portfolio} />
						<Route exact path="/marketnews" component={MarketNews} />
						<Route exact path="/stocklookup" component={StockLookup} />
						{/* <Route exact path="/single/:theid" component={Single} /> */}
						<Route path="/analysis/:tickerSymbol" component={Analysis} />
						<Route path="/buy/:tickerSymbol" component={Buy} />
						<Route path="/aggindicator" component={AggIndicator} />
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
