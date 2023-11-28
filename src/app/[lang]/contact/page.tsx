"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ReloadIcon } from "@radix-ui/react-icons";
import { Locale, getDictionary } from "../dictionaries";

export default async function Contact({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const t = (await getDictionary(lang)).contact;

  function sendEmail(event: any) {
    event.preventDefault();
    const data = {
      name: String(event.target.name.value),
      email: String(event.target.email.value),
      message: String(event.target.message.value),
    };

    console.log(data);
  }

  let isLoading = false;

  return (
    <section className="w-full h-full flex items-center justify-center">
      <form onSubmit={sendEmail}>
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>{t.title}</CardTitle>
            <CardDescription>{t.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">{t.name.label}</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder={t.name.placeholder}
                  autoComplete="true"
                  required
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">{t.email.label}</Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  placeholder={t.email.placeholder}
                  autoComplete="true"
                  required
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="message">{t.message.label}</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder={t.message.placeholder}
                  required
                />
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-end">
            {isLoading ? (
              <Button disabled>
                <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                Please wait
              </Button>
            ) : (
              <Button type="submit">Send</Button>
            )}
          </CardFooter>
        </Card>
      </form>
    </section>
  );
}
