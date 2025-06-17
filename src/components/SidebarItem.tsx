'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";


interface Props{
    icon : React.ReactNode;
    title: string
    path: string
}
export default function SidebarItem({icon,title,path} : Props) {

    const pathName = usePathname();
    const isActive = pathName === path;

  return (
    <Link
      href={path}
      className={`relative px-4 py-3 flex items-center space-x-4 rounded-xl ${
        isActive ? " text-white bg-gradient-to-r from-sky-600 to-cyan-400" : ""
      }`}
    >
      {icon}
      <span className="-mr-1 font-medium">{title}</span>
    </Link>
  );
}