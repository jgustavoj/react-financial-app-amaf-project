import React from "react";
import { Link } from "react-router-dom";
import { NavbarLeft } from "../component/navbarleft";
import { DashboardMain } from "./dashboardmain";

export const Dashboard = () => {
	return (
		<>
			<div className="columns is-multiline">
				<div className="column is-3-tablet">
					<NavbarLeft />
				</div>
				<div className="column is-9-tablet">
					<DashboardMain />
				</div>
			</div>
		</>
	);
};
