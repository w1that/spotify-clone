import React from "react";
import { AiOutlineHome, AiFillHeart } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { BiLibrary } from "react-icons/bi";
import { MdAddBox } from "react-icons/md";

export default function MenuItem({ icon, text }) {

    //return matched icon
  const handleIcon = (name) => {
    switch (name) {
      case "AiOutlineHome":
        return <AiOutlineHome color="white" size={30} />;
      case "AiFillHeart":
        return (
          <AiFillHeart
            color="white"
            size={24}
            className="bg-purple-500 p-0.5 rounded "
          />
        );
      case "FiSearch":
        return <FiSearch color="white" size={30} />;
      case "BiLibrary":
        return <BiLibrary color="white" size={30} />;
      case "MdAddBox":
        return <MdAddBox color="white" size={30} />;

      default:
        break;
    }
  };

  return (
    <div className="flex items-center opacity-70 py-1.5 px-2 transition-opacity duration-200 cursor-pointer w-full hover:opacity-100 ">
      {handleIcon(icon)}
      <h2 className="text-white my-0 font-gotham pl-3">{text}</h2>
    </div>
  );
}
