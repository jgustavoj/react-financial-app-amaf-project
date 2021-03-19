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

	// let result = getNews.filter(article => article.category == "business");
	// let count = 0;
	// let firstSix = result.filter(function(item) {
	// 	if (count <= 6 && item > 0) {
	// 		count++;
	// 		return true;
	// 	}
	// 	return false;
	// });
	// console.log("$$", firstSix);

	// return <></>;

	//     const arr = [1,0,2,0,3,0,4,5,6,7,8,9,10,11,12,13,14];
	// const filtered = arr.filter(function(item) {
	//   if (this.count < 10 && item > 0) {
	//     this.count++;
	//     return true;
	//   }
	//   return false;
	// }, {count: 0});

	// console.log(filtered);
	const result = getNews.filter(article => article.category == "business");
	console.log("$$", result);
	return (
		<>
			<div className="row">
				{result.map((news, index) => {
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
				})}
			</div>
		</>
	);
};

//return <div className="rows">{getNews != null ? <IterrateNews /> : "Loading..."}</div>;
