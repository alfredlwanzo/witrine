import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { HiPlus } from "react-icons/hi";
import { LuHistory } from "react-icons/lu";
import { TooltipWrap } from "@/components/tooltip-wrap";
import { ListOrders } from "@/components/ws/orders/list";
import { Button } from "@/components/ui/button";

export function Orders(){
    return <div className="h-full flex flex-col">
    <div className="h-16 flex items-center px-3">
      <h1 className=" font-bold flex-1">Commandes</h1>
      <TooltipWrap content="Créer une commande">
        <Button variant="ghost" size="icon">
          <HiPlus className="h-[1.2rem] w-[1.2rem]" />
        </Button>
      </TooltipWrap>
      <TooltipWrap content="Historique de commandes">
        <Button variant="ghost" size="icon">
          <LuHistory className="h-[1.2rem] w-[1.2rem]" />
        </Button>
      </TooltipWrap>
    </div>
    <Tabs defaultValue="pending" className="">
      <TabsList className=" justify-start w-[calc(100%-24px)] ml-3">
        <TabsTrigger value="pending">En attente</TabsTrigger>
        <TabsTrigger value="processing">Préparation</TabsTrigger>
        <TabsTrigger value="delivery">Livraison</TabsTrigger>
      </TabsList>
      <TabsContent value="pending">
        <ListOrders withSearchBar className=" h-[calc(100vh-218px)] 2xl:h-[calc(920px-218px)]" />
      </TabsContent>
      <TabsContent value="processing">
        <ListOrders withSearchBar className=" h-[calc(100vh-218px)] 2xl:h-[calc(920px-218px)]" />
      </TabsContent>
      <TabsContent value="delivery">
        <ListOrders withSearchBar className=" h-[calc(100vh-218px)] 2xl:h-[calc(920px-218px)]" />
      </TabsContent>
    </Tabs>
  </div>
}