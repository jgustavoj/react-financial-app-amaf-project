import React from "react";
import { Link } from "react-router-dom";
import InvestLogo from "../../img/InvestLogo.png";

export const Navbar = () => {
	return (
		<nav className="navbar is-light pt-3 pb-3">
			<div className="container">
				<div className="navbar-brand is-active">
					<a className="navbar-item" href="/">
						<img src={InvestLogo} width="112" height="28" />
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
						<a className="navbar-item" href="#">
							Investments
						</a>
						<a className="navbar-item" href="#">
							Forecast
						</a>
						<div className="navbar-item has-dropdown is-hoverable">
							<a className="navbar-link">Menu</a>
							<div className="navbar-dropdown">
								<a className="navbar-item navbar-item-dropdown" href="#">
									Dashboard
								</a>
								<a className="navbar-item navbar-item-dropdown" href="#">
									Profile
								</a>
							</div>
						</div>
					</div>
					<div>
						<div className="navbar-item">
							<div className="buttons">
								<a className="button is-light" href="#">
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
