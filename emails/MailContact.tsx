import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";
import * as React from "react";

interface MailContactProps {
  name: string;
  magicLink: string;
  reviewText: string;
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "https://www.ayoubbenziza.com";

export const MailContact = ({
  name = "Ayoub Benziza",
  magicLink = "https://raycast.com",
  reviewText = "“Zeno was a great guest! Easy communication, the apartment was left in great condition, very polite, and respectful of all house rules. He’s welcome back anytime and would easily recommend him to any host!”",
}: MailContactProps) => (
  <Tailwind>
    <Html>
      <Head />
      <Preview>Request Email Confirmation</Preview>
      <Body className="bg-white font-sans">
        <Container className="mx-auto">
          <Img
            src={`${baseUrl}/profile.webp`}
            width={150}
            height={150}
            alt="Avatar"
            className="mx-auto rounded-full"
          />
          <Heading className="text-2xl text-center font-bold mt-8">
            🪄 Thank you {name} for your request
          </Heading>
          <Section className="grid mt-4 justify-items-center text-center">
            <Heading className="text-lg">Message</Heading>
            <Text className="text-lg p-4 bg-gray-200 rounded">
              {reviewText}
            </Text>
            <Text className="text-base mb-4 mx-auto">
              <Link className="text-red-500" href={magicLink}>
                👉 Portfolio 👈
              </Link>
            </Text>
            <Text className="text-base mb-4 mx-auto">
              I reply to requests within 48 hours.
            </Text>
            <Text className="text-base mb-4">
              If you didn't request this, please ignore this email.
            </Text>
          </Section>
          <Text className="text-base mt-4">
            Best,
            <br />- Ayoub Benziza
          </Text>
        </Container>
      </Body>
    </Html>
  </Tailwind>
);

export default MailContact;
