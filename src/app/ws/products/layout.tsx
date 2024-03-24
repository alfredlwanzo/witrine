import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { IoFilter } from "react-icons/io5";
import { HiPlus } from "react-icons/hi";
import { LiaTagSolid } from "react-icons/lia";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SearchBar } from "@/components/searchBar";

export default function WSLayoutProducts({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ResizablePanelGroup
      direction="horizontal"
      className="h-screen  rounded-tl-xl "
    >
      <ResizablePanel defaultSize={25}>
        <div className="flex flex-col h-full  px-3">
          <div className="flex items-center h-16">
            <h1 className=" font-bold flex-1">Produits</h1>
            <Button variant="ghost" size="icon">
              <HiPlus className="h-[1.2rem] w-[1.2rem]" />
            </Button>
            <Button variant="ghost" size="icon">
              <LiaTagSolid className="h-[1.2rem] w-[1.2rem]" />
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <IoFilter className="h-[1.2rem] w-[1.2rem]" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Publiés</DropdownMenuItem>
                <DropdownMenuItem>Brouillons</DropdownMenuItem>
                <DropdownMenuItem>Archives</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className="py-3">
          <SearchBar/>
          </div>
        </div>
      </ResizablePanel>
      <ResizableHandle  />
      <ResizablePanel defaultSize={75} minSize={50} maxSize={75}>
        <div className="">{children}</div>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
