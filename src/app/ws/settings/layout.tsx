import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { Settings } from "@/components/ws/settings";

export default function WSLayoutSettings({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="block lg:hidden">{children}</div>
      <div className="hidden lg:block">
        <ResizablePanelGroup
          direction="horizontal"
          className=" rounded-tl-xl "
        >
          <ResizablePanel defaultSize={25}>
            <Settings />
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel defaultSize={75} minSize={50} maxSize={75}>
            {children}
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
    </>
  );
}
