import { Products } from "@/components/ws/products";


export default function WSPageProducts() {
  return (
    <>
      <div className="h-full hidden lg:flex justify-center items-center">
        <p className="text-sm text-muted-foreground">
          Cliquer sur un produit pour l&apos;afficher ici
        </p>
      </div>
      <div className="lg:hidden">
        <Products />
      </div>
    </>
  );
}
