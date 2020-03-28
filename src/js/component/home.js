import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
// import { NavBar } from "./NavBar";
import { Jumbo } from "./jumbo";
import { CardTitle } from "./CardTitle";
import { Footer } from "./footer";
//create your first component
export const Home = () => {
	return (
		<div>
			<Jumbo />
			<CardTitle />
			<Footer />
		</div>
	);
};
