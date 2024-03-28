import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { IoIosHeart } from "react-icons/io";

const date = new Date();

export default function WSHelpPage() {
  return (
    <>
      <div className=" h-16  px-4 flex items-center gap-x-3">
        <div>
          <h1 className=" font-bold">Assistance</h1>
        </div>
        <div className="flex-1" />
      </div>
      <ScrollArea className="h-[calc(100vh-129px)] 2xl:h-[calc(920px-129px)] px-4 pb-4  ">
        <div className="flex flex-col gap-4">
        <Card className="shadow-none">
          <CardHeader>
            <CardTitle>Witrine</CardTitle>
            <CardDescription>Version 0.1.0</CardDescription>
          </CardHeader>
        </Card>

        <Card className="shadow-none">
          <CardHeader>
            <CardTitle>Contactez-nous</CardTitle>
            <CardDescription>
              Nous aimerions connaitre votre avis sur cette application
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-y-1">
              <Button
                className="w-fit underline p-0 h-fit font-normal"
                variant="ghost"
              >
                Contactez-nous
              </Button>
              <Button
                className="w-fit underline p-0 h-fit font-normal"
                variant="ghost"
              >
                Licences
              </Button>
              <Button
                className="w-fit underline p-0 h-fit font-normal"
                variant="ghost"
              >
                Conditions et politique de confidentialité
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="text-muted-foreground text-sm">
          <p className="">© {date.getFullYear()} witrine</p>
          <p className="">
            Made with <IoIosHeart className=" inline text-[#ff0000]" /> from DRC
          </p>
        </div>
        </div>
      </ScrollArea>
    </>
  );
}
