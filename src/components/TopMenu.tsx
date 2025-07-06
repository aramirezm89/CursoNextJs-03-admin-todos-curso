import { cookies } from "next/headers";
import Link from "next/link";
import {
  CiChat1,
  CiMenuBurger,
  CiSearch,
  CiShoppingCart,
} from "react-icons/ci";

export default async function TopMenu() {
  const cookiesStore = await cookies();

  const getTotalCartItems = () => {
    const cookieCart = cookiesStore.get("cart")?.value ?? null;
    if (!cookieCart) return 0;
    const cartItems: Record<string, number> = JSON.parse(cookieCart);
    return Object.values(cartItems).reduce(
      (acumulador, productQuantity) => acumulador + productQuantity,
      0
    );
  };
  return (
    <div className="sticky z-10 top-0 h-16 border-b bg-white lg:py-2.5">
      <div className="px-6 flex items-center justify-between space-x-4">
        <h5 className="text-2xl text-gray-600 font-medium lg:block">
          Dashboard
        </h5>
        <button className="w-12 h-16 -mr-2 border-r lg:hidden">
          <CiMenuBurger size={30} />
        </button>
        <div className="flex space-x-2">
          <div className="md:block">
            <div className="relative flex items-center text-gray-400 focus-within:text-cyan-400">
              <span className="absolute left-4 h-6 flex items-center pr-3 border-r border-gray-300">
                <CiSearch />
              </span>
              <input
                type="search"
                name="leadingIcon"
                id="leadingIcon"
                placeholder="Search here"
                className="w-full pl-14 pr-4 py-2.5 rounded-xl text-sm text-gray-600 outline-none border border-gray-300 focus:border-cyan-300 transition"
              />
            </div>
          </div>

          <button className="flex items-center justify-center w-10 h-10 rounded-xl border bg-gray-100 focus:bg-gray-100 active:bg-gray-200 md:hidden">
            <CiSearch />
          </button>
          <button className="flex items-center justify-center w-10 h-10 rounded-xl border bg-gray-100 focus:bg-gray-100 active:bg-gray-200">
            <CiChat1 size={25} />
          </button>
          <Link href="/dashboard/cart" className="flex items-center justify-around w-15 h-10 rounded-xl border bg-gray-100 focus:bg-gray-100 active:bg-gray-200">
            {getTotalCartItems() > 0 && (
              <span className=" text-blue-500 font-bold text-[20px]">
                {getTotalCartItems()}
              </span>
            )}

            <CiShoppingCart size={25} />
          </Link>
        </div>
      </div>
    </div>
  );
}
