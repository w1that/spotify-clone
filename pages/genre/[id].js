import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import AppLayout from "../../components/AppLayout";
import genreService from "../../services/GenreService";

export default function GenrePage() {
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    genreService.getGenreById(id, setLoading);
  }, []);

  if (loading) {
    return <></>;
  }

  return (
    <div>
      <AppLayout page={"genre"} />
    </div>
  );
}
