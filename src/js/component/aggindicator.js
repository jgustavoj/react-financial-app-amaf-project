import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

const finnhub = require("finnhub");
const api_key = finnhub.ApiClient.instance.authentications["api_key"];
api_key.apiKey = "c0vsqsv48v6t383lq1kg";
const finnhubClient = new finnhub.DefaultApi();

export const AggIndicator = props => {
	const [getnews, setGetNews] = useState([]);

	useEffect(() => {
		finnhubClient.aggregateIndicator(`${props.stocksymbol}`, "M", (error, data, response) => {
			console.log(data);
		});
	}, []);
	return (
		<>
			<div>
				<p>{props.name}</p>
			</div>
		</>
	);
};

AggIndicator.propTypes = {
	name: PropTypes.object
};
