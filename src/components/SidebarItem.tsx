'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";


interface Props{
    icon : React.ReactNode;
    title: string
    path: string
}
export  function SidebarItem({icon,title,path} : Props) {

    const pathName = usePathname();
    const isActive = pathName === path;

  return (
    <Link
      href={path}
      className={`relative px-4 py-3 flex items-center space-x-4 rounded-xl 
        hover:bg-gradient-to-r hover:bg-sky-600 hover:text-white
        ${
          isActive
            ? " text-white bg-gradient-to-r from-sky-600 to-cyan-400"
            : ""
        }`}
    >
      {icon}
      <span className="-mr-1 font-mediu">{title}</span>
    </Link>
  );
}