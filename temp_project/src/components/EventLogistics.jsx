import React from 'react';
import { Container, Button } from 'react-bootstrap';

function EventLogistics() {
	return (
		<Container className="mt-4 p-3 bg-white rounded shadow border border-success">
			<h3 className="text-success mb-3">Event Logistics</h3>
			<p>
				<strong>Maps & Directions:</strong> Please use your favorite GPS
				app to navigate to Power High School Stadium, 123 Power Lane,
				Power, IL 60060.
			</p>
			<a
				href="https://www.google.com/maps?q=Power+High+School+Stadium,+123+Power+Lane,+Power,+IL+60060"
				target="_blank"
				rel="noopener noreferrer"
				className="btn btn-primary mb-3"
			>
				Open Maps and Directions
			</a>
			<p>
				<strong>Parking Instructions:</strong> Parking is free in Lot A
				and Lot B. Accessible parking is available near the main gate.
			</p>
			<p>
				<strong>Public Transportation:</strong> Metra North line stops
				two blocks away; bus route 35 also serves the stadium entrance.
			</p>
		</Container>
	);
}

export default EventLogistics;
