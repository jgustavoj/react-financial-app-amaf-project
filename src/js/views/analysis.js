import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link, NavLink, useParams } from "react-router-dom";
import { NavbarLeft } from "../component/navbarleft";
const fmp_url = "https://financialmodelingprep.com/";

export const Analysis = props => {
	const [analyzedata, setAnalyzeData] = useState([]);
	const [comparisons, setComparisons] = useState([]);
	// const {
	// 	match: { params }
	// } = this.props;
	const symbol = props.match.params.tickerSymbol;
	// add symbol details fetch for each
	useEffect(() => {
		fetch(fmp_url + `api/v3/ratios-ttm/${symbol}?apikey=da6240539dc1685ff601c5c2edb3ff29`, {
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
				setAnalyzeData(resp);
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
										<th scope="col">PEG Ratio</th>
										<th scope="col">Payout Ratio</th>
										<th scope="col">Current Ratio</th>
										<th scope="col">Quick Ratio</th>
										<th scope="col">Cash Ratio</th>
									</tr>
								</thead>
								<tbody>
									{analyzedata
										? analyzedata.map((value, index) => {
												return (
													<tr key={index}>
														<td>{symbol}</td>
														<td>
															{value.dividendYielTTM === null
																? "N/A"
																: value.dividendYielTTM.toFixed(2)}
														</td>
														<td>
															{value.dividendYielPercentageTTM === null
																? "N/A"
																: value.dividendYielPercentageTTM.toFixed(2)}
														</td>
														<td>
															{value.peRatioTTM === null
																? "N/A"
																: value.peRatioTTM.toFixed(2)}
														</td>
														<td>{value.pegRatioTTM}</td>
														<td>{value.payoutRatioTTM}</td>
														<td>{value.currentRatioTTM.toFixed(2)}</td>
														<td>{value.quickRatioTTM.toFixed(2)}</td>
														<td>{value.cashRatioTTM.toFixed(2)}</td>
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
