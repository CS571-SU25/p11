import React, { useState } from 'react';
import { Container, Card, Form, Button, Modal } from 'react-bootstrap';

function Checkout({ order, onPaymentSuccess }) {
	const [cardNumber, setCardNumber] = useState('');
	const [expiry, setExpiry] = useState('');
	const [cvv, setCvv] = useState('');
	const [error, setError] = useState('');
	const [emailForTicket, setEmailForTicket] = useState('');
	const [showEmailField, setShowEmailField] = useState(false);
	const [emailError, setEmailError] = useState('');
	const [showModal, setShowModal] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!/^[0-9]{15,16}$/.test(cardNumber)) {
			setError('Card number must be 15 or 16 digits, numbers only.');
			return;
		}
		if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(expiry)) {
			setError('Expiry date must be in MM/YY format.');
			return;
		}
		if (!/^[0-9]{3,4}$/.test(cvv)) {
			setError('CVV must be 3 or 4 digits.');
			return;
		}
		setError('');
		setShowModal(true);
		setShowEmailField(true);
		if (onPaymentSuccess) onPaymentSuccess();
	};

	const handleSendEmail = () => {
		if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailForTicket)) {
			setEmailError('Please enter a valid email address.');
			return;
		}
		setEmailError('');
		alert(
			`A copy of the ticket would be sent to ${emailForTicket} (email sending simulated).`
		);
	};

	return (
		<Container className="mt-4">
			<Card>
				<Card.Body>
					<Card.Title>Checkout</Card.Title>
					<Form onSubmit={handleSubmit}>
						<Form.Group className="mb-3">
							<Form.Label>Select Card Type</Form.Label>
							<Form.Select required>
								<option value="">Select...</option>
								<option>Visa</option>
								<option>Mastercard</option>
								<option>Amex</option>
								<option>Discover</option>
							</Form.Select>
						</Form.Group>
						<Form.Group className="mb-3">
							<Form.Label>Card Number</Form.Label>
							<Form.Control
								type="text"
								placeholder="1234 5678 9012 3456"
								value={cardNumber}
								onChange={(e) => setCardNumber(e.target.value)}
								required
							/>
						</Form.Group>
						<Form.Group className="mb-3">
							<Form.Label>Expiry Date</Form.Label>
							<Form.Control
								type="text"
								placeholder="MM/YY"
								value={expiry}
								onChange={(e) => setExpiry(e.target.value)}
								required
							/>
						</Form.Group>
						<Form.Group className="mb-3">
							<Form.Label>CVV</Form.Label>
							<Form.Control
								type="text"
								placeholder="123"
								value={cvv}
								onChange={(e) => setCvv(e.target.value)}
								required
							/>
						</Form.Group>
						{error && (
							<div className="text-danger mt-1">{error}</div>
						)}
						<Button variant="primary" size="lg" type="submit">
							Submit Payment
						</Button>
					</Form>
					{showEmailField && (
						<div className="mt-4">
							<Form.Label>
								Please enter your email address if you would
								like to mail the ticket:
							</Form.Label>
							<Form.Control
								type="email"
								placeholder="you@example.com"
								value={emailForTicket}
								onChange={(e) =>
									setEmailForTicket(e.target.value)
								}
								isInvalid={!!emailError}
							/>
							{emailError && (
								<div className="text-danger mt-1">
									{emailError}
								</div>
							)}
							<Button className="mt-2" onClick={handleSendEmail}>
								Send Ticket
							</Button>
						</div>
					)}
				</Card.Body>
			</Card>
			<Modal
				show={showModal}
				onHide={() => setShowModal(false)}
				centered
				backdrop="static"
				size="md"
			>
				<Modal.Header
					closeButton
					style={{ backgroundColor: '#198754', color: '#fff' }}
				>
					<Modal.Title>Payment Successful</Modal.Title>
				</Modal.Header>
				<Modal.Body style={{ fontSize: '1.1rem', lineHeight: '1.5' }}>
					Success! You can now download your PDF ticket to take with
					you to the Game Food Station. Every dollar you have spent
					today on your food purchase will be donated to the SEDOL
					Foundation - Thank you!
				</Modal.Body>
				<Modal.Footer>
					<Button
						variant="success"
						onClick={() => setShowModal(false)}
					>
						OK
					</Button>
				</Modal.Footer>
			</Modal>
		</Container>
	);
}

export default Checkout;
