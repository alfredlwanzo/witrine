import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { RxBoxModel } from "react-icons/rx";
import { FiHome, FiShoppingCart, FiUsers } from "react-icons/fi";
import { PiGear } from "react-icons/pi";
import { UserAvatar } from "@/components/ws/user-avatar";
import { Separator } from "@/components/ui/separator";
import { TooltipWrap } from "@/components/tooltip-wrap";
import { cn } from "@/lib/utils";
import { WSMenu } from "./menu";
import { WSMenuItem, WSMenuItemType } from "./menu-item";

const menuItems: WSMenuItemType[] = [
  {
    key: "dashboard",
    label: "Dashbord",
    href: "/ws",
    icon: <FiHome className="h-[1.2rem] w-[1.2rem]" />,
  },
  {
    key: "orders",
    label: "Commandes",
    href: "/ws/orders",
    icon: <FiShoppingCart className="h-[1.2rem] w-[1.2rem]" />,
  },
  {
    key: "products",
    label: "Produits",
    href: "/ws/products",
    icon: <RxBoxModel className="h-[1.2rem] w-[1.2rem]" />,
  },
  {
    key: "customers",
    label: "Clients",
    href: "/ws/customers",
    icon: <FiUsers className="h-[1.2rem] w-[1.2rem]" />,
  },
];

export function LeftSideMenuBar() {
  return (
    <aside className="h-full flex flex-col items-center p-3">
      <WSMenu items={menuItems}  />
      <div className="flex-1" />
      <nav className="flex flex-col gap-y-3">
        <ModeToggle />
        <Separator />
        <WSMenuItem
          item={{
            key: "settings",
            label: "Paramètres",
            icon: <PiGear className="h-[1.2rem] w-[1.2rem]" />,
            href: "/ws/settings",
          }}
        />
        <UserAvatar />
      </nav>
    </aside>
  );
}
