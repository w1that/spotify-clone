import { Button, Input } from "antd";
import React from "react";
import { RiSearchLine } from "react-icons/ri";

export default function Navbar({ pathName }) {

  console.log(pathName)

  const handleNavbarElements = () => {
    if (pathName === "/search") {
      return <div className="relative pl-12 focus:outline-none ">
      <input
        className="ring-0 px-3 py-2 w-80 rounded-full relative pl-12 focus:outline-none "
        placeholder="Sanatçılar, şarkılar veya podcastler"
      ></input>
      <RiSearchLine size={30} className="absolute top-1 ml-2" />
    </div>;
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
