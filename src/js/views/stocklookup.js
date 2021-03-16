import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from "react-router-dom";
import { NavbarLeft } from "../component/navbarleft";

export const StockLookup = () => {
	const [data, setData] = useState([]);
	const [stockfind, setStockFind] = useState({});
	const [stocksymbol, setStockSymbol] = useState("");
	const apikey = "262c745fe3c5212a43505988b53267ad";

	function handleStockLookup(e) {
		fetch(`https://finnhub.io/api/v1/stock/metric?symbol=${stocksymbol}&metric=all&token=c0vsqsv48v6t383lq1kg`)
			.then(response => {
				console.log(response);
				setStockFind(response);
			})
			.catch(err => {
				console.error(err);
			});
		//setStockPrice((comparePrice * e.target.value).toFixed(2));
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
										<div>
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
