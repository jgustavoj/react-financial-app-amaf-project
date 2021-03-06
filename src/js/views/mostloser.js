import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from "react-router-dom";
import { NavbarLeft } from "../component/navbarleft";

// rest of your app

const fmp_url = "https://financialmodelingprep.com/";

export const MostLoser = () => {
	const [data, setData] = useState([]);
	const [comparisons, setComparisons] = useState([]);

	useEffect(() => {
		fetch(fmp_url + "api/v3/stock/losers?apikey=da6240539dc1685ff601c5c2edb3ff29", {
			method: "GET",
			headers: {
				"Content-Type": "application/json"
			}
		})
			.then(resp => {
				if (!resp.ok) {
					throw new Error(resp.statusText);
				}
				return resp.json();
			})
			.then(resp => {
				//let store = getStore();
				// store.user = {
				// 	token: data.jwt,
				// 	info: data.user
				// };
				setData(resp.mostLoserStock);
				//setStore(store);
				return true;
			})
			.catch(err => {
				console.error(err);
				return false;
			});
	}, []);
	return (
		<>
			<div className="columns is-multiline">
				<div className="column is-2-tablet">
					<NavbarLeft />
				</div>
				<div className="column is-10-tablet">
					<div className="container is-fluid pr-7">
						<section className="section">
							<Link
								to={{
									pathname: "/gainercomparison",
									state: {
										comparisons: comparisons
									}
								}}>
								<button type="button" className="button is-warning">
									Compare
								</button>
							</Link>
							<br />
							<div className="container pt-6 pr-7">
								<div className="columns is-desktop">
									<table className="table is-fullwidth">
										<thead className="thead-dark is-fullwidth">
											<tr>
												<th scope="col" />
												<th scope="col">Ticker</th>
												<th scope="col">Changes</th>
												<th scope="col">Price</th>
												<th scope="col">+/- %</th>
												<th scope="col">Company</th>
												<th scope="col">Analysis</th>
											</tr>
										</thead>
										<tbody>
											{data
												? data.map((value, index) => {
														return (
															<tr key={index}>
																<td>
																	<input
																		type="checkbox"
																		aria-label=""
																		onClick={() =>
																			setComparisons(
																				comparisons.concat(value.ticker)
																			)
																		}
																	/>
																</td>
																<td>{value.ticker}</td>
																<td>{value.changes}</td>
																<td>{value.price}</td>
																<td>{value.changesPercentage}</td>
																<td>{value.companyName.slice(0, 25) + "..."}</td>
																<td>
																	<button className="button is-info is-small fas fa-chart-line" />
																</td>
															</tr>
														);
												  })
												: "Loading..."}
										</tbody>
									</table>
								</div>
							</div>
						</section>
					</div>
				</div>
			</div>
		</>
	);
};
