import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import renderEmpty from "antd/lib/config-provider/renderEmpty";

const finnhub = require("finnhub");
const api_key = finnhub.ApiClient.instance.authentications["api_key"];
api_key.apiKey = "c0vsqsv48v6t383lq1kg";
const finnhubClient = new finnhub.DefaultApi();

export const CompanySentiment = props => {
	var _ = require("lodash");
	const [getSentiment, setSentiment] = useState({});
	const [getBuzz, setBuzz] = useState({});
	const [getCompany, setCompany] = useState();

	// function analyzeADX(adx) {
	// 	var adxcalculate = parseInt(adx);
	// 	console.log(adxcalculate);

	// 	if (adxcalculate <= "25") {
	// 		//return "<i className=fas fa-exclamation-triangle>Weak Trend</i>";
	// 		return "Weak ADX Trend";
	// 	} else if (adxcalculate > "25" && adxcalculate <= "50") {
	// 		//return "<i className=fas fa-check-square>Strong Trend</i>";
	// 		return "Strong ADX Trend";
	// 	} else if (adxcalculate > "50" && adxcalculate <= "75") {
	// 		return "Very Strong ADX Trend";
	// 	} else {
	// 		return "Extremely Strong ADX Trend";
	// 	}
	// }

	useEffect(() => {
		finnhubClient.newsSentiment(`${props.name}`, (error, data, response) => {
			setSentiment(response.body.sentiment);
			setBuzz(response.body.buzz);
			setCompany(response.body.companyNewsScore);
		});
	}, []);

	function BearSentiment() {
		if (getSentiment != null) return _.round(getSentiment.bearishPercent * 100);
	}
	function BullSentiment() {
		if (getSentiment != null) return _.round(getSentiment.bullishPercent * 100);
	}
	function BuzzSentiment() {
		if (getBuzz != null) return _.round(getBuzz.buzz * 100);
	}
	function CompSentiment() {
		if (getCompany != null) return _.round(getCompany * 100);
	}

	return (
		<>
			<div>
				<p>
					<i className="fas fa-circle has-text-primary" />
					{` Current Buzz/Weekly Average:`}{" "}
					<strong className="has-text-primary">{getBuzz != null ? <BuzzSentiment /> : "Loading"}%</strong>
					<br />
					<i className="fas fa-circle has-text-danger" />
					{` Bearish Sentiment:`}{" "}
					<strong className="has-text-danger">{getSentiment != null ? <BearSentiment /> : "Loading"}%</strong>
					<br />
					<i className="fas fa-circle has-text-info" />
					{` Company Sentiment:`} <strong className="has-text-info">{_.round(getCompany * 100)}%</strong>
					<br />
					<i className="fas fa-circle has-text-success" />
					{` Bullish Sentiment:`}{" "}
					<strong className="has-text-success">
						{getSentiment != null ? <BullSentiment /> : "Loading"}%
					</strong>
					<br />
					{/* <i className="fas fa-check has-text-success" />
					&nbsp;
					{getTrend.adx != null ? `${analyzeADX(getTrend.adx)}` : "Loading..."}
					<br />
					<i className="fas fa-thumbs-up has-text-info" />
					&nbsp;
					{`${_.upperFirst(getTechAnalysis.signal)} Purchase Signal`}
					<br />
					<i className="fas fa-chart-bar has-text-danger" />
					&nbsp;
					{getTrend.trending ? "Trending Up" : "Not Trending Up"} */}
				</p>
			</div>
		</>
	);
};

CompanySentiment.propTypes = {
	name: PropTypes.object
};
