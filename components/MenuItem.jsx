import React from "react";
import { AiOutlineHome, AiFillHome, AiFillHeart } from "react-icons/ai";
import { RiSearchLine, RiSearchFill } from "react-icons/ri";
import { BiLibrary } from "react-icons/bi";
import { MdAddBox } from "react-icons/md";

export default function MenuItem({ id, icon, text, selectedId }) {
  //return matched icon, change icon to its outlined version if it's selected menu item.
  const handleIcon = (name) => {
    switch (name) {
      case "AiOutlineHome":
        return id === selectedId ? (
          <AiFillHome color="white" size={30} />
        ) : (
          <AiOutlineHome color="white" size={30} />
        );
      case "AiFillHeart":
        return (
          <AiFillHeart
            color="white"
            size={24}
            className="bg-purple-500 p-0.5 rounded "
          />
        );
      case "RiSearchLine":
        return id === selectedId ? (
          <RiSearchFill color="white" size={30} />
        ) : (
          <RiSearchLine color="white" size={30} />
        );
      case "BiLibrary":
        return <BiLibrary color="white" size={30} />;
      case "MdAddBox":
        return <MdAddBox color="white" size={30} />;

      default:
        break;
    }
  };

  // checks if it's selected menu item, if so increase opacity of it to 100.
  const handleSelectedMenuItem = () => {
    if (selectedId === id) {
      return (
        <div className="flex items-center opacity-100 py-1.5 px-2 transition-opacity duration-200 cursor-pointer w-full hover:opacity-100 ">
          {handleIcon(icon)}
          <h2 className="text-white my-0 font-gotham pl-3">{text}</h2>
        </div>
      );
    } else {
      return (
        <div className="flex items-center opacity-70 py-1.5 px-2 transition-opacity duration-200 cursor-pointer w-full hover:opacity-100 ">
          {handleIcon(icon)}
          <h2 className="text-white my-0 font-gotham pl-3">{text}</h2>
        </div>
      );
    }
  };

  return handleSelectedMenuItem();
}
