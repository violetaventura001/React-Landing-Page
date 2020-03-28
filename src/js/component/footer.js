import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Footer() {
	return (
		<Footer color="dark" className="font-small pt-4 mt-4">
			<Container fluid className="text-center text-md-left" />
			<div className="footer-copyright text-center py-3">
				<Container fluid>
					&copy; {new Date().getFullYear()} Copyright:{" "}
					<a href="https://www.mdbootstrap.com"> MDBootstrap.com </a>
				</Container>
			</div>
		</Footer>
	);
}
