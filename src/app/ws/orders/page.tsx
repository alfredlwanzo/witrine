import { Orders } from "@/components/ws/orders";

export default function WSPageOrders() {
  return (
    <>
      <div className="h-full hidden lg:flex justify-center items-center">
        <p className="text-sm text-muted-foreground">
          Cliquer sur une commande pour l&apos;afficher ici
        </p>
      </div>
      <div className="lg:hidden">
        <Orders />
      </div>
    </>
  );
}
