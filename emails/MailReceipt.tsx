import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";
import * as React from "react";

interface MailReceiptProps {
  name: string;
  email: string;
  reviewText: string;
}

export default function MailReceipt({
  name = "Ayoub Benziza",
  email = "ayoub.cbenziza@gmail.com",
  reviewText = "“Zeno was a great guest! Easy communication, the apartment was left in great condition, very polite, and respectful of all house rules. He’s welcome back anytime and would easily recommend him to any host!”",
}: MailReceiptProps) {
  return (
    <Tailwind>
      <Html>
        <Head />
        <Preview>Request from {name}</Preview>
        <Body className="bg-white font-sans"></Body>
        <Container className="mx-auto">
          <Heading className="text-2xl text-center font-bold mt-8">
            Name: {name}
          </Heading>
          <Heading className="text-2xl text-center font-bold mt-8">
            Email: {email}
          </Heading>
          <Section className="grid mt-4 justify-items-center text-center">
            <Heading className="text-lg">Message</Heading>
            <Text className="text-lg p-4 bg-gray-200 rounded">
              {reviewText}
            </Text>
          </Section>
        </Container>
      </Html>
    </Tailwind>
  );
}
