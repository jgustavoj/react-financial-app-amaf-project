import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar is-light pt-3 pb-3">
			<div className="container">
				<div className="navbar-brand is-active">
					<a className="navbar-item" href="#">
						<img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
					</a>
					<a className="navbar-burger" role="button" aria-label="menu" aria-expanded="false">
						<span aria-hidden="true" />
						<span aria-hidden="true" />
						<span aria-hidden="true" />
					</a>
				</div>
				<div className="navbar-menu">
					<div className="navbar-end">
						<a className="navbar-item" href="#">
							Features
						</a>
						<a className="navbar-item" href="#">
							Enterprise
						</a>
						<a className="navbar-item" href="#">
							Support
						</a>
						<div className="navbar-item has-dropdown is-hoverable">
							<a className="navbar-link">ICO</a>
							<div className="navbar-dropdown">
								<a className="navbar-item navbar-item-dropdown" href="#">
									Whitepaper
								</a>
								<a className="navbar-item navbar-item-dropdown" href="#">
									Token
								</a>
							</div>
						</div>
					</div>
					<div>
						<div className="navbar-item">
							<div className="buttons">
								<a className="button is-light" href="#">
									Log in
								</a>
								<a className="button is-danger" href="#">
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
