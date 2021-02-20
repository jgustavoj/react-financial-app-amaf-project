import React from "react";
import "../../styles/home.scss";

import { Header } from "../component/header";
import { Hero } from "../component/hero";
import { Howitworks } from "../component/howitworks";
import { LogIn } from "../views/login";
import { Signup } from "../views/signup";

export const Home = () => (
	<>
		<Hero />
		<Header />
		<Howitworks />
	</>
);
