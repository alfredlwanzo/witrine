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


export default function WSLayoutOrders({ children }: { children: React.ReactNode }) {
  return (
    <ResizablePanelGroup direction="horizontal" className="min-h-screen  rounded-tl-xl ">
      <ResizablePanel defaultSize={25}>
        <div className="flex flex-col h-full  p-3">
          <div className="flex items-center h-8">
            <h1 className=" font-bold flex-1">Commandes</h1>
            <Menubar>
              <MenubarMenu>
              Profiles
              </MenubarMenu>
            </Menubar>
          </div>
        </div>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={75} minSize={50} maxSize={75}>
        <div className="">{children}</div>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
