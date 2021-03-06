import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from "react-router-dom";
import { NavbarLeft } from "../component/navbarleft";
const fmp_url = "https://financialmodelingprep.com/";

export const GainerComparison = props => {
	const [quotedata, setQuoteData] = useState([]);
	const symbol = props.location.state.comparisons[0];
	const [comparisons, setComparisons] = useState([]);
	// add symbol details fetch for each
	useEffect(() => {
		fetch(fmp_url + `api/v3/quote/${symbol}?apikey=da6240539dc1685ff601c5c2edb3ff29`, {
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
				setQuoteData(resp);
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
					<section className="section">
						<div className="container">
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
							<table className="table is-fullwidth">
								<thead className="thead-dark">
									<tr>
										<th scope="col">Symbol</th>
										<th scope="col">Name</th>
										<th scope="col">Price</th>
										<th scope="col">Change</th>
										<th scope="col">Day Low</th>
										<th scope="col">Day High</th>
										<th scope="col">Year Low</th>
										<th scope="col">Year High</th>
										<th scope="col">Avg 50</th>
									</tr>
								</thead>
								<tbody>
									{quotedata
										? quotedata.map((value, index) => {
												return (
													<tr key={index}>
														<td>{value.symbol}</td>
														<td>{value.name}</td>
														<td>{value.price}</td>
														<td>{value.changesPercentage}%</td>
														<td>{value.dayLow}</td>
														<td>{value.dayHigh}</td>
														<td>{value.yearLow}</td>
														<td>{value.yearHigh}</td>
														<td>{value.priceAvg50.toFixed(2)}</td>
													</tr>
												);
										  })
										: "Loading..."}
								</tbody>
							</table>
						</div>
					</section>
				</div>
			</div>
		</>
	);
};
