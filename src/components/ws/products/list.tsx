import { SearchBar } from "@/components/searchBar";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { ListProductsItem } from "./list-item";

type Props = {
  withSearchBar?: boolean;
  className?: string;
};
export function ListProducts({ withSearchBar = false, className }: Props) {
  return (
    <>
      {withSearchBar && (
        <div className="px-3">
          <SearchBar onValueChange={({ value }) => {}} />
        </div>
      )}
      <ScrollArea className={cn(className, "pt-3 px-3 pb-1")}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map((item) => (
          <ListProductsItem key={item} product={item} />
        ))}
        <ScrollBar orientation="vertical" />
      </ScrollArea>
    </>
  );
}
