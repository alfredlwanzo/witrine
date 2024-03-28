import { ScrollArea } from "@/components/ui/scroll-area";
import { WSSettingMenuItem, WSSettingMenuItemType } from "./setting-menu-item";

type Props = {
  items?: WSSettingMenuItemType[];
  className?: string;
};
export function WSSettingsMenu({ items }: Props) {
  return (
    <ScrollArea className="h-[calc(100vh-129px)] 2xl:h-[calc(920px-129px)] px-3 pb-1">
      <nav className="flex flex-col gap-y-1">
        {items?.map((menu) => (
          <WSSettingMenuItem key={menu.key} item={menu} />
        ))}
      </nav>
    </ScrollArea>
  );
}
