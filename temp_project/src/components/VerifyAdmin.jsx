import React, { useEffect } from 'react';
import { Alert } from 'react-bootstrap';

function VerifyAdmin({ username, password, onVerified }) {
	useEffect(() => {
		if (username === 'SiteCreator' && password === 'CS5712025') {
			alert('You have successfully logged in as Admin');
			onVerified(true);
		}
	}, [username, password, onVerified]);

	return (
		<Alert variant="info" className="mt-3">
			<strong>Admin Credentials Captured:</strong>
			<br />
			Username: {username || 'N/A'}
			<br />
			Password: {password ? '******' : 'N/A'}
		</Alert>
	);
}

export default VerifyAdmin;
