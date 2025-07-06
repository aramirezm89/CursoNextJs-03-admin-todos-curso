import Image from "next/image";
import Link from "next/link";
import { CiLogout } from "react-icons/ci";
import { SidebarItem } from "./SidebarItem";
import {
  IoCalendarOutline,
  IoCheckboxOutline,
  IoListOutline,
  IoCodeWorkingOutline,
  IoBasketOutline
} from "react-icons/io5";
import { auth } from "@/app/auth";

const menuItems = [
  {
    icon: <IoCalendarOutline size={30} />,
    path: "/dashboard",
    title: "Dashboard",
  },
  {
    icon: <IoCheckboxOutline size={30} />,
    path: "/dashboard/rest-todos",
    title: "Rest TODOS",
  },
  {
    icon: <IoListOutline size={30} />,
    path: "/dashboard/server-todos",
    title: "Server Actions",
  },
  {
    icon: <IoCodeWorkingOutline size={30} />,
    path: "/dashboard/cookies",
    title: "Cookies",
  },
  {
    icon: <IoBasketOutline size={30} />,
    path: "/dashboard/products",
    title: "Products",
  },
];
export async  function SidebarComponent() {
   const session = await auth();
   const {user} = session || {};
  return (
    <aside className="ml-[-100%] fixed z-10 top-0 pb-3 px-6 w-full flex flex-col justify-between h-screen border-r bg-white transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]">
      <div className="w-full">
        <div className="py-4 w-full flex justify-content-center">
          {/* TODO: Next/Link hacia dashboard */}
          <Link href="#" title="home" className="mx-auto">
            {/* Next/Image */}
            <Image
              src="https://i.pinimg.com/736x/ec/bf/66/ecbf66484f8439fd7021f3ef224a50a8.jpg"
              className="w-32"
              alt="tailus logo"
              width={100}
              height={100}
            />
          </Link>
        </div>

        <div className="mt-8 text-center">
          {/* Next/Image */}
          {user?.image ? (
            <Image
              src={user.image}
              alt="User Avatar"
              width={100}
              height={100}
              className="mx-auto rounded-full"
            />
          ) : (
            <Image
              src="https://omniretro.com/wp-content/uploads/2017/04/logo_batman_pequeno.jpg"
              alt=""
              className="w-10 h-10 m-auto rounded-full object-cover lg:w-28 lg:h-28"
              width={100}
              height={100}
            />
          )}
          <h5 className="hidden mt-4 text-xl font-semibold text-gray-600 lg:block">
            {user?.name ?? "User Name"}
          </h5>
          <span className="hidden text-gray-400 lg:block">Admin</span>
        </div>

        <ul className="space-y-2 tracking-wide mt-8">
          {menuItems.map((item) => (
            <SidebarItem key={item.title} {...item} />
          ))}
        </ul>
      </div>

      <div className="px-6 -mx-6 pt-4 flex justify-between items-center border-t">
        <button className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group cursor-pointer">
          <CiLogout />
          <span className="group-hover:text-gray-700">Logout</span>
        </button>
      </div>
    </aside>
  );
}
