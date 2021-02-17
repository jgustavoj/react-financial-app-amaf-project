import React from "react";
import { Link } from "react-router-dom";

export const LogIn = () => {
	return (
		<form className="box has-background-white">
			<h2 className="title has-text-centered has-text-dark">Login</h2>
			<div className="field">
				<p className="control">
					<input type="email" className="input" placeholder="Email" />
				</p>
			</div>
			<div className="field">
				<p className="control">
					<input type="password" className="input" placeholder="Password" />
				</p>
			</div>
			<div className="field">
				<p className="control has-text-centered">
					<button className="button is-success">Login</button>
				</p>
			</div>
		</form>
	);
};
