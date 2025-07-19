import React from 'react';
import { Table, Button } from 'react-bootstrap';

function VolunteerRolesTable({ options, selected, handleSelect }) {
	options.map((role, idx) => ({ role }));
	handleSelect(role);
	//className="w-100" > {selected.includes(role) ? 'Selected' : 'Select'} ;
	return Volunteer(Role, Action);
}

export default VolunteerRolesTable;
