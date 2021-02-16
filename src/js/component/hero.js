import React, { Component } from "react";

export const Hero = () => (
	<section className="hero is-info">
		<div className="hero-body">
			<div className="container">
				<div className="columns is-vcentered">
					<div className="column is-6">
						<h1 className="title is-spaced">The New Internet</h1>
						<p className="subtitle">
							{`
                            We've built a decentralized internet where information is totally free in every sense of the
                            word.
                            `}
						</p>
						<div className="columns">
							<div className="column is-half-desktop">
								<form>
									<div className="field">
										<div className="control">
											<input className="input" type="text" placeholder="Login" />
										</div>
									</div>
									<div className="field">
										<div className="control">
											<input className="input" type="password" placeholder="Password" />
										</div>
									</div>
									<div className="field">
										<div className="control">
											<input className="input" type="password" placeholder="Repeat password" />
										</div>
									</div>
									<div className="field">
										<div className="control">
											<button className="button is-danger">Sign up</button>
										</div>
									</div>
									<div className="field">
										<div className="control">
											<label className="checkbox">
												<div className="control">
													<input type="checkbox" required="required" />
													&nbsp; I agree to <a href="#">terms and conditions</a>.
												</div>
											</label>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
					<div className="column is-6">
						<img src="https://bootstrapshuffle.com/placeholder/pictures/bg_16-9.svg" alt="" />
					</div>
				</div>
			</div>
		</div>
	</section>
);
