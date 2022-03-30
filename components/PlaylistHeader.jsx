import React from 'react'
import Image from 'next/image'

export default function PlaylistHeader({playlist}) {
  return (
    <div
        className="w-full h-64 flex items-center px-8 py-4"
        style={{
          background:
            "linear-gradient(0deg, rgba(119,119,119,1) 5%, rgba(172,172,172,1) 100%)",
        }}
      >
        <div className="drop-shadow-2xl shadow-black">
          <Image
            src={playlist.coverImage}
            width={220}
            height={220}
            alt="playlist cover image"
          />
        </div>
        <div className="ml-8 self-end">
          <h4 className="font-gotham text-white m-0">ÇALMA LISTESI</h4>
          <h1 className="font-gotham text-8xl text-white m-0 font-bold">
            {playlist.title}
          </h1>
          <h6 className="font-gotham m-0 text-lighty-gray mt-2">
            {playlist.description}
          </h6>
          <div className="flex">
            <h6 className="m-0 font-gotham text-white mr-1">
              {playlist.likes} beğenme •
            </h6>
            <h6 className="m-0 font-gotham text-white">
              {playlist.musics.length} şarkı
            </h6>
          </div>
        </div>
      </div>
  )
}
