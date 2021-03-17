import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from "react-router-dom";
import { NavbarLeft } from "../component/navbarleft";
import PropTypes from "prop-types";
const fmp_url = "https://financialmodelingprep.com/";

export const GainerComparison = props => {
	const apikey = "262c745fe3c5212a43505988b53267ad";
	const [quotedata, setQuoteData] = useState([]);

	const getSymbols = props.location.state.comparisons;
	const symbol = props.location.state.comparisons[0];
	var counter = 0;

	props.location.state.comparisons.forEach(index => {
		symbol[counter] = props.location.state.comparisons[index];
		console.log(symbol[counter]); // map instead
		counter++;
	});

	function getStockData() {}

	useEffect(() => {
		// map inside for each fetch > symbol
		fetch(fmp_url + `api/v3/quote/${symbol}?apikey=${apikey}`)
			.then(resp => {
				if (!resp.ok) {
					throw new Error(resp.statusText);
				}
				return resp.json();
			})
			.then(resp => {
				setQuoteData(resp);
				// { "symbol":
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
GainerComparison.propTypes = {
	location: PropTypes.object
};
