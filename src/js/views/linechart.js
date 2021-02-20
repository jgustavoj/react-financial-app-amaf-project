import React from "react";
import ReactFrappeChart from "react-frappe-charts";

export const LineChart = () => {
	return (
		<>
			<section className="section">
				<div className="container has-text-centered">
					<div className="columns is-centered">
						<div className="column is-7 is-6-desktop">
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
						</div>
					</div>
				</div>
			</section>
		</>
	);
};
