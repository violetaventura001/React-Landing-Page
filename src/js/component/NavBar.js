import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export default function NavBar() {
	return (
		<Navbar bg="dark" expand="lg" variant="light">
			<Navbar.Brand href="#home">Start-Bootstrap</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="mr-auto" />
				<Nav>
					<Nav.Link href="#home">Home</Nav.Link>
					<Nav.Link href="#About">About</Nav.Link>
					<Nav.Link href="#Services">Services</Nav.Link>
					<Nav.Link href="#Contact">Contact</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
}
