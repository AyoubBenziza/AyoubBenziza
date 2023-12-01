"use client";

import { Button } from "@/components/ui/button";
import { ReloadIcon } from "@radix-ui/react-icons";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { sendEmail } from "@/lib/action";
import { contactFormData } from "@/lib/schema";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";

import { toast } from "sonner";
import { useState } from "react";

type ContactProps = {
  title: string;
  description: string;
  name: {
    label: string;
    placeholder: string;
  };
  email: {
    label: string;
    placeholder: string;
  };
  message: {
    label: string;
    placeholder: string;
  };
};

export default function contactForm({ t }: { t: ContactProps }) {
  const form = useForm<z.infer<typeof contactFormData>>({
    resolver: zodResolver(contactFormData),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });
  const [pending, setPending] = useState(false);

  const onSubmit = (data: z.infer<typeof contactFormData>) => {
    setPending(true);

    toast.promise(sendEmail(data), {
      loading: "Loading...",
      success: (data) => {
        setPending(false);
        form.reset();
        return "Email has been sent";
      },
      error: (data) => {
        setPending(false);
        form.reset();
        return "Uh oh! Someting went wrong.";
      },
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>{t.title}</CardTitle>
            <CardDescription>{t.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid w-full items-center gap-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="flex flex-col space-y-1.5">
                    <FormLabel>{t.name.label}</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder={t.name.placeholder}
                        autoComplete="true"
                        required
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="flex flex-col space-y-1.5">
                    <FormLabel>{t.email.label}</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        {...field}
                        placeholder={t.email.placeholder}
                        autoComplete="true"
                        required
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem className="flex flex-col space-y-1.5">
                    <FormLabel>{t.message.label}</FormLabel>
                    <FormControl>
                      <Textarea
                        {...field}
                        placeholder={t.message.placeholder}
                        required
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </CardContent>
          <CardFooter className="flex justify-end">
            {pending ? (
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
    </Form>
  );
}
