import React, { useState } from 'react';
import { Container, Card, Button, Alert } from 'react-bootstrap';
import VolunteerRolesTable from './VolunteerRolesTable';
import VolunteerForm from './VolunteerForm';
import VolunteerConfirmation from './VolunteerConfirmation';

function Volunteer() {
	const [selected, setSelected] = useState([]);
	const [submitted, setSubmitted] = useState(false);
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');
	const [errors, setErrors] = useState({});
	const options = [
		'Booth Staff',
		'School Communications',
		'Vendor Coordination',
		'Cleanup',
	];

	const handleSelect = (role) => {
		if (selected.includes(role)) {
			setSelected(selected.filter((r) => r !== role));
		} else if (selected.length < 2) {
			setSelected([...selected, role]);
		} else {
			alert('You can only select up to two roles.');
		}
	};

	const validate = () => {
		const newErrors = {};
		if (name.trim().length < 2)
			newErrors.name = 'Name must be at least 2 characters.';
		if (!/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email))
			newErrors.email = 'Enter a valid email.';
		if (!/^\\d{10}$/.test(phone.replace(/[^0-9]/g, '')))
			newErrors.phone = 'Enter a valid 10-digit phone number.';
		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	const handleSubmit = () => {
		if (!validate()) return;
		setSubmitted(true);
	};

	const isSubmitEnabled = name && email && phone && selected.length === 2;

	return (
		<Container className="mt-4">
			<Card className="shadow-lg border-primary">
				<Card.Body>
					<h2 className="mb-4 text-center text-primary">
						I would like to volunteer for this fundraising event.
					</h2>
					{!submitted ? (
						<>
							<VolunteerRolesTable
								options={options}
								selected={selected}
								handleSelect={handleSelect}
							/>
							<VolunteerForm
								name={name}
								email={email}
								phone={phone}
								errors={errors}
								setName={setName}
								setEmail={setEmail}
								setPhone={setPhone}
							/>
							{selected.length > 0 && (
								<Alert
									variant="info"
									className="mt-3 text-center fw-bold"
								>
									You have selected: {selected.join(', ')}
								</Alert>
							)}
							<div className="text-center">
								<Button
									variant="success"
									onClick={handleSubmit}
									disabled={!isSubmitEnabled}
								>
									Submit
								</Button>
							</div>
						</>
					) : (
						<VolunteerConfirmation
							name={name}
							email={email}
							phone={phone}
							selected={selected}
						/>
					)}
				</Card.Body>
			</Card>
		</Container>
	);
}

export default Volunteer;
