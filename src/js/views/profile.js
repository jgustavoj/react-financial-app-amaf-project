import React from "react";
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from "react-router-dom";
import { NavbarLeft } from "../component/navbarleft";
import Charlie from "../../img/charlie.jpg";
// import Toggle from "react-toggle";
// import { GiReceiveMoney } from "react-icons/go";

export const Profile = () => {
	return (
		<>
			<div className="columns is-multiline">
				<div className="column is-2-tablet">
					<NavbarLeft />
				</div>
				<div className="column is-10-tablet">
					<div className="container is-fluid pr-5">
						<div className="flex-shrink-0 pt-5">
							<div className="box has-text-centered has-background-white">
								<div>
									<div className="flex-shrink-0">
										<div className="profile-image">
											<a href="#" className="image is-64x64 m-auto">
												<img alt="profil" src={Charlie} className="is-rounded" />
											</a>
										</div>
									</div>
									<div className="mb-4">
										<p className="has-text-grey-dark">Charlie</p>
										<p className="has-text-grey-dark-light is-size-7">CTO</p>
									</div>
									<button className="button is-info">Add</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
