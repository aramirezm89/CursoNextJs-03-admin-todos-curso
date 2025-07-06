import { ItemCard } from "@/app/shoping-cart";
import { cookies } from "next/headers";
import { Product, products } from "@/app/products/data/products";



export const metadata = {
 title: 'Carrito de Compras',
 description: 'Carrito de Compras',
};

interface ProductInCart{
  product : Product;
  quantity: number;
}

const getProductsInCart = (data: {[id:string]: number}) =>{
  const productsCart : ProductInCart[] = [];
  const productsIds  = Object.keys(data);
  if(productsIds.length === 0) return [];

for(const id  of productsIds){
  const productBD = products.find(p => p.id === id);
  if(productBD){
    productsCart.push({
      product:productBD,
      quantity:data[id]

    })
  }
}
return productsCart;
}

export default async function CartPage() {

  const cookiesStore = await cookies();
  const cookiesCart =  JSON.parse(cookiesStore.get("cart")?.value ?? "{}") as {[id:string]: number};
  const productsInCart = getProductsInCart(cookiesCart);

  const getTotal = () =>{
    return productsInCart.reduce((total, { product, quantity }) => {
      return total + (product.price * quantity);
    }, 0).toFixed(2);
  }

  const totalandTax = Number(getTotal()) + Number(getTotal()) * 0.15;
  return (
    <div>
      <h1 className="text-3xl font-bold">Productos</h1>
      <hr className="my-2" />
      <div className="grid grid-cols-1 sm:grid-cols-2  gap-2">
        <div className="grid grid-cols-1  gap-2">
          {productsInCart.map(({ product, quantity }) => (
            <ItemCard product={product} quantity={quantity} key={product.id} />
          ))}
        </div>

        <div className="flex flex-col items-center ">
          <h3 className="text-2xl font-bold">Resumen del Pedido</h3>
          <div className="flex flex-col w-100 mt-2 border-2 ">
            {productsInCart.map(({ product, quantity }) => (
              <div
                key={product.id}
                className="flex justify-between w-full border-1"
              >
                <span className="font-bold">{product.name}</span>
                <span className="font-bold">{quantity}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col w-100 mt-2 border-2 ">
           <h3 className="text-2xl font-bold">Total: {getTotal()}</h3> 
           <h3 className="text-2xl font-bold">Total con impuestos: {totalandTax.toFixed(2)}</h3> 
          </div>
        </div>
      </div>
    </div>
  );
}