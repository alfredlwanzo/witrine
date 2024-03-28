import { WSSettingsMenu } from "@/components/ws/settings/settings-menu";
import {
  TbUsers,
  TbCloudUpload,
  TbMoneybag,
  TbTruckDelivery,
  TbQuestionMark,
  TbDeviceDesktop
} from "react-icons/tb";

export function Settings() {
  return (
    <div className="flex flex-col h-full  ">
      <div className="h-16 flex items-center px-3">
        <h1 className="font-bold flex-1">Paramètres</h1>
      </div>
      <WSSettingsMenu
        className=""
        items={[
          {
            key: "general",
            label: "Général",
            href: "/ws/settings",
            icon: <TbDeviceDesktop className="h-[1.2rem] w-[1.2rem]" />,
          },
          {
            key: "storage",
            label: "Stockage de médias",
            href: "/ws/settings/storage",
            icon: <TbCloudUpload className="h-[1.2rem] w-[1.2rem]" />,
          },
          {
            key: "shippings",
            label: "Zones des livraisons",
            href: "/ws/settings/shippings",
            icon: <TbTruckDelivery className="h-[1.2rem] w-[1.2rem]" />,
          },
          {
            key: "payments",
            label: "Méthodes des paiements",
            href: "/ws/settings/payments",
            icon: <TbMoneybag className="h-[1.2rem] w-[1.2rem]" />,
          },
          {
            key: "users",
            label: "Utilisateurs",
            href: "/ws/settings/users",
            icon: <TbUsers className="h-[1.2rem] w-[1.2rem]" />,
          },
          {
            key: "help",
            label: "Assistance",
            href: "/ws/settings/help",
            icon: <TbQuestionMark className="h-[1.2rem] w-[1.2rem]" />,
          },
        ]}
      />
    </div>
  );
}
