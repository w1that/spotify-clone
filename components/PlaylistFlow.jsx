import React, { useState, useEffect } from "react";
import { useRouter } from "next/dist/client/router";
import axios from "axios";
import PlaylistHeader from "./PlaylistHeader";
import MusicFlowField from "./MusicFlowField";
import playlistService from "../services/PlaylistService";

export default function PlaylistFlow() {
  const router = useRouter();
  const [playlist, setPlaylist] = useState({ cover: "" });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    playlistService.getPlaylistById(router.query.id, setPlaylist, setLoading);
  }, []);

  if (loading) {
    return <></>;
  }

  return (
    <div className="w-full flex flex-col justify-center pt-16">
      <PlaylistHeader playlist={playlist} />
      <MusicFlowField playlist={playlist} />
    </div>
  );
}
