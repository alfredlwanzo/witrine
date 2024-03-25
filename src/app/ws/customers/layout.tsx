import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { RxBoxModel } from "react-icons/rx";
import { FiHome, FiShoppingCart, FiUsers } from "react-icons/fi";
import { PiGear } from "react-icons/pi";
import { UserAvatar } from "@/components/user-avatar";
import { Separator } from "@/components/ui/separator";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { Menubar, MenubarMenu } from "@/components/ui/menubar";
import { HiPlus } from "react-icons/hi";
import { LiaTagSolid } from "react-icons/lia";
import { SearchBar } from "@/components/searchBar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";

export default function WSLayoutCustumers({
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
            <h1 className=" font-bold flex-1">Clients</h1>
            <Button variant="ghost" size="icon">
              <HiPlus className="h-[1.2rem] w-[1.2rem]" />
            </Button>
            <Button variant="ghost" size="icon">
              <LiaTagSolid className="h-[1.2rem] w-[1.2rem]" />
            </Button>
          </div>
          <SearchBar/>
          
          <ScrollArea className="h-[calc(100vh-105px)]  pt-3 pb-1">
          {
            [1,2,3,4,5,6,7,8,9,10,11,12,13,14].map(item=><div key={item} className="flex items-start gap-x-3 p-3 hover:bg-muted rounded-lg">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png"/>
                <AvatarFallback>CL</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <h3 className="text-sm">Alfred</h3>
                <p className=" text-muted-foreground text-sm">243978308679</p>
              </div>
              <Badge variant="outline">Beni</Badge>
            </div>)
          }
           <ScrollBar orientation="vertical" />
          </ScrollArea>
          
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={75} minSize={50} maxSize={75}>
        <div className="">{children}</div>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
