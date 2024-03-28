import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function WSPaymentsPage() {
  return (
    <div>
      <div className=" h-16 px-4 flex items-center gap-x-3">
        <div>
          <h1 className=" font-bold">Méthodes des paiements</h1>
        </div>
        <div className="flex-1" />
      </div>
      <ScrollArea className="h-[calc(100vh-129px)] 2xl:h-[calc(920px-129px)] px-4 pb-4  ">
        <div className="flex flex-col gap-4">
          <Card className="shadow-none">
            <CardHeader>
              <CardTitle>Paiement à la livraison</CardTitle>
              <CardDescription>Du cash à la livraison</CardDescription>
            </CardHeader>
            <CardContent></CardContent>
          </Card>
          <Card className="shadow-none">
            <CardHeader>
              <CardTitle>Mobile money (FlexPay)</CardTitle>
              <CardDescription>Airtel money, M-pesa, Orange money, Africel money</CardDescription>
            </CardHeader>
            <CardContent></CardContent>
          </Card>
        </div>
      </ScrollArea>
    </div>
  );
}
