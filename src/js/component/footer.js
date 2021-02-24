import React, { Component } from "react";

export const Footer = () => (
	<footer className="footer">
		<div className="container">
			<div className="columns is-desktop">
				<div className="column is-5">
					<h2 className="title is-5">
						<a href="#">Pied Piper</a>
					</h2>
					<p className="block">A financial application</p>
					<div className="buttons">
						<a className="button" href="#">
							<img src="https://bootstrapshuffle.com/placeholder/icons/twitter.svg" alt="" />
						</a>
						<a className="button" href="#">
							<img src="https://bootstrapshuffle.com/placeholder/icons/facebook-f.svg" alt="" />
						</a>
						<a className="button" href="#">
							<img src="https://bootstrapshuffle.com/placeholder/icons/instagram.svg" alt="" />
						</a>
					</div>
				</div>
				<div className="column">
					<h3 className="title is-6">Products</h3>
					<ul>
						<li>
							<a href="#">Features</a>
						</li>
						<li>
							<a href="#">Enterprise</a>
						</li>
						<li>
							<a href="#">Support</a>
						</li>
						<li>
							<a href="#">ICO</a>
						</li>
					</ul>
				</div>
				<div className="column">
					<h6 className="title is-6">App Links</h6>
					<ul>
						<li>
							<a href="/login">Log in</a>
						</li>
						<li>
							<a href="/signup">Sign up</a>
						</li>
						<li>
							<a href="#">Press</a>
						</li>
						<li>
							<a href="#">Stores</a>
						</li>
					</ul>
				</div>
				<div className="column">
					<h6 className="title is-6">Contact</h6>
					<ul>
						<li>
							<a href="#">pay-the-piper@piedpiper.com</a>
						</li>
						<li>
							<a href="#">555-05-555</a>
						</li>
						<li>
							<a href="#">Pied Piper HQ - 59 Silicon Av.</a>
						</li>
					</ul>
				</div>
			</div>
			<hr />
			<div className="columns">
				<div className="column">
					<a href="#">Terms and conditions</a>
				</div>
				<div className="column has-text-right-tablet">
					<p className="subtitle is-6">&copy; 2020 Pied Piper. All right reserved.</p>
				</div>
			</div>
		</div>
	</footer>
);
