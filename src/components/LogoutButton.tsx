'use client';

import { useSession } from "next-auth/react";
import { CiLogout, CiUser } from "react-icons/ci";

import { signOut,signIn } from "next-auth/react";




 


export const LogoutButton = () => {
    const {data : session,status} = useSession();

    
const onLogout = () =>{
signOut();

}
    if(status === "loading") {
        return( <div className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600"><span>Loading...</span></div>);
    }

    if(status === "unauthenticated") {
     return (
       <button
         onClick={() => signIn()}
         className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group cursor-pointer"
       >
         <CiUser />
         <span className="group-hover:text-gray-700">Login</span>
       </button>
     );
     
    }
    
  return (
    <button onClick={() =>onLogout()} className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group cursor-pointer">
      <CiLogout />
      <span className="group-hover:text-gray-700">Logout</span>
    </button>
  );
};
