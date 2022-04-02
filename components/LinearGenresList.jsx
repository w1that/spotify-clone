import { observer } from "mobx-react";
import React, { useState, useEffect } from "react";
import genreService from "../services/GenreService";
import LinearGenreItem from "./LinearGenreItem";
import genreStore from "../mobx/GenreStore";
import { useRouter } from "next/router";

function LinearGenresList() {
  // shows the content which will be listed on main page '/'

  const router = useRouter();
  const { id } = router.query;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    //get all genres.
    genreService.getGenres().then((res) => {
      genreStore.setGenres(res.data.data);
      setLoading(false);
    });
  }, []);

  function handleShowedContent() {
    //if id and a selected genre exist, it means we will show a selected genre content on /genre/xxx which looks same the ones which are on main page on 
    if (id && genreStore.selectedGenre) {
      return (
        <LinearGenreItem
          genre={genreStore.selectedGenre}
          key={genreStore.selectedGenre._id}
        />
      );
    } else {   //we are '/', and we want to show the list of genres.
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
