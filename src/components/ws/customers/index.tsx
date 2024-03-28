import { LiaTagSolid } from "react-icons/lia";
import { ListCustomers } from "./list";
import { Button } from "@/components/ui/button";
import { TooltipWrap } from "@/components/tooltip-wrap";
import { HiPlus } from "react-icons/hi";

export function Customers() {
  return (
    <div className="h-full flex flex-col">
      <div className="h-16 flex items-center px-3">
        <h1 className=" font-bold flex-1">Clients</h1>
        <TooltipWrap content="Créer un client">
          <Button variant="ghost" size="icon">
            <HiPlus className="h-[1.2rem] w-[1.2rem]" />
          </Button>
        </TooltipWrap>
        <Button variant="ghost" size="icon">
          <LiaTagSolid className="h-[1.2rem] w-[1.2rem]" />
        </Button>
      </div>
      <ListCustomers withSearchBar className="h-[calc(100vh-169px)] 2xl:h-[calc(920px-169px)]"  />
    </div>
  );
}
