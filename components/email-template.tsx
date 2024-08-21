import * as React from 'react';

interface EmailTemplateProps {
  firstName: string;
  email: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
  email,
  message
}) => (
  <div>
    <h1>Message reçu de {firstName}</h1>
    <a>{email}</a>
    <p>{message}</p>
  </div>
);
