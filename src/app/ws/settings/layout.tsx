import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { WSMenu } from "@/components/ws/menu";
import { FiUsers } from "react-icons/fi";
import { RxDesktop, RxQuestionMark } from "react-icons/rx";

export default function WSLayoutSettings({
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
          <div className="h-16 flex items-center ">
            <h1 className="font-bold flex-1">Paramètres</h1>
          </div>
          <WSMenu
            items={[
              {
                key: "general",
                label: "Général",
                href: "/ws/settings",
                icon: <RxDesktop className="h-[1.2rem] w-[1.2rem]" />,
              },
              {
                key: "storage",
                label: "Stockage",
                href: "/ws/settings/storage",
                icon: <RxDesktop className="h-[1.2rem] w-[1.2rem]" />,
              },
              {
                key: "shippings",
                label: "Livraisons",
                href: "/ws/settings/shipping",
                icon: <RxDesktop className="h-[1.2rem] w-[1.2rem]" />,
              },
              {
                key: "payments",
                label: "Paiements",
                href: "/ws/settings/payment",
                icon: <RxDesktop className="h-[1.2rem] w-[1.2rem]" />,
              },
              {
                key: "users",
                label: "Utilisateurs",
                href: "/ws/settings/users",
                icon: <FiUsers className="h-[1.2rem] w-[1.2rem]" />,
              },
              {
                key: "general",
                label: "Géneral",
                href: "/ws",
                icon: <RxDesktop className="h-[1.2rem] w-[1.2rem]" />,
              },
              {
                key: "assistance",
                label: "Assistance",
                href: "/ws/assistance",
                icon: <RxQuestionMark className="h-[1.2rem] w-[1.2rem]" />,
              },
            ]}
          />
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={75} minSize={50} maxSize={75}>
        <div className="">{children}</div>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
