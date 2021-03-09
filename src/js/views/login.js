import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Login = () => {
	const { store, actions } = useContext(Context);
	const { full_name, setFull_name } = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	return (
		<>
			<section className="section">
				<div className="container has-text-centered">
					<h2 className="title has-text-centered mb-6">Login</h2>
					<div className="columns is-centered">
						<div className="column is-5 is-4-desktop">
							<form>
								<div className="field">
									<div className="control">
										<input
											className="input"
											type="email"
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
								<div className="field">
									<button
										type="button"
										className="button is-danger is-fullwidth"
										onClick={() => actions.login(email, password)}>
										Sign in!
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};
