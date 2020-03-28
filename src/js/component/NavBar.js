import React from "react";
import {
	Navbar,
	Form,
	FormControl,
	Button,
	Nav,
	NavDropdown
} from "react-bootstrap";

export function NavBar() {
	return (
		<Navbar bg="dark" expand="lg" variant="dark">
			<div className="container pl-3 pr-3">
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
			</div>
		</Navbar>
	);
}
