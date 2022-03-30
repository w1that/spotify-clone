import React, { useState, useEffect } from "react";
import { useRouter } from "next/dist/client/router";
import SearchBar from "./SearchBar";
import Link from "next/link";
import { observer } from "mobx-react";
import userStore from "../mobx/UserStore";
import { RiUser3Line } from "react-icons/ri";
import { BiDownArrow } from "react-icons/bi";

function Navbar() {
  const pathName = useRouter().pathname;
  const [className, setClassName] = useState("");

  useEffect(() => {
    if(pathName.includes('/playlist')){
      setClassName(
        "w-full h-16 justify-between fixed bg-light-gray flex items-center mr-10 z-20"
      );
      return
    }else{
      if (userStore.currentUserId) {
        setClassName(
          "w-full h-16 justify-between fixed bg-transparent flex items-center mr-10 z-20"
        );
      } else {
        setClassName(
          "w-full h-16 justify-between fixed bg-dark-gray flex items-center mr-10 z-20"
        );
      }
    }
    
  }, []);

  // controls if the searchbar should be shown or not.
  const handleNavbarElements = () => {
    if (pathName === "/search") {
      return <SearchBar />;
    } else {
      <></>;
    }
  };

  return (
    <div className={className}>
      {handleNavbarElements()}

      {userStore.currentUserId ? (
        <div className=" absolute right-40 w-60  flex z-20 justify-between mr-10">
          <button className="w-28 flex bg-profile-gray justify-between px-2 rounded-full p-1 items-center hover:bg-hover-gray duration-300">
            <RiUser3Line color="white" size={30} />
            <h4 className="text-white m-0">
              {userStore.currentUserId.username}
            </h4>
            <BiDownArrow color="white" size={16} />
          </button>
        </div>
      ) : (
        <div className=" absolute right-80 w-60 flex z-20 justify-between mr-10">
          <button className="hover:scale-x-105 focus:scale-95">
            <h1 className="text-white font-gotham m-0 text-xs ">KAYDOL</h1>
          </button>
          <Link href={"/login"} passHref>
            <button className="bg-slate-50 rounded-full px-5 hover:scale-x-105">
              <h1 className="text-black font-gotham m-0 p-3 text-xs">
                OTURUM AÇ
              </h1>
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default observer(Navbar);
