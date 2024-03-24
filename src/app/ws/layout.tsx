import { ModeToggle } from "@/components/mode-toggle";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { RxBoxModel } from "react-icons/rx";
import { FiHome, FiShoppingCart, FiUsers } from "react-icons/fi";
import { PiGear } from "react-icons/pi";
import { UserAvatar } from "@/components/user-avatar";
import { Separator } from "@/components/ui/separator";

export default function WSLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex ">
      <aside className="flex flex-col items-center p-3">
        <div className="flex flex-col gap-y-3">
          <Link href="/ws">
            <Button variant="ghost" size="icon">
              {/* <RxHome /> */}
              <FiHome className="h-[1.2rem] w-[1.2rem]" />
            </Button>
          </Link>
          <Link href="/ws/orders">
            <Button variant="ghost" size="icon">
              <FiShoppingCart className="h-[1.2rem] w-[1.2rem]" />
            </Button>
          </Link>
          <Link href="/ws/products">
            <Button variant="ghost" size="icon">
              <RxBoxModel className="h-[1.2rem] w-[1.2rem]" />
              {/* <BsBoxSeam className=" -translate-x-1 -v" /> */}
            </Button>
          </Link>
          <Link href="/ws/customers">
            <Button variant="ghost" size="icon">
              <FiUsers className="h-[1.2rem] w-[1.2rem]" />
            </Button>
          </Link>
        </div>
        <div className="flex-1" />
        <div className="flex flex-col gap-y-3">
          <ModeToggle />
          <Separator/>
          <Link href="/ws/settings">
            <Button variant="ghost" size="icon">
              {/* <RxGear /> */}
              <PiGear className="h-[1.2rem] w-[1.2rem]" />
            </Button>
          </Link>
          <UserAvatar />
        </div>
      </aside>
      <main className="flex-1 rounded-tl-xl border-l border-t">{children}</main>
    </div>
  );
}
