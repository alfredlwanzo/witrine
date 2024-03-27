import { Button } from "@/components/ui/button";
import { LeftSideMenuBar } from "@/components/ws/left-side-menu-bar";
import { UserAvatar } from "@/components/ws/user-avatar";
import Image from "next/image";

export default function WSLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-screen-2xl mx-auto  h-screen 2xl:h-[920px] 2xl:mt-8 flex flex-col  2xl:border 2xl:rounded-xl">
      <header className="h-16 flex gap-3 items-center px-3">
        <Button variant="ghost" size="icon">
        <Image
            src="/witrine-icon.svg"
            alt="witrine logo"
            height={200}
            width={200}
            className=" h-4 w-auto text-primary"
          />
          </Button>
        <h1 className="font-bold">WITRINE</h1>
        <div className="flex-1"/>
        <UserAvatar/>
      </header>
      <main className="flex-1  flex max-h-[calc(100vh-64px)] 2xl:max-h-[calc(920px-64px)]">
        <LeftSideMenuBar />
        <div className="flex-1 rounded-tl-xl border-l border-t">
          {children}
        </div>
      </main>
    </div>
  );
}
