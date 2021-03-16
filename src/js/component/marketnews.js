import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from "react-router-dom";
const finnhub = require("finnhub");

const api_key = finnhub.ApiClient.instance.authentications["api_key"];
api_key.apiKey = "c0vsqsv48v6t383lq1kg";
const finnhubClient = new finnhub.DefaultApi();

export const MarketNews = () => {
	const [getnews, setGetNews] = useState([]);

	useEffect(() => {
		finnhubClient.generalNews("business", {}, (error, data, response) => {
			setGetNews(data);
			console.log(data[0]);
		});
	}, []);
	return (
		<div className="columns">
			{getnews.map((news, index) => {
				if (index < 9) {
					return (
						<div className="column" key={index}>
							<article className="media">
								<figure className="media-left">
									<p className="image is-64x64">
										<img src={news.image} />
									</p>
								</figure>
								<div className="media-content">
									<div className="content">
										<p>
											<strong>{news.headline}</strong>
											<br />
											{news.summary}
										</p>
									</div>
								</div>
							</article>
						</div>
					);
				}
			})}
		</div>
	);
};
