import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from "react-router-dom";
import ReactApexChart from "react-apexcharts";
import useFetch from "react-fetch-hook";

export const CandleStick = () => {
	// export function CandleStick() {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [indicators, setIndicators] = useState([]);

	useEffect(() => {
		fetch(`https://fcsapi.com/api-v3/stock/history?symbol=IBM&period=month&access_key=BVP3JRqpRDGZ8XidytzlHOWE`)
			.then(resp => {
				if (!resp.ok) {
					throw new Error(resp.statusText);
				}
				return resp.json();
			})
			.then(resp => {
				setData(resp);
				console.log(resp);
				return true;
			})
			.catch(err => {
				console.error(err);
				setError(err);
				return false;
			})
			.finally(() => {
				setLoading(false);
			});
	}, []);

	// const { isLoading, error, data } = useFetch(
	// 	"https://fcsapi.com/api-v3/stock/history?symbol=IBM&period=month&access_key=BVP3JRqpRDGZ8XidytzlHOWE"
	// );

	if (loading) return "Loading...";
	if (error) return "Error!";

	// // setIndicators(data);

	// console.log(indicators);

	const dataindicator = {
		series: [
			{
				data: [
					{
						x: new Date(1538778600000),
						y: [6629.81, 6650.5, 6623.04, 6633.33]
					}
				]
			}
		],
		options: {
			chart: {
				type: "candlestick",
				height: 350
			},
			title: {
				text: "CandleStick Chart",
				align: "left"
			},
			xaxis: {
				type: "datetime"
			},
			yaxis: {
				tooltip: {
					enabled: true
				}
			}
		}
	};

	return (
		<>
			<ReactApexChart
				options={dataindicator.options}
				series={dataindicator.series}
				type="candlestick"
				height={350}
			/>
		</>
	);
};
