import React from "react";
import { Link } from "react-router-dom";

export const DashboardMain = () => {
	return (
		<>
			<div className="container is-fluid pr-5">
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
									<img src="https://bootstrapshuffle.com/placeholder/pictures/bg_16-9.svg" alt="" />
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

				<section className="section">
					<div className="container">
						<div className="columns is-multiline">
							<div className="column is-6-tablet is-3-desktop">
								<div className="box">
									<div className="media">
										<div className="media-left">
											<figure className="image is-48x48">
												<img
													src="https://bootstrapshuffle.com/placeholder/icons/folder-o.svg"
													alt=""
												/>
											</figure>
										</div>
										<div className="media-content has-text-right">
											<h3 className="title is-1 has-text-info">2</h3>
										</div>
									</div>
									<h4 className="title">Projects</h4>
									<progress className="progress is-info" role="progressbar" value="75" max="100" />
								</div>
							</div>
							<div className="column is-6-tablet is-3-desktop">
								<div className="box">
									<div className="media">
										<div className="media-left">
											<figure className="image is-48x48">
												<img
													src="https://bootstrapshuffle.com/placeholder/icons/users.svg"
													alt=""
												/>
											</figure>
										</div>
										<div className="media-content has-text-right">
											<h3 className="title is-1 has-text-danger">117</h3>
										</div>
									</div>
									<h4 className="title">Clients</h4>
									<progress className="progress is-danger" role="progressbar" value="75" max="100" />
								</div>
							</div>
							<div className="column is-6-tablet is-3-desktop">
								<div className="box">
									<div className="media">
										<div className="media-left">
											<figure className="image is-48x48">
												<img
													src="https://bootstrapshuffle.com/placeholder/icons/file-text-o.svg"
													alt=""
												/>
											</figure>
										</div>
										<div className="media-content has-text-right">
											<h3 className="title is-1 has-text-success">248</h3>
										</div>
									</div>
									<h4 className="title">Invoices</h4>
									<progress className="progress is-success" role="progressbar" value="75" max="100" />
								</div>
							</div>
							<div className="column is-6-tablet is-3-desktop">
								<div className="box">
									<div className="media">
										<div className="media-left">
											<figure className="image is-48x48">
												<img
													src="https://bootstrapshuffle.com/placeholder/icons/calendar-o.svg"
													alt=""
												/>
											</figure>
										</div>
										<div className="media-content has-text-right">
											<h3 className="title is-1 has-text-info">14</h3>
										</div>
									</div>
									<h4 className="title">Forecast</h4>
									<progress className="progress is-info" role="progressbar" value="75" max="100" />
								</div>
							</div>
						</div>
					</div>
				</section>
				<section className="section">
					<div className="container">
						<div className="columns is-multiline">
							<div className="column is-6-tablet is-3-desktop">
								<div className="card">
									<div className="card-header">
										<h3 className="card-header-title is-inline">
											<span>Income</span>
											<span className="tag is-success is-pulled-right">Monthly</span>
										</h3>
									</div>
									<div className="card-content">
										<h3 className="title">108,200</h3>
										<p>Total income</p>
										<p className="mt-2">
											<img
												src="https://bootstrapshuffle.com/placeholder/icons/level-up.svg"
												alt=""
												width="24"
											/>
											<span className="ml-2">82%</span>
										</p>
									</div>
								</div>
							</div>
							<div className="column is-6-tablet is-3-desktop">
								<div className="card">
									<div className="card-header">
										<h3 className="card-header-title is-inline">
											<span>Orders</span>
											<span className="tag is-success is-pulled-right">Monthly</span>
										</h3>
									</div>
									<div className="card-content">
										<h3 className="title">128,430</h3>
										<p>New orders</p>
										<p className="mt-2">
											<img
												src="https://bootstrapshuffle.com/placeholder/icons/level-up.svg"
												alt=""
												width="24"
											/>
											<span className="ml-2">32%</span>
										</p>
									</div>
								</div>
							</div>
							<div className="column is-6-tablet is-3-desktop">
								<div className="card">
									<div className="card-header">
										<h3 className="card-header-title is-inline">
											<span>Visits</span>
											<span className="tag is-success is-pulled-right">Today</span>
										</h3>
									</div>
									<div className="card-content">
										<h3 className="title">81,248</h3>
										<p>New visits</p>
										<p className="mt-2">
											<img
												src="https://bootstrapshuffle.com/placeholder/icons/level-up.svg"
												alt=""
												width="24"
											/>
											<span className="ml-2">24%</span>
										</p>
									</div>
								</div>
							</div>
							<div className="column is-6-tablet is-3-desktop">
								<div className="card">
									<div className="card-header">
										<h3 className="card-header-title is-inline">
											<span>User activity</span>
											<span className="tag is-danger is-pulled-right">Today</span>
										</h3>
									</div>
									<div className="card-content">
										<h3 className="title">2,341</h3>
										<p>Used app more than once</p>
										<p className="mt-2">
											<img
												src="https://bootstrapshuffle.com/placeholder/icons/level-down.svg"
												alt=""
												width="24"
											/>
											<span className="ml-2">42%</span>
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		</>
	);
};
