import React from "react";
import { Link } from "react-router-dom";

export const Profile = () => {
	return (
		<div className="box has-text-centered has-background-white">
			<div>
				<div className="flex-shrink-0">
					<a href="#" className="image is-64x64 m-auto">
						<img alt="profil" src="/images/person/1.jpg" className="is-rounded" />
					</a>
				</div>
				<div className="mb-4">
					<p className="has-text-grey-dark">Charlie</p>
					<p className="has-text-grey-dark-light is-size-7">CTO</p>
				</div>
				<button className="button is-primary ">Add</button>
			</div>
		</div>
	);
};
