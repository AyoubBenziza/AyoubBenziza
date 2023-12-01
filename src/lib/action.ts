"use server";

import MailContact from "../../emails/MailContact";
import { resend } from "./resend";

import { z } from "zod";
import { contactFormData } from "./schema";

type Inputs = z.infer<typeof contactFormData>;

export async function sendEmail(data: Inputs) {
  await resend.emails.send({
    from: "contact@ayoubbenziza.com",
    to: data.email,
    subject: "Email Confirmation",
    react: MailContact({
      name: data.name,
      magicLink: "https://ayoubbenziza.com",
      reviewText: data.message,
    }),
  });
}
