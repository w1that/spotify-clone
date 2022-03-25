import { Button } from "antd";
import React from "react";
import Logo from "./Logo";
import  MenuItems  from "./MenuItems";
import menuItemStore from "../mobx/MenuItemStore";

function LeftMenu(){


    return (
      <div className="p-3 px-4 my-3 h-screen fixed bg-black">
             

        <Logo />
        <MenuItems store={menuItemStore}/>

        <div className="absolute bottom-14 ml-3 h-10 flex flex-col justify-between">
          <h6 className="m-0 text-white text-xs opacity-80 hover:underline cursor-pointer font-light">
            Çerezler
          </h6>
          <h6 className="m-0 text-white text-xs opacity-80 hover:underline cursor-pointer font-light">
            Gizlilik
          </h6>
        </div>
      </div>
    );
  }

export default LeftMenu