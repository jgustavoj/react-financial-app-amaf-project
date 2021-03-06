import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Signup = () => {
	const { store, actions } = useContext(Context);
	const { full_name, setFull_name } = useState("");

	return (
		<>
			<section className="section">
				<div className="container">
					<h2 className="title has-text-centered mb-6">Signup</h2>
					<div className="columns is-centered">
						<div className="column is-5 is-4-desktop">
							<form>
								<div className="field">
									<div className="control">
										<input className="input" type="text" placeholder="Name" />
									</div>
								</div>
								<div className="field">
									<div className="control">
										<input className="input" type="email" placeholder="Email" />
									</div>
								</div>
								<div className="field">
									<div className="control">
										<input className="input" type="password" placeholder="Password" />
									</div>
								</div>
								<div className="field">
									<div className="control">
										<button
											className="button is-danger is-fullwidth"
											onClick={() => actions.signupPage()}>
											Sign up!
										</button>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};
