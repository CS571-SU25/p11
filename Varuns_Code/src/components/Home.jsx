import React from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '/styles/Home.css';

function Home() {
	return (
		<Container className="mt-4">
			<Card className="p-3">
				<h2>Welcome to the SEDOL Fundraiser!</h2>
				<p className="lead">
					Power and Fame High Schools are teaming up for a community
					fundraiser on Football Homecoming Day!
				</p>
				<p>
					Every dollar you contribute goes directly to the SEDOL
					Foundation — supporting physically, mentally, and
					emotionally challenged children in Lake County with
					educational opportunities that lead to fuller lives.
				</p>
				{/* <div className="d-flex justify-content-around flex-wrap mt-4">
					<Link to="/purchase-tickets">
						<Button variant="primary" size="lg" className="mb-2">
							Purchase Tickets
						</Button>
					</Link>
					<Link to="/purchase-food">
						<Button variant="success" size="lg" className="mb-2">
							Order Food
						</Button>
					</Link>
					<Link to="/volunteer">
						<Button variant="warning" size="lg" className="mb-2">
							Volunteer
						</Button>
					</Link>
					<Link to="/event-logistics">
						<Button variant="info" size="lg" className="mb-2">
							Event Logistics
						</Button>
					</Link>
				</div> */}
			</Card>
		</Container>
	);
}

export default Home;
