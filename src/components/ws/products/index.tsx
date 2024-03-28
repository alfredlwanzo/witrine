"use client";

import { TooltipWrap } from "@/components/tooltip-wrap";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { HiPlus } from "react-icons/hi";
import { IoFilter } from "react-icons/io5";
import { LiaTagSolid } from "react-icons/lia";
import { ListProducts } from "./list";

export function Products() {
  return (
    <div className="flex flex-col ">
      <div className="h-16 flex items-center px-3">
        <div>
          <Select
            defaultValue="products"
            onValueChange={(value) => {
              console.log(value);
            }}
          >
            <SelectTrigger defaultValue="products" className=" w-32 font-bold">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="products" className="font-bold">
                  Produits
                </SelectItem>
                <SelectItem value="categories" className="font-bold">
                  Categories
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className=" flex-1" />
        <TooltipWrap content="Créer un produit">
          <Button variant="ghost" size="icon">
            <HiPlus className="h-[1.2rem] w-[1.2rem]" />
          </Button>
        </TooltipWrap>
        <Button variant="ghost" size="icon">
          <LiaTagSolid className="h-[1.2rem] w-[1.2rem]" />
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              <IoFilter className="h-[1.2rem] w-[1.2rem]" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Publiés</DropdownMenuItem>
            <DropdownMenuItem>Brouillons</DropdownMenuItem>
            <DropdownMenuItem>Archives</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <ListProducts withSearchBar className="h-[calc(100vh-169px)] 2xl:h-[calc(920px-169px)]" />
    </div>
  );
}
