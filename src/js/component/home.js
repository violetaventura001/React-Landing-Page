import React from "react";
import { Jumbo } from "./jumbo";
import { CardTitle } from "./CardTitle";
import { Footer } from "./footer";
import { NavBar } from "./NavBar";
import { Container } from "react-bootstrap";

//create your first component
export const Home = () => {
	return (
		<div>
			<NavBar />
			<Container>
				<Jumbo />
			</Container>
			<Container>
				<CardTitle />
			</Container>
			<Footer />
		</div>
	);
};
