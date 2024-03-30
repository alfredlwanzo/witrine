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
import { ScrollArea } from "@/components/ui/scroll-area";

export default function WSPageSettings() {
  return (
    <div>
      <div className=" h-16 px-4 flex items-center gap-x-3">
        <div>
          <h1 className=" font-bold">Général</h1>
        </div>
        <div className="flex-1" />
      </div>
      <ScrollArea className="h-[calc(100vh-129px)] 2xl:h-[calc(920px-129px)] px-4 pb-4  ">
        <div className="flex flex-col gap-4">
          <Card className="shadow-none">
            <CardHeader>
              <CardTitle>Application</CardTitle>
              <CardDescription>Informations sur boutique</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex gap-3">
                <Label className="flex-1">Name</Label>
                <Input />
              </div>
              <div className="flex gap-3">
                <Label className="flex-1">Short name</Label>
                <Input />
              </div>
            </CardContent>
            <CardFooter className="flex ">
              <p className="flex-1 text-sm text-muted-foreground ">N&apos;oubliez pas de sauvegarder après chaque modification</p>
              <Button variant="outline" className="">Sauvegarder</Button>
            </CardFooter>
          </Card>
        </div>
      </ScrollArea>
    </div>
  );
}
