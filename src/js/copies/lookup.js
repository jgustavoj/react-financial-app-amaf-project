// import React, { useEffect, useState } from "react";
// import { BrowserRouter as Router, Switch, Route, Link, NavLink } from "react-router-dom";
// import PropTypes from "prop-types";

// function Lookup(props) {
// 	return <p>{props.data.metrics}</p>;
// }

// Lookup.propTypes = {
// 	params: PropTypes.object,
// 	data: PropTypes.object
// };

// 	const twitterSentiment = () => {
// 		fetch(`https://financial-twitter-sentiment.p.rapidapi.com/api/fin-twitter/stocks/sentiment?stocks=${symbol}`, {
// 			method: "GET",
// 			headers: {
// 				"x-rapidapi-key": "551ca65e98msh1d7d3cb05563a11p15137bjsn0d06cf26fc37",
// 				"x-rapidapi-host": "financial-twitter-sentiment.p.rapidapi.com"
// 			}
// 		})
// 			.then(response => {
// 				console.log(response);
// 			})
// 			.catch(err => {
// 				console.error(err);
// 			});
//     };
    
//     	fetch("https://fear-and-greed-index.p.rapidapi.com/v1/fgi")
// 		.then(response => {
// 			console.log(response);
// 		})
// 		.catch(err => {
// 			console.error(err);
// 		});
