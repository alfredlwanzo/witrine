"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { TooltipWrap } from "@/components/tooltip-wrap";

export type WSSettingMenuItemType = {
  key: string | number;
  label: string;
  href: string;
  icon?: React.ReactNode;
};

type Props = {
  item: WSSettingMenuItemType;
};
export function WSSettingMenuItem({ item }: Props) {
  const pathname = usePathname();
  return (
    <TooltipWrap content={item.label} side="right">
      <Link
        key={item.key}
        href={item.href}
        className={cn(
          "h-10 px-4 py-2 relative flex items-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-muted/90",
          pathname === item.href && " bg-muted"
        )}
      >
        {item.icon}
        <span className={cn("ml-3")}>{item.label}</span>
        <span
          className={cn(
            pathname === item.href ? "block" : "hidden",
            "absolute left-0 bg-primary h-[calc(100%-50%)] w-[3px] rounded"
          )}
        />
      </Link>
    </TooltipWrap>
  );
}
