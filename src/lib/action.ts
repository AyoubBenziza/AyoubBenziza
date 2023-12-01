"use server";

import MailContact from "../../emails/MailContact";
import { resend } from "./resend";

import { z } from "zod";
import { contactFormData } from "./schema";

type Inputs = z.infer<typeof contactFormData>;

export async function sendEmail(data: Inputs) {
  console.log("coucou venant d'action mail");
  await resend.emails.send({
    from: "contact@ayoubbenziza.com",
    to: data.email,
    subject: "Confirmation d'envoi du mail",
    react: MailContact({
      name: data.name,
      magicLink: "https://ayoubbenziza.com",
      reviewText: data.message,
    }),
  });
}
