import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { Products } from "@/components/ws/products";

export default function WSLayoutProducts({
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
          className="rounded-tl-xl "
        >
          <ResizablePanel defaultSize={25}>
            <Products />
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
