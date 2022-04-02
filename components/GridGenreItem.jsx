import React from "react";
import Image from "next/image";
import Link from "next/link";
import { observer } from "mobx-react-lite";
import genreStore from "../mobx/GenreStore";

function GridGenreItem({ genre }) {
  return (
    <Link href={`/genre/${genre._id}`} passHref>
      <button
        onClick={() => genreStore.setGenre(genre)}
        className={`w-44 h-44 rounded-lg flex overflow-hidden`}
        style={{ backgroundColor: genre.color }}
      >
        <h1 className="font-gotham text-white text-2xl p-4 font-bold">
          {genre.title}
        </h1>
        <div className="absolute -bottom-7 -right-4 rotate-45 shadow-gray-700 shadow-md shad">
          <Image alt="genre image" src={genre.cover} width={100} height={100} />
        </div>
      </button>
    </Link>
  );
}

export default observer(GridGenreItem);
