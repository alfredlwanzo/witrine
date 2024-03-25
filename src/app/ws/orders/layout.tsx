
import { Button } from "@/components/ui/button";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SearchBar } from "@/components/searchBar";
import { HiPlus } from "react-icons/hi";
import { LiaTagSolid } from "react-icons/lia";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { LuHistory } from "react-icons/lu";

export default function WSLayoutOrders({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ResizablePanelGroup
      direction="horizontal"
      className="min-h-screen  rounded-tl-xl "
    >
      <ResizablePanel defaultSize={25}>
        <div className="flex flex-col h-full  px-3">
          <div className="flex items-center h-16">
            <h1 className=" font-bold flex-1">Commandes</h1>
            <Button variant="ghost" size="icon">
              <HiPlus className="h-[1.2rem] w-[1.2rem]" />
            </Button>
            
            {/* <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                <LiaTagSolid className="h-[1.2rem] w-[1.2rem]" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Publiés</DropdownMenuItem>
                <DropdownMenuItem>Brouillons</DropdownMenuItem>
                <DropdownMenuItem>Archives</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu> */}
            <Button variant="ghost" size="icon">
              <LuHistory  className="h-[1.2rem] w-[1.2rem]" />
            </Button>
          </div>
          <Tabs defaultValue="pending" className="">
            <TabsList className="w-full justify-start">
              <TabsTrigger value="pending">En attente</TabsTrigger>
              <TabsTrigger value="processing">Préparation</TabsTrigger>
              <TabsTrigger value="delivery">Livraison</TabsTrigger>
            </TabsList>
            <TabsContent value="pending">
              <SearchBar />
            </TabsContent>
            <TabsContent value="processing">
              <SearchBar />
            </TabsContent>
            <TabsContent value="delivery">
              <SearchBar />
            </TabsContent>
          </Tabs>
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={75} minSize={50} maxSize={75}>
        <div className="">{children}</div>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
