import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { WSMenu } from "@/components/ws/menu";
import { WSSettingsMenu } from "@/components/ws/settings/settings-menu";
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
          <WSSettingsMenu
            items={[
              {
                key: "general",
                label: "Général",
                href: "/ws/settings",
                icon: <RxDesktop className="h-[1.2rem] w-[1.2rem]" />,
              },
              {
                key: "storage",
                label: "Stockage de médias",
                href: "/ws/settings/storage",
                icon: <RxDesktop className="h-[1.2rem] w-[1.2rem]" />,
              },
              {
                key: "shippings",
                label: "Zones des livraisons",
                href: "/ws/settings/shippings",
                icon: <RxDesktop className="h-[1.2rem] w-[1.2rem]" />,
              },
              {
                key: "payments",
                label: "Méthodes des paiements",
                href: "/ws/settings/payments",
                icon: <RxDesktop className="h-[1.2rem] w-[1.2rem]" />,
              },
              {
                key: "users",
                label: "Utilisateurs",
                href: "/ws/settings/users",
                icon: <FiUsers className="h-[1.2rem] w-[1.2rem]" />,
              },
              {
                key: "help",
                label: "Assistance witrine",
                href: "/ws/settings/help",
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
