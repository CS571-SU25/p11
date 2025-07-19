import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { HashRouter } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Home from './components/Home';
import PurchaseTickets from './components/PurchaseTickets';
import PurchaseFood from './components/PurchaseFood';
import Volunteer from './components/Volunteer';
import VolunteerDashboard from './components/VolunteerDashboard';
import '/styles/App.css';
import { useState } from 'react';

function App() {
	const [volunteers, setVolunteers] = useState([]);

	const handleAddVolunteer = (newVolunteer) => {
		setVolunteers([...volunteers, newVolunteer]);
	};
	return (
		<>
			<NavigationBar />
			<div className="banner">
				Fund-Raising for SEDOL Foundation on Football Homecoming Day!
			</div>

			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/purchase-tickets" element={<PurchaseTickets />} />
				<Route path="/purchase-food" element={<PurchaseFood />} />
				<Route path="/volunteer" element={<Volunteer />} />
				<Route
					path="/volunteer-dashboard"
					element={<VolunteerDashboard volunteers={volunteers} />}
				/>
			</Routes>
		</>
	);
}

export default App;
