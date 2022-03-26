import React, {useEffect} from "react";
import { useRouter } from "next/dist/client/router";
import LinearGenresList from "./LinearGenresList";

export default function FlowField() {
  const router = useRouter();
  console.log(router.pathname)
  

  return (
    <div className="w-full h-full bg-green-800 flex justify-center text-white mt-20">
      <LinearGenresList/>
    </div>
  );
}
