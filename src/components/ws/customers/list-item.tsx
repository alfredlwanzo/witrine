"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { usePathname, useRouter } from "next/navigation";

type Props = {
  customer: any;
};

export function ListCustomersItem({ customer }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <div
      className={cn(
        "flex items-start gap-x-3 p-3 mb-1 hover:bg-muted rounded-lg",
        pathname === `/ws/customers/${customer}` && "bg-muted"
      )}
      onClick={() => {
        router.push(`/ws/customers/${customer}`);
      }}
    >
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div className="flex-1">
        <h3 className="text-sm">Alfred</h3>
        <p className=" text-muted-foreground text-sm">243978308679</p>
      </div>
      <Badge variant="outline">Beni</Badge>
    </div>
  );
}
