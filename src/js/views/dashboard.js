import React from "react";
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from "react-router-dom";
import { NavbarLeft } from "../component/navbarleft";
//import { Collapsibles } from "../component/collapsibles";

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
								<div className="b-table">
									<div className="table-wrapper has-mobile-cards">
										<table className="table is-fullwidth is-hoverable is-fullwidth">
											<thead>
												<tr>
													<th className="is-chevron-cell" />
													<th />
													<th>Name</th>
													<th>Company</th>
													<th>City</th>
													<th>Progress</th>
													<th>Created</th>
													<th />
												</tr>
											</thead>
											<tbody>
												<tr>
													<td className="is-chevron-cell">
														<a role="button">
															<span className="icon">
																<i className="mdi mdi-chevron-right mdi-24px" />
															</span>
														</a>
													</td>
													<td className="is-image-cell">
														<div className="image">
															<img
																src="https://avatars.dicebear.com/v2/initials/rebecca-bauch.svg"
																className="is-rounded"
															/>
														</div>
													</td>
													<td data-label="Name">Rebecca Bauch</td>
													<td data-label="Company">Daugherty-Daniel</td>
													<td data-label="City">South Cory</td>
													<td data-label="Progress" className="is-progress-cell">
														<progress
															max="100"
															className="progress is-small is-primary"
															value="79">
															79
														</progress>
													</td>
													<td data-label="Created">
														<small
															className="has-text-grey is-abbr-like"
															title="Oct 25, 2020">
															Oct 25, 2020
														</small>
													</td>
													<td className="is-actions-cell">
														<div className="buttons is-right">
															<button
																className="button is-small is-primary"
																type="button">
																<span className="icon">
																	<i className="mdi mdi-eye" />
																</span>
															</button>
															<button
																className="button is-small is-danger jb-modal"
																data-target="sample-modal"
																type="button">
																<span className="icon">
																	<i className="mdi mdi-trash-can" />
																</span>
															</button>
														</div>
													</td>
												</tr>
												<tr className="detail">
													<td colSpan="8">
														<div className="detail-container">
															<article className="media">
																<figure className="media-left">
																	<div className="image is-64x64">
																		<img src="https://avatars.dicebear.com/v2/initials/rebecca-bauch.svg" />
																	</div>
																</figure>
																<div className="media-content">
																	<div className="content">
																		<p>
																			<strong>Rebecca Bauch</strong>{" "}
																			<small>@rbauch</small> <small>1d</small>
																			<br />
																			{`Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Proin ornare magna eros, eu pellentesque tortor vestibulum ut.
                        Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.`}
																		</p>
																	</div>
																</div>
															</article>
														</div>
													</td>
												</tr>
												<tr>
													<td className="is-chevron-cell">
														<a role="button">
															<span className="icon">
																<i className="mdi mdi-chevron-right mdi-24px" />
															</span>
														</a>
													</td>
													<td className="is-image-cell">
														<div className="image">
															<img
																src="https://avatars.dicebear.com/v2/initials/felicita-yundt.svg"
																className="is-rounded"
															/>
														</div>
													</td>
													<td data-label="Name">Felicita Yundt</td>
													<td data-label="Company">Johns-Weissnat</td>
													<td data-label="City">East Ariel</td>
													<td data-label="Progress" className="is-progress-cell">
														<progress
															max="100"
															className="progress is-small is-primary"
															value="67">
															67
														</progress>
													</td>
													<td data-label="Created">
														<small
															className="has-text-grey is-abbr-like"
															title="Jan 8, 2019">
															Jan 8, 2019
														</small>
													</td>
													<td className="is-actions-cell">
														<div className="buttons is-right">
															<button
																className="button is-small is-primary"
																type="button">
																<span className="icon">
																	<i className="mdi mdi-eye" />
																</span>
															</button>
															<button
																className="button is-small is-danger jb-modal"
																data-target="sample-modal"
																type="button">
																<span className="icon">
																	<i className="mdi mdi-trash-can" />
																</span>
															</button>
														</div>
													</td>
												</tr>
												<tr>
													<td className="is-chevron-cell">
														<a role="button">
															<span className="icon">
																<i className="mdi mdi-chevron-right mdi-24px" />
															</span>
														</a>
													</td>
													<td className="is-image-cell">
														<div className="image">
															<img
																src="https://avatars.dicebear.com/v2/initials/mr-larry-satterfield-v.svg"
																className="is-rounded"
															/>
														</div>
													</td>
													<td data-label="Name">Mr. Larry Satterfield V</td>
													<td data-label="Company">Hyatt Ltd</td>
													<td data-label="City">Windlerburgh</td>
													<td data-label="Progress" className="is-progress-cell">
														<progress
															max="100"
															className="progress is-small is-primary"
															value="16">
															16
														</progress>
													</td>
													<td data-label="Created">
														<small
															className="has-text-grey is-abbr-like"
															title="Dec 18, 2020">
															Dec 18, 2020
														</small>
													</td>
													<td className="is-actions-cell">
														<div className="buttons is-right">
															<button
																className="button is-small is-primary"
																type="button">
																<span className="icon">
																	<i className="mdi mdi-eye" />
																</span>
															</button>
															<button
																className="button is-small is-danger jb-modal"
																data-target="sample-modal"
																type="button">
																<span className="icon">
																	<i className="mdi mdi-trash-can" />
																</span>
															</button>
														</div>
													</td>
												</tr>
												<tr>
													<td className="is-chevron-cell">
														<a role="button">
															<span className="icon">
																<i className="mdi mdi-chevron-right mdi-24px" />
															</span>
														</a>
													</td>
													<td className="is-image-cell">
														<div className="image">
															<img
																src="https://avatars.dicebear.com/v2/initials/mr-broderick-kub.svg"
																className="is-rounded"
															/>
														</div>
													</td>
													<td data-label="Name">Mr. Broderick Kub</td>
													<td data-label="Company">Kshlerin, Bauch and Ernser</td>
													<td data-label="City">New Kirstenport</td>
													<td data-label="Progress" className="is-progress-cell">
														<progress
															max="100"
															className="progress is-small is-primary"
															value="71">
															71
														</progress>
													</td>
													<td data-label="Created">
														<small
															className="has-text-grey is-abbr-like"
															title="Sep 13, 2020">
															Sep 13, 2020
														</small>
													</td>
													<td className="is-actions-cell">
														<div className="buttons is-right">
															<button
																className="button is-small is-primary"
																type="button">
																<span className="icon">
																	<i className="mdi mdi-eye" />
																</span>
															</button>
															<button
																className="button is-small is-danger jb-modal"
																data-target="sample-modal"
																type="button">
																<span className="icon">
																	<i className="mdi mdi-trash-can" />
																</span>
															</button>
														</div>
													</td>
												</tr>
												<tr>
													<td className="is-chevron-cell">
														<a role="button">
															<span className="icon">
																<i className="mdi mdi-chevron-right mdi-24px" />
															</span>
														</a>
													</td>
													<td className="is-image-cell">
														<div className="image">
															<img
																src="https://avatars.dicebear.com/v2/initials/barry-weber.svg"
																className="is-rounded"
															/>
														</div>
													</td>
													<td data-label="Name">Barry Weber</td>
													<td data-label="Company">Schulist, Mosciski and Heidenreich</td>
													<td data-label="City">East Violettestad</td>
													<td data-label="Progress" className="is-progress-cell">
														<progress
															max="100"
															className="progress is-small is-primary"
															value="80">
															80
														</progress>
													</td>
													<td data-label="Created">
														<small
															className="has-text-grey is-abbr-like"
															title="Jul 24, 2019">
															Jul 24, 2019
														</small>
													</td>
													<td className="is-actions-cell">
														<div className="buttons is-right">
															<button
																className="button is-small is-primary"
																type="button">
																<span className="icon">
																	<i className="mdi mdi-eye" />
																</span>
															</button>
															<button
																className="button is-small is-danger jb-modal"
																data-target="sample-modal"
																type="button">
																<span className="icon">
																	<i className="mdi mdi-trash-can" />
																</span>
															</button>
														</div>
													</td>
												</tr>
											</tbody>
										</table>
									</div>
								</div>
							</div>
						</section>
						<section className="section is-full">
							<div className="container is-full">
								<h2 className="title">Latest news</h2>
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
											<progress
												className="progress is-info"
												role="progressbar"
												value="75"
												max="100"
											/>
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
											<progress
												className="progress is-danger"
												role="progressbar"
												value="75"
												max="100"
											/>
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
											<progress
												className="progress is-success"
												role="progressbar"
												value="75"
												max="100"
											/>
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
											<progress
												className="progress is-info"
												role="progressbar"
												value="75"
												max="100"
											/>
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
				</div>
			</div>
		</>
	);
};
