import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link, NavLink, useParams } from "react-router-dom";
import { NavbarLeft } from "../component/navbarleft";
import { createChart } from "lightweight-charts";

const fmp_url = "https://financialmodelingprep.com/";

export const Analysis = props => {
	const [analyzedata, setAnalyzeData] = useState([]);
	const [comparisons, setComparisons] = useState([]);
	const chart = createChart(document.body, { width: 400, height: 300 });
	const lineSeries = chart.addLineSeries();
	lineSeries.setData([
		{ time: "2019-04-11", value: 80.01 },
		{ time: "2019-04-12", value: 96.63 },
		{ time: "2019-04-13", value: 76.64 },
		{ time: "2019-04-14", value: 81.89 },
		{ time: "2019-04-15", value: 74.43 },
		{ time: "2019-04-16", value: 80.01 },
		{ time: "2019-04-17", value: 96.63 },
		{ time: "2019-04-18", value: 76.64 },
		{ time: "2019-04-19", value: 81.89 },
		{ time: "2019-04-20", value: 74.43 }
	]);
	const apikey = "262c745fe3c5212a43505988b53267ad"; // da6240539dc1685ff601c5c2edb3ff29
	// const {
	// 	match: { params }
	// } = this.props;
	const symbol = props.match.params.tickerSymbol;
	// add symbol details fetch for each
	useEffect(() => {
		fetch(fmp_url + `api/v3/profile/${symbol}?apikey=${apikey}`, {
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
										<th scope="col">Price</th>
										<th scope="col">Final Div</th>
										<th scope="col">Exchange</th>
										<th scope="col">Range</th>
										<th scope="col">Beta</th>
										<th scope="col">Changes</th>
										<th scope="col">Currency</th>
										<th scope="col">Address</th>
									</tr>
								</thead>
								<tbody>
									{analyzedata
										? analyzedata.map((value, index) => {
												return (
													<tr key={index}>
														<td>{symbol}</td>
														<td>${value.price === null ? "N/A" : value.price}</td>
														<td>{value.lastDiv === 0 ? "N/A" : value.lastDiv}</td>
														<td>
															{value.exchangeShortName === ""
																? "N/A"
																: value.exchangeShortName}
														</td>
														<td>{value.range === null ? "N/A" : value.range}</td>
														<td>{value.beta === null ? "N/A" : value.beta}</td>
														<td>{value.changes === null ? "N/A" : value.changes}</td>
														<td>{value.currency === null ? "N/A" : value.currency}</td>
														<td>{value.address === "" ? "N/A" : value.address}</td>
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
