import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { NavbarLeft } from "../component/navbarleft";
const fmp_url = "https://financialmodelingprep.com/";
// props.location.state.comparisons[]

export const GainerComparison = props => {
	const [data, setData] = useState([]);
	const [comparisons, setComparisons] = useState([]);
	// add symbol details fetch for each
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
					<div className="container is-fluid pr-5">
						<section className="section">
							<div className="container">
								<div className="columns is-desktop">
									<div className="column is-2-desktop">
										{/* <Link
											to={{
												pathname: "/gainerComparison",
												state: {
													comparisons: comparisons
												}
											}}>
											<button type="button" className="btn btn-warning">
												Compare
											</button>
										</Link> */}
										<table className="table">
											<thead className="thead-dark">
												<tr>
													<th scope="col" />
													<th scope="col">Ticker</th>
													<th scope="col">Changes</th>
													<th scope="col">Price</th>
													<th scope="col">Changes %</th>
													<th scope="col">Company</th>
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
																	<th scope="row">{value.ticker}</th>
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
							</div>
						</section>
					</div>
				</div>
			</div>
		</>
	);
};
