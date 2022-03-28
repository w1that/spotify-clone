import React, { useState, useEffect } from "react";
import playlistService from "../services/PlaylistService";
import Image from "next/image";
import Link from "next/link";
import userStore from "../mobx/UserStore";

export default function PlayListCard({ id }) {
  // playlist card, anasayfada ve ara'daki de aynı şekildeler.
  const [playlist, setPlaylist] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    playlistService.getPlaylistById(id).then((res) => {
      setPlaylist(res.data.data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <></>;
  }
  return (
    <Link href={`/playlist/${id}`}>
    <div
      className="bg-medium-gray rounded-md p-4 mr-5 flex z-10 flex-col h-72 cursor-pointer hover:bg-hover-gray duration-500"
      style={{ width: 192 }}
    >
      <Image
        className="rounded-md "
        src={playlist.coverImage}
        width={160}
        height={160}
        alt="cover image"
      />
      <div className="text-white mt-6">
        <h2 className="text-white m-0 font-gotham font-bold">
          {playlist.title}
        </h2>
        <h4 className="text-weak-gray m-0 font-gotham text-sm">
          {playlist.description}
        </h4>
        
      </div>
    </div>
    </Link>
  );
}
