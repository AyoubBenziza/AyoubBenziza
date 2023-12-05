"use server";

import MailContact from "../../emails/MailContact";
import { resend } from "./resend";

import { z } from "zod";
import { contactFormData } from "./schema";
import MailReceipt from "../../emails/MailReceipt";

type Inputs = z.infer<typeof contactFormData>;

export async function sendEmail(data: Inputs) {
  await Promise.all([
    resend.emails.send({
      from: "contact@ayoubbenziza.com",
      to: data.email,
      subject: "Request Email Confirmation",
      react: MailContact({
        name: data.name,
        magicLink: "https://ayoubbenziza.com",
        reviewText: data.message,
      }),
    }),
    resend.emails.send({
      from: "contact@ayoubbenziza.com",
      to: "ayoub.cbenziza@gmail.com",
      subject: `Request from ${data.name}`,
      react: MailReceipt({
        name: data.name,
        email: data.email,
        reviewText: data.message,
      }),
    }),
  ]);
}
