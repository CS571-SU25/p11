import React, { useState, useEffect } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import { CSVLink } from 'react-csv';

function AssignModal({
	show,
	onHide,
	volunteer,
	onAssign,
	assignedVolunteers,
	setAssignedVolunteers,
}) {
	const [shift, setShift] = useState('');
	const [task, setTask] = useState('');
	const [error, setError] = useState('');

	const handleSave = () => {
		if (!['Morning', 'Afternoon', 'Evening'].includes(shift)) {
			setError('Shift must be Morning, Afternoon, or Evening');
			return;
		}
		if (!task) {
			setError('Please select a task');
			return;
		}
		const updatedVolunteer = {
			...volunteer,
			assignedShift: shift,
			assignedTask: task,
			dateAssigned: new Date().toLocaleString(),
		};
		setAssignedVolunteers([...assignedVolunteers, updatedVolunteer]);
		onAssign(volunteer.confirmationNumber, { shift, task });
		onHide();
	};

	return (
		<Modal show={show} onHide={onHide}>
			<Modal.Header closeButton>
				<Modal.Title>Assign Tasks for {volunteer.name}</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Form>
					<Form.Group>
						<Form.Label>Shift</Form.Label>
						<Form.Select
							value={shift}
							onChange={(e) => setShift(e.target.value)}
						>
							<option value="">Select shift</option>
							<option value="Morning">Morning</option>
							<option value="Afternoon">Afternoon</option>
							<option value="Evening">Evening</option>
						</Form.Select>
					</Form.Group>
					<Form.Group>
						<Form.Label>Task</Form.Label>
						<Form.Select
							value={task}
							onChange={(e) => setTask(e.target.value)}
						>
							<option value="">Select task</option>
							<option value="Booth Staff">Booth Staff</option>
							<option value="School Communications">
								School Communications
							</option>
							<option value="Vendor Coordination">
								Vendor Coordination
							</option>
							<option value="Cleanup">Cleanup</option>
						</Form.Select>
					</Form.Group>
					{error && <div className="text-danger mt-2">{error}</div>}
					<Button className="mt-3 me-2" onClick={handleSave}>
						Save Assignment
					</Button>
					<CSVLink
						data={assignedVolunteers.map((v) => ({
							Name: v.name,
							Email: v.email,
							Phone: v.phone,
							Roles: v.roles.join(', '),
							'Confirmation Number': v.confirmationNumber,
							'Assigned Shift': v.assignedShift,
							'Assigned Task': v.assignedTask,
							'Date Assigned': v.dateAssigned,
						}))}
						filename="volunteer-assignments.csv"
						className="btn btn-primary mt-3"
					>
						Download All Assignments CSV
					</CSVLink>
				</Form>
			</Modal.Body>
		</Modal>
	);
}

export default AssignModal;
