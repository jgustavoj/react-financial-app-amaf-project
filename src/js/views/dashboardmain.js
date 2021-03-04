import React from "react";
import { Link } from "react-router-dom";

export const DashboardMain = () => {
	return (
		<>
			<div className="container is-fluid pr-5">
				<section className="section">
					<div className="container">
						<div className="columns is-desktop">
							<div className="column is-4-desktop">
								{/* <section className="section">
									<table className="table">
										<thead>
											<tr>
												<th>
													<abbr title="Ticker">Ticker</abbr>
												</th>
												<th>Team</th>
												<th>
													<abbr title="Changes">Changes</abbr>
												</th>
												<th>
													<abbr title="Price">Price</abbr>
												</th>
												<th>
													<abbr title="% Change">% Change</abbr>
												</th>
												<th>
													<abbr title="Company Name">Company Name</abbr>
												</th>
											</tr>
										</thead>
										<tfoot>
											<tr>
												<th>
													<abbr title="Ticker">Ticker</abbr>
												</th>
												<th>Team</th>
												<th>
													<abbr title="Changes">Changes</abbr>
												</th>
												<th>
													<abbr title="Price">Price</abbr>
												</th>
												<th>
													<abbr title="% Change">% Change</abbr>
												</th>
												<th>
													<abbr title="Company Name">Company Name</abbr>
												</th>
											</tr>
										</tfoot>
										<tbody>
											<tr>
												<th>1</th>
												<td>
													<a
														href="https://en.wikipedia.org/wiki/Leicester_City_F.C."
														title="Leicester City F.C.">
														Leicester City
													</a>{" "}
													<strong>(C)</strong>
												</td>
												<td>38</td>
												<td>23</td>
												<td>12</td>
												<td>3</td>
												<td>68</td>
												<td>36</td>
												<td>+32</td>
												<td>81</td>
												<td>
													Qualification for the{" "}
													<a
														href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Champions_League#Group_stage"
														title="2016–17 UEFA Champions League">
														Champions League group stage
													</a>
												</td>
											</tr>
											<tr>
												<th>2</th>
												<td>
													<a
														href="https://en.wikipedia.org/wiki/Arsenal_F.C."
														title="Arsenal F.C.">
														Arsenal
													</a>
												</td>
												<td>38</td>
												<td>20</td>
												<td>11</td>
												<td>7</td>
												<td>65</td>
												<td>36</td>
												<td>+29</td>
												<td>71</td>
												<td>
													Qualification for the{" "}
													<a
														href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Champions_League#Group_stage"
														title="2016–17 UEFA Champions League">
														Champions League group stage
													</a>
												</td>
											</tr>
											<tr>
												<th>3</th>
												<td>
													<a
														href="https://en.wikipedia.org/wiki/Tottenham_Hotspur_F.C."
														title="Tottenham Hotspur F.C.">
														Tottenham Hotspur
													</a>
												</td>
												<td>38</td>
												<td>19</td>
												<td>13</td>
												<td>6</td>
												<td>69</td>
												<td>35</td>
												<td>+34</td>
												<td>70</td>
												<td>
													Qualification for the{" "}
													<a
														href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Champions_League#Group_stage"
														title="2016–17 UEFA Champions League">
														Champions League group stage
													</a>
												</td>
											</tr>
											<tr className="is-selected">
												<th>4</th>
												<td>
													<a
														href="https://en.wikipedia.org/wiki/Manchester_City_F.C."
														title="Manchester City F.C.">
														Manchester City
													</a>
												</td>
												<td>38</td>
												<td>19</td>
												<td>9</td>
												<td>10</td>
												<td>71</td>
												<td>41</td>
												<td>+30</td>
												<td>66</td>
												<td>
													Qualification for the{" "}
													<a
														href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Champions_League#Play-off_round"
														title="2016–17 UEFA Champions League">
														Champions League play-off round
													</a>
												</td>
											</tr>
											<tr>
												<th>5</th>
												<td>
													<a
														href="https://en.wikipedia.org/wiki/Manchester_United_F.C."
														title="Manchester United F.C.">
														Manchester United
													</a>
												</td>
												<td>38</td>
												<td>19</td>
												<td>9</td>
												<td>10</td>
												<td>49</td>
												<td>35</td>
												<td>+14</td>
												<td>66</td>
												<td>
													Qualification for the{" "}
													<a
														href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Europa_League#Group_stage"
														title="2016–17 UEFA Europa League">
														Europa League group stage
													</a>
												</td>
											</tr>
											<tr>
												<th>6</th>
												<td>
													<a
														href="https://en.wikipedia.org/wiki/Southampton_F.C."
														title="Southampton F.C.">
														Southampton
													</a>
												</td>
												<td>38</td>
												<td>18</td>
												<td>9</td>
												<td>11</td>
												<td>59</td>
												<td>41</td>
												<td>+18</td>
												<td>63</td>
												<td>
													Qualification for the{" "}
													<a
														href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Europa_League#Group_stage"
														title="2016–17 UEFA Europa League">
														Europa League group stage
													</a>
												</td>
											</tr>
											<tr>
												<th>7</th>
												<td>
													<a
														href="https://en.wikipedia.org/wiki/West_Ham_United_F.C."
														title="West Ham United F.C.">
														West Ham United
													</a>
												</td>
												<td>38</td>
												<td>16</td>
												<td>14</td>
												<td>8</td>
												<td>65</td>
												<td>51</td>
												<td>+14</td>
												<td>62</td>
												<td>
													Qualification for the{" "}
													<a
														href="https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Europa_League#Third_qualifying_round"
														title="2016–17 UEFA Europa League">
														Europa League third qualifying round
													</a>
												</td>
											</tr>
											<tr>
												<th>8</th>
												<td>
													<a
														href="https://en.wikipedia.org/wiki/Liverpool_F.C."
														title="Liverpool F.C.">
														Liverpool
													</a>
												</td>
												<td>38</td>
												<td>16</td>
												<td>12</td>
												<td>10</td>
												<td>63</td>
												<td>50</td>
												<td>+13</td>
												<td>60</td>
												<td />
											</tr>
											<tr>
												<th>9</th>
												<td>
													<a
														href="https://en.wikipedia.org/wiki/Stoke_City_F.C."
														title="Stoke City F.C.">
														Stoke City
													</a>
												</td>
												<td>38</td>
												<td>14</td>
												<td>9</td>
												<td>15</td>
												<td>41</td>
												<td>55</td>
												<td>−14</td>
												<td>51</td>
												<td />
											</tr>
											<tr>
												<th>10</th>
												<td>
													<a
														href="https://en.wikipedia.org/wiki/Chelsea_F.C."
														title="Chelsea F.C.">
														Chelsea
													</a>
												</td>
												<td>38</td>
												<td>12</td>
												<td>14</td>
												<td>12</td>
												<td>59</td>
												<td>53</td>
												<td>+6</td>
												<td>50</td>
												<td />
											</tr>
											<tr>
												<th>11</th>
												<td>
													<a
														href="https://en.wikipedia.org/wiki/Everton_F.C."
														title="Everton F.C.">
														Everton
													</a>
												</td>
												<td>38</td>
												<td>11</td>
												<td>14</td>
												<td>13</td>
												<td>59</td>
												<td>55</td>
												<td>+4</td>
												<td>47</td>
												<td />
											</tr>
											<tr>
												<th>12</th>
												<td>
													<a
														href="https://en.wikipedia.org/wiki/Swansea_City_A.F.C."
														title="Swansea City A.F.C.">
														Swansea City
													</a>
												</td>
												<td>38</td>
												<td>12</td>
												<td>11</td>
												<td>15</td>
												<td>42</td>
												<td>52</td>
												<td>−10</td>
												<td>47</td>
												<td />
											</tr>
											<tr>
												<th>13</th>
												<td>
													<a
														href="https://en.wikipedia.org/wiki/Watford_F.C."
														title="Watford F.C.">
														Watford
													</a>
												</td>
												<td>38</td>
												<td>12</td>
												<td>9</td>
												<td>17</td>
												<td>40</td>
												<td>50</td>
												<td>−10</td>
												<td>45</td>
												<td />
											</tr>
											<tr>
												<th>14</th>
												<td>
													<a
														href="https://en.wikipedia.org/wiki/West_Bromwich_Albion_F.C."
														title="West Bromwich Albion F.C.">
														West Bromwich Albion
													</a>
												</td>
												<td>38</td>
												<td>10</td>
												<td>13</td>
												<td>15</td>
												<td>34</td>
												<td>48</td>
												<td>−14</td>
												<td>43</td>
												<td />
											</tr>
											<tr>
												<th>15</th>
												<td>
													<a
														href="https://en.wikipedia.org/wiki/Crystal_Palace_F.C."
														title="Crystal Palace F.C.">
														Crystal Palace
													</a>
												</td>
												<td>38</td>
												<td>11</td>
												<td>9</td>
												<td>18</td>
												<td>39</td>
												<td>51</td>
												<td>−12</td>
												<td>42</td>
												<td />
											</tr>
											<tr>
												<th>16</th>
												<td>
													<a
														href="https://en.wikipedia.org/wiki/A.F.C._Bournemouth"
														title="A.F.C. Bournemouth">
														AFC Bournemouth
													</a>
												</td>
												<td>38</td>
												<td>11</td>
												<td>9</td>
												<td>18</td>
												<td>45</td>
												<td>67</td>
												<td>−22</td>
												<td>42</td>
												<td />
											</tr>
											<tr>
												<th>17</th>
												<td>
													<a
														href="https://en.wikipedia.org/wiki/Sunderland_A.F.C."
														title="Sunderland A.F.C.">
														Sunderland
													</a>
												</td>
												<td>38</td>
												<td>9</td>
												<td>12</td>
												<td>17</td>
												<td>48</td>
												<td>62</td>
												<td>−14</td>
												<td>39</td>
												<td />
											</tr>
											<tr>
												<th>18</th>
												<td>
													<a
														href="https://en.wikipedia.org/wiki/Newcastle_United_F.C."
														title="Newcastle United F.C.">
														Newcastle United
													</a>{" "}
													<strong>(R)</strong>
												</td>
												<td>38</td>
												<td>9</td>
												<td>10</td>
												<td>19</td>
												<td>44</td>
												<td>65</td>
												<td>−21</td>
												<td>37</td>
												<td>
													Relegation to the{" "}
													<a
														href="https://en.wikipedia.org/wiki/2016%E2%80%9317_Football_League_Championship"
														title="2016–17 Football League Championship">
														Football League Championship
													</a>
												</td>
											</tr>
											<tr>
												<th>19</th>
												<td>
													<a
														href="https://en.wikipedia.org/wiki/Norwich_City_F.C."
														title="Norwich City F.C.">
														Norwich City
													</a>{" "}
													<strong>(R)</strong>
												</td>
												<td>38</td>
												<td>9</td>
												<td>7</td>
												<td>22</td>
												<td>39</td>
												<td>67</td>
												<td>−28</td>
												<td>34</td>
												<td>
													Relegation to the{" "}
													<a
														href="https://en.wikipedia.org/wiki/2016%E2%80%9317_Football_League_Championship"
														title="2016–17 Football League Championship">
														Football League Championship
													</a>
												</td>{" "}
											</tr>
										</tbody>
									</table>
								</section>{" "} */}
								<h2 className="title">Welcome Piper</h2>
								<p className="block">You have 2 messages and 3 notifications.</p>
								<table className="table">
									<tbody>
										<tr>
											<td>1</td>
											<td>Read developers CV !!!</td>
											<td>10:00am</td>
										</tr>
										<tr>
											<td>2</td>
											<td>Meeting with Russ Hanneman</td>
											<td>10:15am</td>
										</tr>
										<tr>
											<td>3</td>
											<td>Verify current Weismann score</td>
											<td>11:00am</td>
										</tr>
										<tr>
											<td>4</td>
											<td>Call back to Gavin Belson</td>
											<td>11:38am</td>
										</tr>
										<tr>
											<td>5</td>
											<td>Richard call me! / Gavin</td>
											<td>11:48am</td>
										</tr>
									</tbody>
								</table>
							</div>
							<div className="column is-5-desktop">
								<div className="block">
									<img src="https://bootstrapshuffle.com/placeholder/pictures/bg_16-9.svg" alt="" />
								</div>
								<div className="columns is-mobile">
									<div className="column">
										<h3 className="title is-5">$ 108,200</h3>
										<p className="subtitle is-6">Sales report</p>
									</div>
									<div className="column">
										<h3 className="title is-5">$ 120,521</h3>
										<p className="subtitle is-6">Cost of operation</p>
									</div>
									<div className="column">
										<h3 className="title is-5">- $ 12,321</h3>
										<p className="subtitle is-6">Net income</p>
									</div>
								</div>
							</div>
							<div className="column is-3-desktop">
								<h3 className="title is-4">PiperNet progress</h3>
								<p className="block">{`You're asigned to two projects`}</p>
								<div className="columns has-text-centered">
									<div className="column">
										<div className="level">
											<div className="level-item">
												<a href="#">
													<figure className="image is-96x96">
														<img
															className="is-rounded"
															src="https://bootstrapshuffle.com/placeholder/pictures/bg_circle.svg"
															alt=""
														/>
													</figure>
												</a>
											</div>
										</div>
										<div className="block">
											<a href="#">Infrastructure</a>
										</div>
									</div>
									<div className="column">
										<div className="level">
											<div className="level-item">
												<a href="#">
													<figure className="image is-96x96">
														<img
															className="is-rounded"
															src="https://bootstrapshuffle.com/placeholder/pictures/bg_circle.svg"
															alt=""
														/>
													</figure>
												</a>
											</div>
										</div>
										<div className="block">
											<a href="#">Compression</a>
										</div>
									</div>
								</div>
								<p>
									{`
                                Decentralized, secure, private. The Pied Piper Net is on it's way to revolutionize every
                                smartphone, PC, and smart-fridge near you.
                                `}
								</p>
							</div>
						</div>
					</div>
				</section>
				<section className="section">
					<div className="container">
						<div className="columns is-multiline">
							<div className="column is-6-tablet is-3-desktop">
								<div className="box">
									<div className="media">
										<div className="media-left">
											<figure className="image is-48x48">
												<img
													src="https://bootstrapshuffle.com/placeholder/icons/folder-o.svg"
													alt=""
												/>
											</figure>
										</div>
										<div className="media-content has-text-right">
											<h3 className="title is-1 has-text-info">2</h3>
										</div>
									</div>
									<h4 className="title">Projects</h4>
									<progress className="progress is-info" role="progressbar" value="75" max="100" />
								</div>
							</div>
							<div className="column is-6-tablet is-3-desktop">
								<div className="box">
									<div className="media">
										<div className="media-left">
											<figure className="image is-48x48">
												<img
													src="https://bootstrapshuffle.com/placeholder/icons/users.svg"
													alt=""
												/>
											</figure>
										</div>
										<div className="media-content has-text-right">
											<h3 className="title is-1 has-text-danger">117</h3>
										</div>
									</div>
									<h4 className="title">Clients</h4>
									<progress className="progress is-danger" role="progressbar" value="75" max="100" />
								</div>
							</div>
							<div className="column is-6-tablet is-3-desktop">
								<div className="box">
									<div className="media">
										<div className="media-left">
											<figure className="image is-48x48">
												<img
													src="https://bootstrapshuffle.com/placeholder/icons/file-text-o.svg"
													alt=""
												/>
											</figure>
										</div>
										<div className="media-content has-text-right">
											<h3 className="title is-1 has-text-success">248</h3>
										</div>
									</div>
									<h4 className="title">Invoices</h4>
									<progress className="progress is-success" role="progressbar" value="75" max="100" />
								</div>
							</div>
							<div className="column is-6-tablet is-3-desktop">
								<div className="box">
									<div className="media">
										<div className="media-left">
											<figure className="image is-48x48">
												<img
													src="https://bootstrapshuffle.com/placeholder/icons/calendar-o.svg"
													alt=""
												/>
											</figure>
										</div>
										<div className="media-content has-text-right">
											<h3 className="title is-1 has-text-info">14</h3>
										</div>
									</div>
									<h4 className="title">Forecast</h4>
									<progress className="progress is-info" role="progressbar" value="75" max="100" />
								</div>
							</div>
						</div>
					</div>
				</section>
				<section className="section">
					<div className="container">
						<div className="columns is-multiline">
							<div className="column is-6-tablet is-3-desktop">
								<div className="card">
									<div className="card-header">
										<h3 className="card-header-title is-inline">
											<span>Income</span>
											<span className="tag is-success is-pulled-right">Monthly</span>
										</h3>
									</div>
									<div className="card-content">
										<h3 className="title">108,200</h3>
										<p>Total income</p>
										<p className="mt-2">
											<img
												src="https://bootstrapshuffle.com/placeholder/icons/level-up.svg"
												alt=""
												width="24"
											/>
											<span className="ml-2">82%</span>
										</p>
									</div>
								</div>
							</div>
							<div className="column is-6-tablet is-3-desktop">
								<div className="card">
									<div className="card-header">
										<h3 className="card-header-title is-inline">
											<span>Orders</span>
											<span className="tag is-success is-pulled-right">Monthly</span>
										</h3>
									</div>
									<div className="card-content">
										<h3 className="title">128,430</h3>
										<p>New orders</p>
										<p className="mt-2">
											<img
												src="https://bootstrapshuffle.com/placeholder/icons/level-up.svg"
												alt=""
												width="24"
											/>
											<span className="ml-2">32%</span>
										</p>
									</div>
								</div>
							</div>
							<div className="column is-6-tablet is-3-desktop">
								<div className="card">
									<div className="card-header">
										<h3 className="card-header-title is-inline">
											<span>Visits</span>
											<span className="tag is-success is-pulled-right">Today</span>
										</h3>
									</div>
									<div className="card-content">
										<h3 className="title">81,248</h3>
										<p>New visits</p>
										<p className="mt-2">
											<img
												src="https://bootstrapshuffle.com/placeholder/icons/level-up.svg"
												alt=""
												width="24"
											/>
											<span className="ml-2">24%</span>
										</p>
									</div>
								</div>
							</div>
							<div className="column is-6-tablet is-3-desktop">
								<div className="card">
									<div className="card-header">
										<h3 className="card-header-title is-inline">
											<span>User activity</span>
											<span className="tag is-danger is-pulled-right">Today</span>
										</h3>
									</div>
									<div className="card-content">
										<h3 className="title">2,341</h3>
										<p>Used app more than once</p>
										<p className="mt-2">
											<img
												src="https://bootstrapshuffle.com/placeholder/icons/level-down.svg"
												alt=""
												width="24"
											/>
											<span className="ml-2">42%</span>
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		</>
	);
};
