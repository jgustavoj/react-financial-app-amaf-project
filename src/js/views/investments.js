import React from "react";
import ReactFrappeChart from "react-frappe-charts";
import Chart from "react-apexcharts";

import { LineChart } from "./linechart";
import { MixedChart } from "./mixedchart";
import { CandleStick } from "./candlestick";

export const Investments = () => {
	return (
		<>
			<section className="section">
				<div className="container has-text-centered">
					<div className="columns is-centered">
						<div className="column is-6 is-5-desktop">
							<CandleStick />
							<MixedChart />
						</div>
					</div>
				</div>
			</section>
		</>
	);
};
