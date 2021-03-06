import React from "react";
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from "react-router-dom";
import InvestLogo from "../../img/InvestLogo.png";
import axios from "axios";

// const response = async function getMostActive() {
// 	try {
// 		const response = await axios.get(
// 			"https://financialmodelingprep.com/api/v3/quote/AAPL?apikey=da6240539dc1685ff601c5c2edb3ff29"
// 		);
// 		console.log(response);
// 	} catch (error) {
// 		console.error(error);
// 	}
// };

export const NavbarLeft = () => {
	return (
		<>
			<div className="container is-fluid pt-5">
				<aside className="menu">
					<p className="menu-label">General</p>
					<ul className="menu-list">
						<li>
							<NavLink to="/dashboard" activeClassName="is-active">
								Dashboard
							</NavLink>
						</li>
						<li>
							<NavLink to="/profile" activeClassName="is-active">
								Profile
							</NavLink>
						</li>
					</ul>
					<p className="menu-label">Stock Market</p>
					<ul className="menu-list">
						<li>
							<NavLink to="/mostgainer" activeClassName="is-active">
								Most Gainer
							</NavLink>
						</li>
						<li>
							<NavLink to="/mostloser" activeClassName="is-active">
								Most Loser
							</NavLink>
						</li>
						{/* <li>
							<a>Manage Your Team</a>
							<ul>
								<li>
									<a>Members</a>
								</li>
								<li>
									<a>Plugins</a>
								</li>
								<li>
									<a>Add a member</a>
								</li>
							</ul>
						</li> */}
						<li>
							<NavLink to="/mostactives" activeClassName="is-active">
								Most Actives
							</NavLink>
						</li>
						<li>
							<NavLink to="/marketsectors" activeClassName="is-active">
								Market Sectors
							</NavLink>
						</li>
					</ul>
					<p className="menu-label">Transactions</p>
					<ul className="menu-list">
						<li>
							<a>Payments</a>
						</li>
						<li>
							<a>Transfers</a>
						</li>
						<li>
							<a>Balance</a>
						</li>
					</ul>
				</aside>
			</div>
		</>
	);
};