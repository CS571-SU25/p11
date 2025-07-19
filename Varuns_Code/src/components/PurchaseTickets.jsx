import React from 'react';
import { Container, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function PurchaseTickets() {
	return (
		<Container className="mt-4">
			<Card>
				<Card.Body>
					<Card.Title>Purchase Tickets</Card.Title>
					<Card.Text>
						Ticket purchasing details will be announced soon. Please
						check with your school administration for updates.
					</Card.Text>
				</Card.Body>
			</Card>
		</Container>
	);
}

export default PurchaseTickets;
