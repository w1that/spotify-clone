import React from "react";
import MenuItem from "./MenuItem";

export default function MenuItems({ setSelectedItem, selectedItem }) {
  return (
    <div className="mt-5">
      <div onClick={() => setSelectedItem(0)}>
        <MenuItem
          id={0}
          selectedItem={selectedItem}
          icon="AiOutlineHome"
          text="Ana sayfa"
        />
      </div>

      <div onClick={() => setSelectedItem(1)}>
      <MenuItem id={1} selectedItem={selectedItem} icon="RiSearchLine" text="Ara" />
      </div>

      <div onClick={() => setSelectedItem(2)}>
      <MenuItem
        id={2}
        selectedItem={selectedItem}
        icon="BiLibrary"
        text="Kitaplıgın"
      />
      </div>


      <div className="mt-5">
      <div onClick={() => setSelectedItem(3)}>
        <MenuItem
          id={3}
          selectedItem={selectedItem}
          icon="MdAddBox"
          text="Calma Listesi Olustur"
        />
        </div>
        <div onClick={() => setSelectedItem(4)}>
        {/* for aligning purpose I wrapped the last one into this div.  */}
        <div className="pl-0.5">
          <MenuItem
            id={4}
            selectedItem={selectedItem}
            icon="AiFillHeart"
            text="Begenilen Sarkılar"
          />
        </div>
        </div>
      </div>
    </div>
  );
}
