import { TooltipWrap } from "@/components/tooltip-wrap";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Switch } from "@/components/ui/switch";
import { FiEye,  } from "react-icons/fi";
import { IoIosMore } from "react-icons/io";
import { TbRocket } from "react-icons/tb";

export default function WSPageProduct() {
  return (
    <div>
      <div className=" h-16 px-3 flex items-center gap-x-3">
        <Avatar className=" rounded-lg">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback className="rounded-lg">PN</AvatarFallback>
        </Avatar>
        <div>
          <h1 className="text-sm font-bold">
            Produit
          </h1>
          <p className="  text-muted-foreground text-sm lowercase">
            Nom du produit
          </p>
        </div>
        <div className="flex-1" />
        <TooltipWrap content="Prévisualiser">
          <Button variant="ghost" size="icon" className="">
            <FiEye className="h-[1.2rem] w-[1.2rem]" />
          </Button>
          </TooltipWrap>
        <div className="flex items-center space-x-3 py-2 rounded-md">
        
          <Label htmlFor="publish">Publié</Label>
          <Switch id="publish" className="" />
        </div>
        
        {/* <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              <IoIosMore className="h-[1.2rem] w-[1.2rem] rotate-90 " />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Archiver</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu> */}
      </div>
      <ScrollArea className="h-[calc(100vh-129px)] 2xl:h-[calc(920px-129px)] px-4 pb-4  ">
        <div className="flex flex-col gap-4">
        <Card className="shadow-none">
          <CardHeader>
            <CardTitle>Nom</CardTitle>
            <CardDescription>Dénomination du produit</CardDescription>
          </CardHeader>
          <CardContent>
            <Input/>
          </CardContent>
        </Card>
        </div>
        </ScrollArea>
    </div>
  );
}
