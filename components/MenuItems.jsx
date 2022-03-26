import { observer } from "mobx-react-lite";
import Link from "next/link";
import React from "react";
import MenuItem from "./MenuItem";

function MenuItems({ store }) {
 
  return (
    <div className="mt-5">
      <Link href={'/'} passHref>
      <div onClick={() => store.setSelectedMenuItemId(0)}>
        <MenuItem
          id={0}
          selectedId={store.selectedMenuItemId}
          icon="AiOutlineHome"
          text="Ana sayfa"
        />
      </div>
      </Link>

      <Link href={'/search'} passHref>
      <div onClick={() => store.setSelectedMenuItemId(1)}>
        <MenuItem
          id={1}
          selectedId={store.selectedMenuItemId}
          icon="RiSearchLine"
          text="Ara"
        />
      </div>
      </Link>

      <div onClick={() => store.setSelectedMenuItemId(2)}>
        <MenuItem
          id={2}
          selectedId={store.selectedMenuItemId}
          icon="BiLibrary"
          text="Kitaplıgın"
        />
      </div>

      <div className="mt-5">
        <div onClick={() => store.setSelectedMenuItemId(3)}>
          <MenuItem
            id={3}
            selectedId={store.selectedMenuItemId}
            icon="MdAddBox"
            text="Calma Listesi Olustur"
          />
        </div>
        <div onClick={() => store.setSelectedMenuItemId(4)}>
          for aligning purpose I wrapped the last one into this div.
          <div className="pl-0.5">
            <MenuItem
              id={4}
              selectedId={store.selectedMenuItemId}
              icon="AiFillHeart"
              text="Begenilen Sarkılar"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default observer(MenuItems);
