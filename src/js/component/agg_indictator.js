import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, useParams, Switch, Route, Link, NavLink } from "react-router-dom";
import PropTypes from "prop-types";

const finnhub = require("finnhub");
const api_key = finnhub.ApiClient.instance.authentications["api_key"];
api_key.apiKey = "c0vsqsv48v6t383lq1kg";
const finnhubClient = new finnhub.DefaultApi();

export function AggIndictator() {
	const [getnews, setGetNews] = useState([]);

	// useEffect(() => {
	// 	finnhubClient.aggregateIndicator(`${props.stocksymbol}`, "M", (error, data, response) => {
	// 		console.log(data);
	// 	});
	// }, []);
	return (
		<div>
			<p>{this.props.name}</p>
		</div>
	);
}

AggIndictator.propTypes = {
	name: PropTypes.object
};
