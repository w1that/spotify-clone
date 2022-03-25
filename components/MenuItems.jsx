import React from "react";
import MenuItem from "./MenuItem";

export default function MenuItems() {
  return (
    <div className="mt-5">
      <MenuItem icon="AiOutlineHome" text="Ana sayfa" />
      <MenuItem icon="FiSearch" text="Ara" />
      <MenuItem icon="BiLibrary" text="Kitaplıgın" />
      
      <div className="mt-5">
        <MenuItem icon="MdAddBox" text="Calma Listesi Olustur" />
        {/* for aligning purpose I wrapped the last one into this div.  */}
        <div className="pl-0.5">
          <MenuItem icon="AiFillHeart" text="Begenilen Sarkılar" />
        </div>
      </div>
    </div>
  );
}
