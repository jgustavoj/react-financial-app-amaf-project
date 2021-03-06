import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
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
							<Link to="/dashboard" activeClassName="is-active">
								Dashboard
							</Link>
						</li>
						<li>
							<a>Profile</a>
						</li>
					</ul>
					<p className="menu-label">Stock Market</p>
					<ul className="menu-list">
						<li>
							<Link to="/mostgainer" activeClassName="is-active">
								Most Gainer
							</Link>
						</li>
						<li>
							<a>Most Loser</a>
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
							<a>Most Active</a>
						</li>
						<li>
							<a>Market Sectors</a>
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
