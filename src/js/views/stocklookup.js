import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from "react-router-dom";
import { NavbarLeft } from "../component/navbarleft";

const axios = require("axios");

export const StockLookup = () => {
	const [stockfind, setStockFind] = useState();
	const [results, setResults] = useState(false);
	const [stocksymbol, setStockSymbol] = useState("");
	const finn_token = "c0vsqsv48v6t383lq1kg";

	function Lookup() {
		return (
			<div className="box">
				<h5 className="title is-5 pb-3 is-spaced has-text-danger">Results</h5>
				<br />

				<p>{stockfind.metric.beta}</p>
			</div>
		);
	}

	function handleStockLookup(e) {
		if (stocksymbol != "") {
			axios
				.get(`https://finnhub.io/api/v1/stock/metric?symbol=${stocksymbol}&metric=all&token=${finn_token}`)
				.then(function(response) {
					setStockFind(response.data);
					setResults(true);
				})
				.catch(function(error) {
					console.log(error);
				})
				.then(function() {
					// always executed
				});
		}
	}
	return (
		<>
			<div className="columns is-multiline">
				<div className="column is-2-tablet">
					<NavbarLeft />
				</div>
				<div className="column is-10-tablet">
					<div className="container is-fluid pr-7">
						<section className="section">
							<h3 className="title is-3 pb-3 is-spaced">Quick Stock Lookup</h3>
							<div className="container pt-3 pr-7">
								<div className="columns is-desktop">
									<table className="table is-fullwidth">
										<div className="box">
											<div className="field has-addons is-medium">
												<p className="control is-medium">
													<input
														className="input is-medium"
														type="text"
														placeholder="Stock symbol"
														onChange={e => setStockSymbol(e.target.value)}
													/>
												</p>
												<p className="control is-medium">
													<button
														className="button is-medium is-danger"
														type="button"
														onClick={handleStockLookup}>
														<span className="icon">
															<i className="fas fa-search" />
														</span>
													</button>
												</p>
											</div>
										</div>
										{!results ? "" : <Lookup />}
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
