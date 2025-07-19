import React from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styles/NavigationBar.css';
import footballBanner from '../assets/football.jpg';

function NavigationBar() {
	return (
		<>
			<Navbar bg="dark" variant="dark" expand="lg">
				<Container>
					<Navbar.Brand href="#/">
						Fund-Raising for SEDOL Foundation
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="me-auto">
							<Nav.Link as={Link} to="/">
								Home
							</Nav.Link>
							<Nav.Link as={Link} to="/purchase-tickets">
								Purchase Tickets
							</Nav.Link>
							<Nav.Link as={Link} to="/purchase-food">
								Purchase Food
							</Nav.Link>
							<Nav.Link as={Link} to="/volunteer">
								Volunteer
							</Nav.Link>
							<Nav.Link as={Link} to="/volunteer-dashboard">
								Volunteer Dashboard
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
			<div className="banner-accessible text-center p-2">
				Power and Fame High Schools Join Hands for our Community!
			</div>
			<footer>
				<div
					style={{
						overflow: 'hidden',
						maxHeight: '250px',
						marginTop: '20px',
						borderTop: '4px solid #003366',
					}}
				>
					<img
						src={footballBanner}
						alt="Football game closing banner"
						className="w-100"
						style={{ objectFit: 'cover', borderRadius: '8px' }}
					/>
					<div
						style={{
							position: 'absolute',
							bottom: '10px',
							left: '10px',
							color: 'white',
							background: 'rgba(0,0,0,0.5)',
							padding: '5px 10px',
							borderRadius: '4px',
						}}
					>
						Thank you for supporting our community fundraiser!
					</div>
				</div>
			</footer>
		</>
	);
}

export default NavigationBar;
