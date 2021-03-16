import React from "react";
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from "react-router-dom";
import InvestLogo from "../../img/InvestLogo.png";
//import InvestLogo from "../../img/fin-circle.png";
// import InvestLogo from "../../img/fin-invest.png";

export const Navbar = () => {
	return (
		<nav className="navbar is-light pt-3 pb-3">
			<div className="container">
				<div className="navbar-brand is-active">
					<a className="navbar-item" href="/">
						<img src={InvestLogo} width="50" height="150" />
					</a>
					<a className="navbar-burger" role="button" aria-label="menu" aria-expanded="false">
						<span aria-hidden="true" />
						<span aria-hidden="true" />
						<span aria-hidden="true" />
					</a>
				</div>
				<div className="navbar-menu">
					<div className="navbar-end">
						<a className="navbar-item" href="/">
							Home
						</a>

						<div className="navbar-item has-dropdown is-hoverable">
							<a className="navbar-link">Menu</a>
							<div className="navbar-dropdown">
								<a className="navbar-item navbar-item-dropdown" href="/dashboard">
									Dashboard
								</a>
								<a className="navbar-item navbar-item-dropdown" href="/profile">
									Profile
								</a>
								<a className="navbar-item navbar-item-dropdown" href="/portfolio">
									Portfolio
								</a>
							</div>
						</div>
					</div>
					<div>
						<div className="navbar-item">
							<div className="buttons">
								<a className="button has-text-dark" href="#">
									<Link to="/login">Log in</Link>
								</a>
								<a className="button is-danger" href="/signup">
									Sign up
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
};
