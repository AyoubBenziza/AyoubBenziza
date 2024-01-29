"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { addComment } from "@/lib/actions";
import * as z from "zod";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const userMessage: string = "Username must be between 4 and 20 characters.";
const commentMessage: string = "Comment must be between 10 and 100 characters.";

export const commentFormSchema = z.object({
  username: z
    .string()
    .min(4, { message: userMessage })
    .max(20, { message: userMessage }),
  comment: z
    .string()
    .min(10, { message: commentMessage })
    .max(100, { message: commentMessage }),
});

export const CommentForm = () => {
  const router = useRouter();

  const commentForm = useForm<z.infer<typeof commentFormSchema>>({
    resolver: zodResolver(commentFormSchema),
    defaultValues: {
      username: "",
      comment: "",
    },
  });

  const onSubmit = (values: z.infer<typeof commentFormSchema>) => {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
    toast.promise(addComment(values), {
      loading: "Please wait...",
      success: (data) => {
        commentForm.reset();
        router.refresh();
        return "Success";
      },
      error: (data) => {
        commentForm.reset();
        return "An error has occured";
      },
    });
  };

  return (
    <Form {...commentForm}>
      <form
        onSubmit={commentForm.handleSubmit(onSubmit)}
        className="flex flex-col gap-4 w-3/4 md:px-8"
      >
        <FormField
          control={commentForm.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="Username" {...field} autoComplete="true" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={commentForm.control}
          name="comment"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Comment</FormLabel>
              <FormControl>
                <Textarea placeholder="Comment" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};
