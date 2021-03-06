import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from "react-router-dom";
import { NavbarLeft } from "../component/navbarleft";

const fmp_url = "https://financialmodelingprep.com/";

export const MostGainer = () => {
	const [data, setData] = useState([]);
	const [comparisons, setComparisons] = useState([]);

	useEffect(() => {
		fetch(fmp_url + "api/v3/stock/gainers?apikey=da6240539dc1685ff601c5c2edb3ff29", {
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
				console.log(resp);
				setData(resp.mostGainerStock);
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
				<div className="column is-3-tablet">
					<NavbarLeft />
				</div>
				<div className="column is-9-tablet">
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
												<th scope="col">%</th>
												<th scope="col">Company</th>
											</tr>
										</thead>
										<tbody>
											{data
												? data.map((value, index) => {
														return (
															<tr key={index}>
																<td>
																	<div className="pretty p-icon p-jelly">
																		<input type="checkbox" />
																	</div>
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
																<td>{value.companyName}</td>
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
