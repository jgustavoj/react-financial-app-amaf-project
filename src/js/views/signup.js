import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

export const Signup = props => {
	const { store, actions } = useContext(Context);
	const [full_name, setFullName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

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
										<input
											className="input"
											type="text"
											placeholder="Name"
											value={full_name}
											onChange={e => setFullName(e.target.value)}
										/>
									</div>
									<div className="field">
										<div className="control">
											<input
												className="input"
												type="text"
												placeholder="Email"
												value={email}
												onChange={e => setEmail(e.target.value)}
											/>
										</div>
									</div>
									<div className="field">
										<div className="control">
											<input
												className="input"
												type="password"
												placeholder="Password"
												value={password}
												onChange={e => setPassword(e.target.value)}
											/>
										</div>
									</div>
								</div>
								{/* {/* <div className="field">
									<div className="control">
										<input className="input" type="password" placeholder="Password" />
									</div> 
								</div> */}
								<div className="field">
									<div className="control">
										<button
											type="button"
											className="button is-danger is-fullwidth"
											onClick={() => {
												actions.signupPage(full_name, email, password);
												props.history.push("/login");
											}}>
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
Signup.propTypes = {
	history: PropTypes.object
};
