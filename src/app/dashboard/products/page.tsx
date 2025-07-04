import { ProductCard } from "@/app/products";
import { products } from '@/app/products/data/products';

export default function ProductsPage() {

    const productslist = products;
  return (
    <div className="w-full grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-2">
     {productslist.map((p) => (
        <ProductCard key={p.id} product={p}  />
     ))}
     
    </div>
  );
}

