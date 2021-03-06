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
		fetch(fmp_url + `api/v3/financial-growth/${symbol}?limit=1&apikey=da6240539dc1685ff601c5c2edb3ff29`, {
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
				<div className="column is-3-tablet">
					<NavbarLeft />
				</div>
				<div className="column is-9-tablet">
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
										<th scope="col">Ticker</th>
										<th scope="col">Changes</th>
										<th scope="col">Price</th>
										<th scope="col">Changes %</th>
										<th scope="col">Company</th>
									</tr>
								</thead>
								<tbody>
									{quotedata
										? quotedata.map((value, index) => {
												return (
													<tr key={index}>
														<td>{value.symbol}</td>
														<td>{value.revenueGrowth}</td>
														<td>{value.grossProfitGrowth}</td>
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
					</section>
				</div>
			</div>
		</>
	);
};
