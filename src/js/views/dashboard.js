import React from "react";
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from "react-router-dom";
import { NavbarLeft } from "../component/navbarleft";
import { MarketNews } from "../component/marketnews";

export const Dashboard = () => {
	return (
		<>
			<div className="columns is-multiline">
				<div className="column is-2-tablet">
					<NavbarLeft />
				</div>
				<div className="column is-10-tablet">
					<div className="container is-fluid pr-5">
						<section className="section">
							<div className="container">
								<MarketNews />
							</div>
						</section>
						<section className="section">
							<div className="container">
								<div className="columns is-desktop">
									<div className="column is-4-desktop">
										<h2 className="title">Welcome Piper</h2>
										<p className="block">You have 2 messages and 3 notifications.</p>
										<table className="table">
											<tbody>
												<tr>
													<td>1</td>
													<td>Read developers CV !!!</td>
													<td>10:00am</td>
												</tr>
												<tr>
													<td>2</td>
													<td>Meeting with Russ Hanneman</td>
													<td>10:15am</td>
												</tr>
												<tr>
													<td>3</td>
													<td>Verify current Weismann score</td>
													<td>11:00am</td>
												</tr>
												<tr>
													<td>4</td>
													<td>Call back to Gavin Belson</td>
													<td>11:38am</td>
												</tr>
												<tr>
													<td>5</td>
													<td>Richard call me! / Gavin</td>
													<td>11:48am</td>
												</tr>
											</tbody>
										</table>
									</div>
									<div className="column is-5-desktop">
										<div className="block">
											<img
												src="https://bootstrapshuffle.com/placeholder/pictures/bg_16-9.svg"
												alt=""
											/>
										</div>
										<div className="columns is-mobile">
											<div className="column">
												<h3 className="title is-5">$ 108,200</h3>
												<p className="subtitle is-6">Sales report</p>
											</div>
											<div className="column">
												<h3 className="title is-5">$ 120,521</h3>
												<p className="subtitle is-6">Cost of operation</p>
											</div>
											<div className="column">
												<h3 className="title is-5">- $ 12,321</h3>
												<p className="subtitle is-6">Net income</p>
											</div>
										</div>
									</div>
									<div className="column is-3-desktop">
										<h3 className="title is-4">PiperNet progress</h3>
										<p className="block">{`You're asigned to two projects`}</p>
										<div className="columns has-text-centered">
											<div className="column">
												<div className="level">
													<div className="level-item">
														<a href="#">
															<figure className="image is-96x96">
																<img
																	className="is-rounded"
																	src="https://bootstrapshuffle.com/placeholder/pictures/bg_circle.svg"
																	alt=""
																/>
															</figure>
														</a>
													</div>
												</div>
												<div className="block">
													<a href="#">Infrastructure</a>
												</div>
											</div>
											<div className="column">
												<div className="level">
													<div className="level-item">
														<a href="#">
															<figure className="image is-96x96">
																<img
																	className="is-rounded"
																	src="https://bootstrapshuffle.com/placeholder/pictures/bg_circle.svg"
																	alt=""
																/>
															</figure>
														</a>
													</div>
												</div>
												<div className="block">
													<a href="#">Compression</a>
												</div>
											</div>
										</div>
										<p>
											{`
                                Decentralized, secure, private. The Pied Piper Net is on it's way to revolutionize every
                                smartphone, PC, and smart-fridge near you.
                                `}
										</p>
									</div>
								</div>
							</div>
						</section>
					</div>
				</div>
			</div>
		</>
	);
};
