import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export const DashboardMain = () => {
	axios
		.get("https://financialmodelingprep.com/api/v3/stock/gainers?apikey=da6240539dc1685ff601c5c2edb3ff29")
		.then(function(response) {
			// handle success
			console.log(response);
			console.log(response.data.mostGainerStock);
		})
		.catch(function(error) {
			// handle error
			console.log(error);
		})
		.then(function() {
			// always executed
		});
	return <></>;
};
