import React, { useState } from 'react';
import { Container, Table, Button, Form, Image } from 'react-bootstrap';
import { CSVLink } from 'react-csv';
import AssignModal from './AssignModal';
import VerifyAdmin from './VerifyAdmin';
import football from '../assets/football.jpg';

function VolunteerDashboard({ volunteers }) {
	const [filter, setFilter] = useState('');
	const [verified, setVerified] = useState(false);
	const [showAssign, setShowAssign] = useState(false);
	const [selectedVolunteer, setSelectedVolunteer] = useState(null);
	const [assignedVolunteers, setAssignedVolunteers] = useState([]);

	const handleVerified = (value) => setVerified(value);
	const handleAssign = (confirmationNumber, assignment) => {
		const updated = volunteers.map((v) => {
			if (v.confirmationNumber === confirmationNumber) {
				return {
					...v,
					assignedShift: assignment.shift,
					assignedTask: assignment.task,
					status: 'Assigned',
					dateAssigned: new Date().toLocaleString(),
				};
			}
			return v;
		});
		setAssignedVolunteers(updated);
	};
	const displayedVolunteers = assignedVolunteers.length
		? assignedVolunteers
		: volunteers;
	const filteredVolunteers = displayedVolunteers.filter(
		(v) =>
			v.name.toLowerCase().includes(filter.toLowerCase()) ||
			v.email.toLowerCase().includes(filter.toLowerCase()) ||
			v.roles.join(',').toLowerCase().includes(filter.toLowerCase())
	);

	return (
		<Container className="mt-4 p-4 bg-light rounded shadow border border-success">
			{/* <Image
				src={football}
				fluid
				rounded
				className="mb-4 border border-success"
				alt="Football game photo"
			/> */}
			<h2 className="text-center text-success mb-4 fw-bold">
				Volunteer Dashboard
			</h2>
			{!verified ? (
				<VerifyAdmin onVerified={handleVerified} />
			) : (
				<>
					<Form.Control
						placeholder="Filter volunteers by name, role, or contact"
						value={filter}
						onChange={(e) => setFilter(e.target.value)}
						className="mb-3 border border-success"
					/>
					<Table
						striped
						bordered
						hover
						responsive
						className="border border-success"
					>
						<thead className="table-success text-center">
							<tr>
								<th>Name</th>
								<th>Email</th>
								<th>Phone</th>
								<th>Roles</th>
								<th>Confirmation #</th>
								<th>Shift</th>
								<th>Task</th>
								<th>Status</th>
								<th>Assigned At</th>
								<th>Actions</th>
							</tr>
						</thead>
						<tbody>
							{filteredVolunteers.map((v) => (
								<tr key={v.confirmationNumber}>
									<td className="align-middle">{v.name}</td>
									<td className="align-middle">{v.email}</td>
									<td className="align-middle">{v.phone}</td>
									<td className="align-middle">
										{v.roles.join(', ')}
									</td>
									<td className="align-middle">
										{v.confirmationNumber}
									</td>
									<td className="align-middle">
										{v.assignedShift || '-'}
									</td>
									<td className="align-middle">
										{v.assignedTask || '-'}
									</td>
									<td className="align-middle">
										{v.status || 'Pending'}
									</td>
									<td className="align-middle">
										{v.dateAssigned || '-'}
									</td>
									<td>
										<Button size="sm" variant="success">
											Approve
										</Button>{' '}
										<Button
											size="sm"
											variant="info"
											onClick={() => {
												setSelectedVolunteer(v);
												setShowAssign(true);
											}}
										>
											Assign
										</Button>
									</td>
								</tr>
							))}
						</tbody>
					</Table>
					<div className="text-center mt-3">
						<CSVLink
							data={displayedVolunteers}
							filename="volunteer-assignments.csv"
							className="btn btn-success"
						>
							Export Assignments to CSV
						</CSVLink>
					</div>
					{selectedVolunteer && (
						<AssignModal
							show={showAssign}
							onHide={() => setShowAssign(false)}
							volunteer={selectedVolunteer}
							onAssign={handleAssign}
							assignedVolunteers={assignedVolunteers}
							setAssignedVolunteers={setAssignedVolunteers}
						/>
					)}
				</>
			)}
		</Container>
	);
}

export default VolunteerDashboard;
