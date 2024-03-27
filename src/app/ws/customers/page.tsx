import { Customers } from "@/components/ws/customers";

export default function WSPageCustomers() {
  return (
    <>
      <div className="h-full hidden lg:flex justify-center items-center">
        <p className="text-sm text-muted-foreground">
          Cliquer sur un client pour l&apos;afficher ici
        </p>
      </div>
      <div className="lg:hidden">
        <Customers />
      </div>
    </>
  );
}
