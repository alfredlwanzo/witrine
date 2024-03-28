import { TooltipWrap } from "@/components/tooltip-wrap";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { FiEdit } from "react-icons/fi";
import { IoIosMore } from "react-icons/io";

export default function WSPageCustomers() {
    return <div>
      <div className=" h-16 border-b px-3 flex items-center gap-x-3">
        <div>
          <h1 className="text-sm ">
            Commande
          </h1>
          <p className="  text-muted-foreground text-sm lowercase font-bold">#8765343{}</p>
        </div>
        <div className="flex-1" />
        <TooltipWrap content="Modifier">
        <Button variant="ghost" size="icon" >
          <FiEdit  className="h-[1.2rem] w-[1.2rem]" />
        </Button>
        </TooltipWrap>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              <IoIosMore className="h-[1.2rem] w-[1.2rem] rotate-90 " />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent >
            <DropdownMenuItem >Archiver</DropdownMenuItem>
            <DropdownMenuItem >Supprimer</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>;
  }
  