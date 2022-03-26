import React from 'react'
import { RiSearchLine } from "react-icons/ri";

export default function SearchBar() {
  return (
    <div className="relative pl-12 focus:outline-none ">
      <input
        className="ring-0 px-3 py-2 w-80 rounded-full relative pl-12 focus:outline-none "
        placeholder="Sanatçılar, şarkılar veya podcastler"
      ></input>
      <RiSearchLine size={30} className="absolute top-1 ml-2" />
    </div>
  )
}
