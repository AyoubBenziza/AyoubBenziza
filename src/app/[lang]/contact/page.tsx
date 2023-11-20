import PixelBackground from "@/components/pixelBackground";
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

  let isLoading = false;

  return (
    <section className="w-full h-full flex items-center justify-center">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>{t.title}</CardTitle>
          <CardDescription>{t.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">{t.name.label}</Label>
                <Input id="name" placeholder={t.name.placeholder} />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">{t.email.label}</Label>
                <Input
                  type="email"
                  id="email"
                  placeholder={t.email.placeholder}
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="message">{t.message.label}</Label>
                <Textarea name="message" placeholder={t.message.placeholder} />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-end">
          {isLoading ? (
            <Button disabled>
              <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
              Please wait
            </Button>
          ) : (
            <Button>Send</Button>
          )}
        </CardFooter>
      </Card>
      <PixelBackground />
    </section>
  );
}
