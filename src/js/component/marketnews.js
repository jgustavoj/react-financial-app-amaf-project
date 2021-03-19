import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from "react-router-dom";
const finnhub = require("finnhub");

const api_key = finnhub.ApiClient.instance.authentications["api_key"];
api_key.apiKey = "c0vsqsv48v6t383lq1kg";
const finnhubClient = new finnhub.DefaultApi();

export const MarketNews = () => {
	const [getNews, setGetNews] = useState([]);
	useEffect(() => {
		finnhubClient.generalNews("business", {}, (error, data, response) => {
			setGetNews(response.body);
			console.log(response.body);
		});
	}, []);
	const result = getNews.filter(article => article.category == "business");
	return (
		<>
			<div className="row">
				{result.map((news, index) => {
					if (index < 5) {
						return (
							<article className="media pb-2" key={index}>
								<figure className="media-left">
									<p className="image is-32x32">
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
						);
					}
				})}
			</div>
		</>
	);
};

//return <div className="rows">{getNews != null ? <IterrateNews /> : "Loading..."}</div>;
