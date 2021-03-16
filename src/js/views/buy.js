import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link, NavLink, useParams } from "react-router-dom";
import { NavbarLeft } from "../component/navbarleft";
// import "fetch-json";

const fmp_url = "https://financialmodelingprep.com/";
const fcs_url = "https://fcsapi.com/";

export const Buy = props => {
	const [analyzedata, setAnalyzeData] = useState([]);
	const [comparisons, setComparisons] = useState([]);
	const [stockprice, setStockPrice] = useState("0");
	const [comparePrice, setComparePrice] = useState("0");
	const apikey = "262c745fe3c5212a43505988b53267ad"; // da6240539dc1685ff601c5c2edb3ff29
	const symbol = props.match.params.tickerSymbol;

	// showModal = () => {
	// 	this.setState({
	// 		show: true
	// 	});
	// };

	// closeModal = () => {
	// 	this.setState({
	// 		show: false
	// 	});
	// };

	useEffect(() => {
		fetch(fmp_url + `api/v3/profile/${symbol}?apikey=${apikey}`)
			.then(resp => {
				if (!resp.ok) {
					throw new Error(resp.statusText);
				}
				return resp.json();
			})
			.then(resp => {
				setAnalyzeData(resp);
				setComparePrice(resp[0].price);
				return true;
			})
			.catch(err => {
				console.error(err);
				return false;
			});
	}, []);

	function handlePriceChange(e) {
		setStockPrice((comparePrice * e.target.value).toFixed(2));
	}

	return (
		<>
			<div className="columns is-multiline">
				<div className="column is-2-tablet">
					<NavbarLeft />
				</div>
				<div className="column is-10-tablet">
					<section className="section">
						<h3 className="title is-3 pb-3 is-spaced">Buy for {symbol}</h3>
						<div className="container">
							<table className="table is-fullwidth">
								<thead className="thead-dark">
									<tr>
										<th scope="col">Company</th>
										<th scope="col">Current Price</th>
										<th scope="col">Buy</th>
										<th scope="col">Total Purchase</th>
									</tr>
								</thead>
								<tbody>
									{analyzedata
										? analyzedata.map((value, index) => {
												return (
													<tr key={index}>
														<td>
															{value.companyName.length > 35
																? value.companyName.slice(0, 35) + "..."
																: value.companyName}
														</td>
														<td>
															${value.price === null ? "N/A" : value.price.toFixed(2)}
														</td>
														<td>
															<div className="field has-addons is-small">
																<p className="control is-small">
																	<span className="select is-small">
																		<select>
																			<option>$</option>
																		</select>
																	</span>
																</p>
																<p className="control is-small">
																	<input
																		className="input is-small"
																		type="text"
																		placeholder="Amount of shares"
																		onChange={handlePriceChange}
																	/>
																</p>
																<p className="control is-small">
																	<a
																		className="button is-small is-info"
																		onClick={() => {
																			this.showModal();
																		}}>
																		Purchase
																	</a>
																</p>
															</div>
														</td>
														<td>${stockprice === "0" ? "0" : stockprice}</td>
													</tr>
												);
										  })
										: "Loading..."}
									<br />
								</tbody>
							</table>
						</div>
					</section>
				</div>
			</div>
		</>
	);
};
