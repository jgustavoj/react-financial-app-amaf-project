import React from "react";
//import { BrowserRouter as NavLink } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route, Link, NavLink, useParams } from "react-router-dom";

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
						<li>
							<NavLink to="/portfolio" activeClassName="is-active">
								Portfolio
							</NavLink>
						</li>
					</ul>
					<p className="menu-label">Stock Research</p>
					<ul className="menu-list">
						<li>
							<NavLink to="/stocklookup" activeClassName="is-active">
								Stock Lookup
							</NavLink>
						</li>
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
						<li>
							<NavLink to="/top5stocks2021" activeClassName="is-active">
								Top 5 Stocks 2021
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
