import React from "react";
import Chart from "react-apexcharts";

const data = {
	options: {
		chart: {
			id: "apexchart-example"
		},
		title: {
			text: "Bar Chart"
		},
		xaxis: {
			categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
		}
	},
	series: [
		{
			name: "series-1",
			data: [30, 40, 35, 50, 49, 60, 70, 91, 125]
		}
	]
};

export const MixedChart = () => {
	return (
		<>
			<Chart options={data.options} series={data.series} type="bar" width={560} height={320} />
		</>
	);
};
