import { FC } from 'react';
import { Html, Body, Container, Text } from '@react-email/components';

interface EmailTemplateProps {
  type: 'subscriber' | 'owner';
  email: string;
}

export const EmailTemplate: FC<EmailTemplateProps> = ({ type, email }) => {
  if (type === 'subscriber') {
    return (
      <Html>
        <Body>
          <Container>
            <Text>Thank you for subscribing!</Text>
            <Text>
              {`You'll now receive updates about contests, airdrops, and more.`}
            </Text>
          </Container>
        </Body>
      </Html>
    );
  }

  return (
    <Html>
      <Body>
        <Container>
          <Text>New subscriber: {email}</Text>
        </Container>
      </Body>
    </Html>
  );
};
