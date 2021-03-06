import React from "react";
import { Link } from "react-router-dom";
import Charlie from "../../img/charlie.jpg";

export const Profile = () => {
	return (
		<div className="flex-shrink-0">
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
					<button className="button is-primary ">Add</button>
				</div>
			</div>
		</div>
	);
};
