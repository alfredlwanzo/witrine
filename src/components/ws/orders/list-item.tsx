"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { usePathname, useRouter } from "next/navigation";

type Props = {
  order: any;
};

export function ListOrdersItem({ order }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <div
      className={cn(
        "flex items-start gap-x-3 p-3 mb-1 hover:bg-muted rounded-lg",
        pathname === `/ws/orders/${order}`&&"bg-muted"
      )}
      onClick={() => {
        router.push(`/ws/orders/${order}`);
      }}
    >
      <Avatar className=" rounded-lg">
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>OR</AvatarFallback>
      </Avatar>
      <div className="flex-1">
        <h3 className="text-sm">#8765343{order}</h3>
        <p className=" text-muted-foreground text-sm">
          {new Intl.NumberFormat("fr-FR", {
            style: "currency",
            currency: "USD",
          }).format(1000000)}
        </p>
      </div>
      <div className="flex flex-col items-end">
        {/* <p className="text-xs">status</p> */}
        <div className="h-2 w-2 rounded-full bg-green-500"></div>
      </div>
    </div>
  );
}
