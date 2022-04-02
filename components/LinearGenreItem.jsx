import { observer } from "mobx-react-lite";
import Link from "next/link";
import React from "react";
import PlayListCard from "./PlayListCard";
import genreStore from "../mobx/GenreStore";

function LinearGenreItem({ genre }) {
  const handleClickOnGenre = (genre) => {
    genreStore.setGenre(genre);
  };

  return (
    <div className="w-full flex flex-col items-start mb-10">
      <Link href={`/genre/${genre._id}`} passHref>
        <h1
          onClick={() => handleClickOnGenre(genre)}
          className="text-white text-2xl font-gotham cursor-pointer inline-block hover:underline "
        >
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

export default observer(LinearGenreItem);
