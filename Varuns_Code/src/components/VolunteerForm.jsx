import React from 'react';
import { Form } from 'react-bootstrap';

function VolunteerForm({
	name,
	email,
	phone,
	errors,
	setName,
	setEmail,
	setPhone,
}) {
	return (
		<Form>
			<Form.Group className="mb-3">
				<Form.Label>Name</Form.Label>
				<Form.Control
					placeholder="Full Name"
					value={name}
					onChange={(e) => setName(e.target.value)}
					isInvalid={!!errors.name}
					required
				/>
				<Form.Control.Feedback type="invalid">
					{errors.name}
				</Form.Control.Feedback>
			</Form.Group>
			<Form.Group className="mb-3">
				<Form.Label>Email</Form.Label>
				<Form.Control
					type="email"
					placeholder="you@example.com"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					isInvalid={!!errors.email}
					required
				/>
				<Form.Control.Feedback type="invalid">
					{errors.email}
				</Form.Control.Feedback>
			</Form.Group>
			<Form.Group className="mb-3">
				<Form.Label>Cell Phone</Form.Label>
				<Form.Control
					placeholder="(555) 555-5555"
					value={phone}
					onChange={(e) => setPhone(e.target.value)}
					isInvalid={!!errors.phone}
					required
				/>
				<Form.Control.Feedback type="invalid">
					{errors.phone}
				</Form.Control.Feedback>
			</Form.Group>
		</Form>
	);
}

export default VolunteerForm;
