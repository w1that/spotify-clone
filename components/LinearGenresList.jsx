import { observer } from "mobx-react";
import React, { useState, useEffect } from "react";
import genreService from "../services/GenreService";
import LinearGenreItem from "./LinearGenreItem";
import genreStore from "../mobx/GenreStore";
import { useRouter } from "next/router";

function LinearGenresList() {
  // anasayfada görünecek olanlar burada sıralanacak

  const router = useRouter();
  const { id } = router.query;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    genreService.getGenres().then((res) => {
      genreStore.setGenres(res.data.data);
      setLoading(false);
    });
  }, []);

  function handleShowedContent() {
    if (id && genreStore.selectedGenre) {
      return (
        <LinearGenreItem
          genre={genreStore.selectedGenre}
          key={genreStore.selectedGenre._id}
        />
      );
    } else {
      return genreStore.genres.map((genre) => {
        return <LinearGenreItem genre={genre} key={genre._id} />;
      });
    }
  }
  if (loading) {
    return <></>;
  }

  return <div className="w-full">{handleShowedContent()}</div>;
}

export default observer(LinearGenresList);
