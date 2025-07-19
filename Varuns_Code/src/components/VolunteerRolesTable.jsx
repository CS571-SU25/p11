import React from 'react';
import { Table, Button } from 'react-bootstrap';

function VolunteerRolesTable({ options, selected, handleSelect }) {
	return (
		<Table bordered hover responsive className="text-center mb-4">
			<thead className="table-success">
				<tr>
					<th>Volunteer Role</th>
					<th>Action</th>
				</tr>
			</thead>
			<tbody>
				{options.map((role, idx) => (
					<tr key={idx}>
						<td className="align-middle fw-bold">{role}</td>
						<td>
							<Button
								variant={
									selected.includes(role)
										? 'success'
										: 'outline-primary'
								}
								onClick={() => handleSelect(role)}
								className="w-100"
							>
								{selected.includes(role)
									? 'Selected'
									: 'Select'}
							</Button>
						</td>
					</tr>
				))}
			</tbody>
		</Table>
	);
}

export default VolunteerRolesTable;
