import React, { Component } from "react";

export const Header = () => (
	<section className="hero">
		<div className="hero-body">
			<div className="container has-text-centered pt-4">
				{/* <h1 className="title is-spaced">Bringing the Internet of the Future to the People</h1> */}
				<h2 className="subtitle">
					{`
                    Decentralized, secure, private. The PiperNet is on it's way to revolutionize every smartphone, PC,
                    and smart-fridge near you.
                    `}
				</h2>
			</div>
			<hr className="my-6" />
			<div className="columns has-text-centered">
				<div className="column is-3 mb-6">
					<img src="https://bootstrapshuffle.com/placeholder/icons/check.svg" alt="" />
					<h4 className="title is-4">Security</h4>
					<p>Your data is virtually unhackable compared to traditional net</p>
				</div>
				<div className="column is-3 mb-6">
					<img src="https://bootstrapshuffle.com/placeholder/icons/check.svg" alt="" />
					<h4 className="title is-4">Privacy</h4>
					<p>Nobody is tracking you when your activity when you use PiperNet</p>
				</div>
				<div className="column is-3 mb-6">
					<img src="https://bootstrapshuffle.com/placeholder/icons/check.svg" alt="" />
					<h4 className="title is-4">Storage</h4>
					<p>Store your data safely, and access it faster than ever</p>
				</div>
				<div className="column is-3 mb-6">
					<img src="https://bootstrapshuffle.com/placeholder/icons/check.svg" alt="" />
					<h4 className="title is-4">Decentralization</h4>
					<p>Decentralized design allows data to flow freely and efficiently</p>
				</div>
			</div>
		</div>
	</section>
);
