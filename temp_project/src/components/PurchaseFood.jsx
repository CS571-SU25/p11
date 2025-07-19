import React, { useState } from 'react';
import { Container, Card, Form, Row, Col, Button } from 'react-bootstrap';
import Checkout from './Checkout';
import jsPDF from 'jspdf';
import pizzaImage from '../assets/pizza.jpg';
import burgerImage from '../assets/burger.jpg';
import sodaImage from '../assets/soda.jpg';
import '../styles/PurchaseFood.css';

function PurchaseFood() {
	const [order, setOrder] = useState({ burger: 0, pizza: 0, soda: 0 });
	const [canDownload, setCanDownload] = useState(false);
	const prices = { burger: 5, pizza: 7, soda: 2 };
	const total = Object.keys(order).reduce(
		(sum, key) => sum + order[key] * prices[key],
		0
	);

	const handleChange = (item, value) =>
		setOrder({ ...order, [item]: parseInt(value) || 0 });

	const handleDownload = () => {
		if (!canDownload) {
			alert(
				'Please complete payment first before downloading your ticket.'
			);
			return;
		}
		const doc = new jsPDF();
		const purchaseDate = new Date().toLocaleDateString();
		doc.setFontSize(18);
		doc.setTextColor(0, 102, 51);
		doc.text(
			'SEDOL Fundraiser on Power and Fame Homecoming Football Day!',
			10,
			20
		);
		doc.setDrawColor(0);
		doc.line(10, 25, 200, 25);
		doc.setFontSize(12);
		doc.setTextColor(0, 0, 0);
		doc.text(
			'This ticket shows that the bearer has purchased the following items on the Game Day:',
			10,
			40
		);
		doc.text(`- Burgers: ${order.burger}`, 10, 50);
		doc.text(`- Pizzas: ${order.pizza}`, 10, 60);
		doc.text(`- Sodas: ${order.soda}`, 10, 70);
		doc.text(`Total Paid: $${total}`, 10, 80);
		doc.text(`Purchase Date: ${purchaseDate}`, 10, 90);
		doc.save('order-ticket.pdf');
	};

	return (
		<Container className="mt-4">
			<Card>
				<Card.Body>
					<h2>Purchase Food</h2>
					<Form>
						<Form.Group
							as={Row}
							className="mb-3 align-items-center"
						>
							<Form.Label column sm={2}>
								Pizza ($7):
							</Form.Label>
							<Col sm={2}>
								<Form.Control
									type="number"
									min="0"
									value={order.pizza}
									onChange={(e) =>
										handleChange('pizza', e.target.value)
									}
								/>
							</Col>
							<Col sm={2}>
								<img
									src={pizzaImage}
									alt="Cheese pizza with tomato sauce and cheese topping"
									className="food-thumbnail"
								/>
							</Col>
						</Form.Group>
						<Form.Group
							as={Row}
							className="mb-3 align-items-center"
						>
							<Form.Label column sm={2}>
								Burger ($5):
							</Form.Label>
							<Col sm={2}>
								<Form.Control
									type="number"
									min="0"
									value={order.burger}
									onChange={(e) =>
										handleChange('burger', e.target.value)
									}
								/>
							</Col>
							<Col sm={2}>
								<img
									src={burgerImage}
									alt="Grilled burger with lettuce and tomato"
									className="food-thumbnail"
								/>
							</Col>
						</Form.Group>
						<Form.Group
							as={Row}
							className="mb-3 align-items-center"
						>
							<Form.Label column sm={2}>
								Soda ($2):
							</Form.Label>
							<Col sm={2}>
								<Form.Control
									type="number"
									min="0"
									value={order.soda}
									onChange={(e) =>
										handleChange('soda', e.target.value)
									}
								/>
							</Col>
							<Col sm={2}>
								<img
									src={sodaImage}
									alt="Soda can of choice"
									className="food-thumbnail"
								/>
							</Col>
						</Form.Group>
					</Form>
					<h4 className="mt-3">Total: ${total}</h4>
					<Button
						variant="success"
						className="mt-3"
						onClick={handleDownload}
						disabled={!canDownload}
					>
						Download Order Ticket
					</Button>
				</Card.Body>
			</Card>
			<Checkout
				order={order}
				onPaymentSuccess={() => setCanDownload(true)}
			/>
		</Container>
	);
}

export default PurchaseFood;
