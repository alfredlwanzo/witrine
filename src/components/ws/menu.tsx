import { WSMenuItem, WSMenuItemType } from "./menu-item";

type Props = {
  items?: WSMenuItemType[];
  type?:"icon"|"full"
};
export function WSMenu({ items, type="full" }: Props) {
  return (
    <nav className="flex flex-col gap-y-3">
      {items?.map((menu) => (
        <WSMenuItem key={menu.key} item={menu} size={type} />
      ))}
    </nav>
  );
}
