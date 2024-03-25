"use client";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { IoFilter } from "react-icons/io5";
import { HiPlus } from "react-icons/hi";
import { LiaTagSolid } from "react-icons/lia";
import { TbCategory } from "react-icons/tb";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SearchBar } from "@/components/searchBar";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function WSLayoutProducts({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ResizablePanelGroup
      direction="horizontal"
      className="h-screen  rounded-tl-xl "
    >
      <ResizablePanel defaultSize={25}>
        <div className="flex flex-col h-full  px-3">
          <div className="flex items-center h-16">
            <div>
              <Select
                defaultValue="products"
                onValueChange={(value) => {
                  console.log(value);
                }}
              >
                <SelectTrigger
                  defaultValue="products"
                  className=" w-32 font-bold"
                >
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
            <Button variant="ghost" size="icon">
              <HiPlus className="h-[1.2rem] w-[1.2rem]" />
            </Button>
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
            {/* <Button variant="ghost" size="icon">
              <TbCategory className="h-[1.2rem] w-[1.2rem]" />
            </Button> */}
          </div>
          <SearchBar />
          <ScrollArea className="h-[calc(100vh-105px)]  pt-3 pb-1">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map((item) => (
              <div
                key={item}
                className="flex items-start gap-x-3 p-3 hover:bg-muted rounded-lg"
              >
                <Avatar className=" rounded-lg">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>PR</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <h3 className="text-sm">Produit {item}</h3>
                  <p className=" text-muted-foreground text-sm">
                    {new Intl.NumberFormat("fr-FR", {
                      style: "currency",
                      currency: "USD",
                    }).format(1000000)}
                  </p>
                </div>
                <div className="flex flex-col items-end">
                  <p className="text-xs">En stock</p>
                  <Badge variant="outline">0</Badge>
                </div>
              </div>
            ))}
            <ScrollBar orientation="vertical" />
          </ScrollArea>
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={75} minSize={50} maxSize={75}>
        <div className="">{children}</div>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
