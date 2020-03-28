import React from "react";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import CardGroup from "react-bootstrap/CardGroup";
import Button from "react-bootstrap/Button";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function CardTitle() {
	return (
		<CardDeck>
			<Card>
				<Card.Img variant="top" src="holder.js/100px160" />
				<Card.Body>
					<Card.Title>Card title</Card.Title>
					<Card.Text>
						This is a wider card with supporting text below as a
						natural lead-in to additional content. This content is a
						little bit longer.
					</Card.Text>
				</Card.Body>
				<Card.Footer>
					<Button variant="primary">Find Out More!</Button>
				</Card.Footer>
			</Card>
			<Card>
				<Card.Img variant="top" src="holder.js/100px160" />
				<Card.Body>
					<Card.Title>Card title</Card.Title>
					<Card.Text>
						This card has supporting text below as a natural lead-in
						to additional content.{" "}
					</Card.Text>
				</Card.Body>
				<Card.Footer>
					<Button variant="primary">Find Out More!</Button>
				</Card.Footer>
			</Card>
			<Card>
				<Card.Img variant="top" src="holder.js/100px160" />
				<Card.Body>
					<Card.Title>Card title</Card.Title>
					<Card.Text>
						This is a wider card with supporting text below as a
						natural lead-in to additional content. This card has
						even longer content than the first to show that equal
						height action.
					</Card.Text>
				</Card.Body>
				<Card.Footer>
					<Button variant="primary">Find Out More!</Button>
				</Card.Footer>
			</Card>
			<Card>
				<Card.Img variant="top" src="holder.js/100px160" />
				<Card.Body>
					<Card.Title>Card title</Card.Title>
					<Card.Text>
						This is a wider card with supporting text below as a
						natural lead-in to additional content. This card has
						even longer content than the first to show that equal
						height action.
					</Card.Text>
				</Card.Body>
				<Card.Footer>
					<Button variant="primary">Find Out More!</Button>
				</Card.Footer>
			</Card>
		</CardDeck>
	);
}
