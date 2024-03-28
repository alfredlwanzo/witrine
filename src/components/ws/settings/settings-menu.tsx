import { WSSettingMenuItem, WSSettingMenuItemType } from "./setting-menu-item";

type Props = {
  items?: WSSettingMenuItemType[];
};
export function WSSettingsMenu({ items }: Props) {
  return (
    <nav className="flex flex-col gap-y-3">
      {items?.map((menu) => (
        <WSSettingMenuItem key={menu.key} item={menu} />
      ))}
    </nav>
  );
}
