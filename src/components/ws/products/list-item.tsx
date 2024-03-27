"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { usePathname, useRouter } from "next/navigation";

type Props = {
  product: any;
};

export function ListProductsItem({ product }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <div
      className={cn(
        "flex items-start gap-x-3 p-3 mb-1 hover:bg-muted rounded-lg",
        pathname === `/ws/products/${product}` && "bg-muted"
      )}
      onClick={() => {
        router.push(`/ws/products/${product}`);
      }}
    >
      <Avatar className=" rounded-lg">
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>PR</AvatarFallback>
      </Avatar>
      <div className="flex-1">
        <h3 className="text-sm">Produit {product}</h3>
        <p className=" text-muted-foreground text-sm">
          {new Intl.NumberFormat("fr-FR", {
            style: "currency",
            currency: "USD",
          }).format(1000000)}
        </p>
      </div>
      <div className="flex flex-col items-end">
        <p className="text-xs">Stock</p>
        <Badge variant="outline">0</Badge>
      </div>
    </div>
  );
}
