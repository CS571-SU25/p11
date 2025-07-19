import React, { useEffect } from 'react';
import { Alert } from 'react-bootstrap';

function VolunteerConfirmation({ name, email, phone, selected, confirmationNumber }) {
  useEffect(() => {
    const formattedBody = `Name: ${name}%0DEmail: ${email}%0DPhone: ${phone}%0DRoles: ${selected.join(', ')}%0DConfirmation Number: ${confirmationNumber}`;
    window.location.href = `mailto:vputcha@wisc.edu?subject=Volunteer Signup&body=${formattedBody}`;
  }, [name, email, phone, selected, confirmationNumber]);

  return (
    <Alert variant="success" className="mt-3 text-center">
      <h4>Thank you, {name}!</h4>
      <p>We have received your volunteer request.</p>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Phone:</strong> {phone}</p>
      <p><strong>Selected Roles:</strong> {selected.join(', ')}</p>
      <p><strong>Confirmation Number:</strong> {confirmationNumber}</p>
      <hr />
      <p className="text-info">A confirmation email window should have opened in your email program.</p>
    </Alert>
  );
}

export default VolunteerConfirmation;
