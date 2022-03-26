import React from "react";
import { useRouter } from "next/dist/client/router";
import SearchBar from "./SearchBar";

export default function Navbar() {

  const pathName = useRouter().pathname

  // controls if the searchbar should be shown or not.
  const handleNavbarElements = () => {
    if (pathName === "/search") {
      return <SearchBar/>
    }else{
      <></>
    }
  };

  return (
    <div className="w-full h-16 justify-between fixed bg-dark-gray flex items-center mr-10">
      
      {handleNavbarElements()}

      <div className=" absolute right-80 w-60 flex justify-between mr-10">
        <button className="hover:scale-x-105 focus:scale-95">
          <h1 className="text-white font-gotham m-0 text-xs ">KAYDOL</h1>
        </button>
        <button className="bg-slate-50 rounded-full px-5 hover:scale-x-105">
          <h1 className="text-black font-gotham m-0 p-3 text-xs">OTURUM AÇ</h1>
        </button>
      </div>
    </div>
  );
}
