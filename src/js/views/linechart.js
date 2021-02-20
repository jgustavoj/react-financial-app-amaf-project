import React from "react";
import ReactFrappeChart from "react-frappe-charts";

export const LineChart = () => {
	return (
		<>
			<ReactFrappeChart
				type="line"
				colors={["#f03a5f"]}
				axisOptions={{ xAxisMode: "tick", yAxisMode: "tick", xIsSeries: 0, yIsSeries: 0 }}
				height={250}
				data={{
					labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
					datasets: [{ values: [18, 40, 30, 35, 8, 52, 17, 4] }]
				}}
			/>
		</>
	);
};
