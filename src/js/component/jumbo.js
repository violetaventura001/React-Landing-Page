import React from "react";
import Button from "react-bootstrap/Button";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Jumbo() {
	return (
		<Jumbotron fluid className="mt-5">
			<Container>
				<h1>Hola, Mi Gente!</h1>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit.
					Ipsa, ipsam, eligendi, in quo sunt possimus non incidunt
					odit vero aliquid similique quaerat nam nobis illo
					aspernatur vitae fugiat numquam repellat.
				</p>
				<p>
					<Button variant="primary">Learn more</Button>
				</p>
			</Container>
		</Jumbotron>
	);
}
