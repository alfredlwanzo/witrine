import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { FiEdit } from "react-icons/fi";
import { IoIosMore } from "react-icons/io";

export default function WSPageCustomers() {
    return <div>
      <div className=" h-16 border-b px-3 flex items-center gap-x-3">
        <Avatar className="">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>PN</AvatarFallback>
        </Avatar>
        <div>
          <h1 className="text-sm font-bold">
            Nom du client s&apos;affiche ici
          </h1>
          <p className="  text-muted-foreground text-sm lowercase">243978308679</p>
        </div>
        <div className="flex-1" />
        <Button variant="ghost" size="icon" >
          <FiEdit  className="h-[1.2rem] w-[1.2rem]" />
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              <IoIosMore className="h-[1.2rem] w-[1.2rem] rotate-90 " />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent >
            <DropdownMenuItem >Bloquer</DropdownMenuItem>
            <DropdownMenuItem >Supprimer</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>;
  }
  