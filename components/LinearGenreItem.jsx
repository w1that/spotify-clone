import Link from "next/link";
import React from "react";
import PlayListCard from "./PlayListCard";

export default function LinearGenreItem({ genre }) {
  return (
    <div className="w-full flex flex-col items-start">
      <Link href={`/genre/${genre._id}`} passHref>
        <h1 className="text-white text-2xl font-gotham cursor-pointer inline-block hover:underline ">
          {genre.title}
        </h1>
      </Link>
      <div className="flex justify-start">
        {genre.playLists.map((playList) => {
          return <PlayListCard id={playList} key={playList} />;
        })}
      </div>
    </div>
  );
}
