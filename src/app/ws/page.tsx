import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { Orders } from "@/components/ws/orders";

export default function WSHomePage() {
  return (
    <div>
      <ResizablePanelGroup
        direction="horizontal"
        className="h-screen  rounded-tl-xl "
      >
        <ResizablePanel defaultSize={75} minSize={50} maxSize={75}>
          <div className="h-16 flex items-center px-3">
            <h1 className=" font-bold flex-1">Dashboard</h1>
          </div>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={25}>
          <Orders />
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}
